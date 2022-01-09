const express = require('express')
const app = express()
const cors = require('cors')
const enforce = require('express-sslify')

app.use(enforce.HTTPS({ trustProtoHeader: true }))

app.use(cors({optionSuccessStatus: 200}))

app.get('/api/:date?', (req, res) => {
  const date = req.params.date ? new Date(isNaN(req.params.date) ? req.params.date : req.params.date * 1000) : new Date()
  if('Invalid Date' == date) return res.json({ 'error': 'Invalid Date' })
  return res.json({ 'unix': Math.floor(date.getTime()), 'utc': date.toGMTString() })
})

app.listen(process.env.PORT || 3000, () => {
  console.log(`listening on http://localhost:${process.env.PORT || 3000}`)
})
