const express = require('express')
const nunjucks = require('nunjucks')

const app = express()
nunjucks.configure('views', {
  autoescape: true,
  express: app,
  watch: true
})
app.set('view engine', 'njk')

app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  return res.render('age')
})
var age

app.get('/major', (req, res) => {
  return res.render('major', { age })
})

app.get('/minor', (req, res) => {
  return res.render('minor', { age })
})

app.post('/check', (req, res) => {
  console.log(req.body)
  age = req.body.age
  if (age >= 18) {
    res.redirect('/major')
  } else {
    res.redirect('/minor')
  }
})

app.listen(3000)
