import express from 'express'
import dotenv from 'dotenv'
import fetch from 'node-fetch'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001
const PERPLEXITY_API_KEY = process.env.PERPLEXITY_API_KEY

app.use(express.json({ limit: '1mb' }))

app.get('/api/health', (_req, res) => {
  res.json({ ok: true })
})

app.post('/api/ask', async (req, res) => {
  try {
    if (!PERPLEXITY_API_KEY) {
      return res.status(500).json({ error: 'Server misconfiguration: missing PERPLEXITY_API_KEY' })
    }

    const { question, subject, grade } = req.body || {}
    if (!question || typeof question !== 'string' || !question.trim()) {
      return res.status(400).json({ error: 'Invalid request: "question" is required' })
    }

    const body = {
      model: 'pplx-7b-chat',
      messages: [
        {
          role: 'user',
          content: question,
        },
      ],
      // Optional: you could include subject/grade as system hint for better answers
      // but keeping minimal per requirements
    }

    const r = await fetch('https://api.perplexity.ai/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${PERPLEXITY_API_KEY}`,
      },
      body: JSON.stringify(body),
    })

    const data = await r.json().catch(() => ({}))

    if (!r.ok) {
      const msg = data?.error?.message || r.statusText || 'Upstream error'
      return res.status(502).json({ error: `Perplexity error: ${msg}` })
    }

    const answer = data?.choices?.[0]?.message?.content || ''
    if (!answer) {
      return res.status(500).json({ error: 'Malformed response from Perplexity' })
    }

    res.json({ answer })
  } catch (err) {
    console.error('Ask API error:', err)
    res.status(500).json({ error: 'Internal server error' })
  }
})

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
})

