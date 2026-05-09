import type { APIRoute } from 'astro';

export const prerender = false;

const CACHE_TTL_MS = 10 * 60 * 1000;
const USERNAME_PATTERN = /^(?!-)(?!.*--)[a-zA-Z0-9-]{1,39}(?<!-)$/;
const cache = new Map<string, { data: unknown; expiresAt: number }>();

const jsonResponse = (body: unknown, status = 200, cacheStatus?: 'HIT' | 'MISS') => {
	const headers = new Headers({ 'Content-Type': 'application/json' });

	if (cacheStatus) {
		headers.set('X-Cache', cacheStatus);
	}

	return new Response(JSON.stringify(body), { status, headers });
};

const isValidUsername = (username: string) => USERNAME_PATTERN.test(username);

export const GET: APIRoute = async ({ params }) => {
	const username = params.username?.trim();

	if (!username || !isValidUsername(username)) {
		return jsonResponse({
			error: 'Please provide a valid GitHub username',
			status: 400,
		}, 400);
	}

	const cacheKey = username.toLowerCase();
	const cached = cache.get(cacheKey);
	const now = Date.now();

	if (cached) {
		if (cached.expiresAt > now) {
			return jsonResponse(cached.data, 200, 'HIT');
		}

		cache.delete(cacheKey);
	}

	try {
		const githubResponse = await fetch(`https://github.com/${username}.contribs`, {
			headers: { 'Accept': 'application/json' },
		});

		if (!githubResponse.ok) {
			if (githubResponse.status === 404) {
				return jsonResponse({
					error: 'GitHub user not found',
					status: 404,
				}, 404);
			}

			return jsonResponse({
				error: 'Could not fetch contribution data',
				status: githubResponse.status,
			}, githubResponse.status);
		}

		const data: unknown = await githubResponse.json();

		cache.set(cacheKey, {
			data,
			expiresAt: now + CACHE_TTL_MS,
		});

		return jsonResponse(data, 200, 'MISS');
	} catch (_error) {
		return jsonResponse({
			error: 'Could not fetch contribution data',
			status: 502,
		}, 502);
	}
};
