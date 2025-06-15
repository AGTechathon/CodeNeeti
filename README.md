# KaalChakra

KaalChakra is a full-stack web application for exploring Indian history through interactive timelines, events, and educational content. The project is divided into two main parts: a Node.js/Express backend and a React frontend.

---

## Project Structure

```
kaalchakra/
  kalachakra/
    backend/
      .env
      package.json
      server.js
      credentials/
        kaalchakra-tts-key.json
      public/
        audios/
      routes/
        events.js
        events1.js
      tmp/
        *.mp3
      utils/
    frontend/
      .gitignore
      bun.lockb
      components.json
      index.html
      package.json
      postcss.config.js
      README.md
      tailwind.config.js
      tsconfig.app.json
      vite.config.js
      public/
      src/
```

---

## Backend

- **Tech Stack:** Node.js, Express, Google Cloud Text-to-Speech, Gemini API, CORS, dotenv
- **Features:**
  - REST API for historical events (`/api/events`)
  - Text-to-speech audio generation for event summaries
  - Static serving of generated audio files
  - Uses Google Cloud credentials for TTS in `credentials/kaalchakra-tts-key.json`
- **Run Backend:**
  1. Install dependencies:
     ```sh
     cd kalachakra/backend
     npm install
     ```
  2. Set up `.env` with your API keys (see `.env` for required variables).
  3. Start the server:
     ```sh
     npm start
     ```
  4. The backend runs on port `5000` by default.

---

## Frontend

- **Tech Stack:** React, Vite, Tailwind CSS, Shadcn UI, Lucide Icons
- **Features:**
  - Modern UI for browsing events, timelines, and quizzes
  - Dark/light theme toggle (with localStorage persistence)
  - Responsive navigation and pages (Home, About, Events, Contact, Login)
  - Fetches data from backend API and plays generated audio summaries
- **Run Frontend:**
  1. Install dependencies:
     ```sh
     cd kalachakra/frontend
     npm install
     ```
  2. Start the development server:
     ```sh
     npm run dev
     ```
  3. The frontend runs on port `8080` by default and proxies `/api` requests to the backend.

---

## Development Notes

- **API Proxy:** The frontend is configured to proxy `/api` requests to the backend (`http://localhost:5000`) via Vite config.
- **Audio Files:** Generated audio summaries are stored in `backend/public/audios` and served at `/audios`.
- **Environment Variables:** Backend requires Google and Gemini API keys in `.env`.

---

## Team

- Mansi Halkude (Frontend Expert)
- Chaturved Mudagi (Team Leader)
- Laxmi Chavan (Backend Expert)
- Kaivalya Nakhate (API Expert)

---

## License

This project is for educational purposes.