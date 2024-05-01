const express = require('express')

const app = express()

app.use((req, res) => {
  res.send('<h1>404</h1>')
})

app.listen(
  5000,
  () => console.log('listening in port 5000')
)
