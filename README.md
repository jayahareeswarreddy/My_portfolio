# Jaya Hareeswar Reddy – Portfolio

A MERN stack portfolio site: **M**ongoDB (optional for contact form), **E**xpress, **R**eact, **N**ode.js.

## Features

- **React (Vite)** frontend with sections: Hero, About, Experience, Projects, Skills, Education, Certifications, Contact
- **Node.js + Express** API with contact form endpoint
- **MongoDB** (optional) to store contact form submissions
- Responsive layout, dark theme, smooth scroll navigation
- Resume data sourced from [Jaya Hareeswar Reddy](https://www.linkedin.com/in/jayahareeswarreddy/) and [GitHub](https://github.com/jayahareeswarreddy)

## Quick start

### 1. Backend

```bash
cd server
npm install
cp .env.example .env
# Edit .env if you want MongoDB (optional)
npm run dev
```

Server runs at **http://localhost:5000**.

### 2. Frontend

```bash
cd client
npm install
npm run dev
```

App runs at **http://localhost:5173**. The Vite dev server proxies `/api` to the backend.

**Run from your own terminal** (PowerShell or Command Prompt), not only from the IDE. If you see `spawn EPERM`, `spawn UNKNOWN`, or `ENOSPC`, run the commands above in a normal terminal window.

### 3. Production build

```bash
cd client
npm run build
```

Serve the `client/dist` folder (e.g. with Express static or any static host). Set `VITE_API_URL` when building if your API is on a different origin.

## Environment

| Variable       | Description                          |
|----------------|--------------------------------------|
| `PORT`         | Server port (default: 5000)          |
| `CLIENT_URL`   | Allowed CORS origin (e.g. frontend)  |
| `MONGODB_URI`  | Optional; omit to skip DB (form still returns success) |

## Tech stack

- **Frontend:** React 18, Vite, CSS (Outfit + JetBrains Mono)
- **Backend:** Node.js, Express, Mongoose (optional)
- **Data:** Resume content in `client/src/data.js`

## Troubleshooting

- **Vite fails with `spawn EPERM` or `spawn UNKNOWN`**  
  Run `npm run dev` from a normal terminal (PowerShell/CMD) in the `client` folder. If it still fails, run `npx vite --configLoader runner` instead.

- **"No space left on device"**  
  Run `npm install` and `npm run dev` in your own terminal (outside the IDE) so they use your normal temp/disk space.

- **Port already in use**  
  Change the port in `client/vite.config.js` (e.g. `server: { port: 3000 }`) or stop the process using port 5173/5000.
