# Study-Buddy

## Run locally

1) Create a `.env` in the project root (you mentioned your key is added). Example values:

```
PERPLEXITY_API_KEY=your_pplx_key_here
PORT=3001
```

2) Start both the API and the web app:

```
npm run dev
```

This launches:
- API at `http://localhost:3001` (Express)
- Web at `http://localhost:5173` (Vite) with proxy to `/api`

If you prefer running them separately:
- API only: `npm run dev:server`
- Web only: `npm run dev:web`

The Ask AI box calls `POST /api/ask` which forwards your question to Perplexity and returns the model’s answer.
