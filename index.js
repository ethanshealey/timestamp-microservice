const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors({optionSuccessStatus: 200}))

app.get('/api/:date?', (req, res) => {
  const date = req.params.date ? new Date(req.params.date) : new Date()
  if('Invalid Date' == date) return res.json({ 'error': 'Invalid Date' })
  return res.json({ 'unix': Math.floor(date.getTime() / 1000), 'utc': date.toGMTString() })
})

app.listen('3000', () => {
  console.log('listening on http://localhost:3000')
})
