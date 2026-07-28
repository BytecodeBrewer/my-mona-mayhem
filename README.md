# Contribution Arena

Contribution Arena is an Astro web app that compares two GitHub users by their contribution graphs. Enter two usernames, start a battle, and the app fetches each user's public contribution data through a server-side API route before rendering totals and graph previews in an arcade-style interface.

## Features

- Compare two GitHub users side by side.
- Fetch contribution graph data through an Astro API endpoint.
- Cache contribution responses briefly to reduce repeated upstream requests.
- Validate GitHub usernames before making API calls.
- Use a responsive, keyboard-friendly battle form that works on desktop and mobile.
- Run locally on your network for phone and tablet testing.

## Requirements

- Node.js
- npm
- Git, if you are cloning or contributing to the project

## Getting Started

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Open the local URL printed by Astro, usually:

```text
http://localhost:4321/
```

## Mobile Testing

To test from a phone or tablet, start Astro in network mode:

```bash
npm run dev:network
```

Open the printed Network URL on your mobile device. The port can change if Astro finds the default port busy, so trust the exact URL printed in the terminal.

Make sure your computer and mobile device are on the same Wi-Fi network. If Windows Firewall prompts you, allow Node.js or Astro to accept connections on the local network. Do not open `localhost` or `127.0.0.1` on the phone; those addresses point to the phone itself, not your computer.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Astro dev server for local desktop development. |
| `npm run dev:network` | Start the Astro dev server on the local network for mobile testing. |
| `npm run build` | Build the app for production. |
| `npm run preview` | Preview the production build locally. |
| `npm run lint` | Run ESLint against the source files. |
| `npm run lint:fix` | Run ESLint and apply safe automatic fixes. |

## Tech Stack

- Astro 5
- Astro Node adapter for server-rendered API routes
- TypeScript
- ESLint

## Origin

This project began from Mona's workshop template and has been adapted into a standalone GitHub contribution battle app.

## License

MIT
