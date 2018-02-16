const express = require('express')
const app = express()
const port = process.env.PORT || 80

app.get('/', (req, res) =>
  res.send('Home')
)

app.get('/other', (req, res) =>
  res.send('Other')
)

app.listen(port, () =>
  console.info(`Web server ready at http://localhost:${port}`)
)
