const express = require('express')
const cookieParser = require('cookie-parser')

const suicideRoutes = require('./src/SUICIDE_ANALYSIS/routes')

const app = express()

app.use(express.json())
app.use(cookieParser())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/v1/suicides', suicideRoutes)

app.listen(
  5000,
  () => console.log('listening in port 5000')
)
