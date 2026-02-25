# OneHubGlobal Standalone Backend Server

This is a separated backend logic for the OneHubGlobal platform, built with Node.js and Express.

## Why this exists?
To separate the "Business Logic" and "Database Operations" from the Next.js frontend project without modifying the existing website.

## Structure
- `src/index.js`: Main entry point.
- `src/config/db.js`: MongoDB connection setup.
- `src/controllers/`: Logic for handling requests.
- `src/routes/`: API endpoint definitions.

## How to run
1. Open a separate terminal.
2. Navigate to this folder: `cd backend-server`
3. Install dependencies: `npm install`
4. Start the server: `npm run dev`

The server will run on `http://localhost:5000` by default.

## API Endpoints
- `GET /health`: Check if server is alive.
- `POST /api/auth/signup`: Register a new user.
- `POST /api/auth/login`: Authenticate a user.
