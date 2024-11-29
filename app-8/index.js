const express = require('express')
const cynnaJSON = require('./users/cynna.json')
const elizabethJSON = require('./users/elizabeth.json')
const aliceJSON = require('./users/alice.json')
const alexJSON = require('./users/alex.json')
const chloeJSON = require('./users/chloe.json')
const saraJSON = require('./users/sara.json')

const PORT = process.env.PORT ?? 1357

const app = express()

app.disable('x-powered-by')

app.use(express.json())
// Todo este middleware se puede omitir si usamos la línea de arriba
// app.use((req, res, next) => {
//   if (req.method !== 'POST') return next()
//   if (req.headers['content-type'] !== 'application/json') return next()

//   let body = ''
//   req.on('data', (chunk) => {
//     body += chunk.toString()
//   })

//   req.on('end', () => {
//     const data = JSON.parse(body)
//     req.body = data
//     next()
//   })
// })

// app.get('/', (req, res) => {
//   res.send(
//     'Bienvenido a la presentación del sistema, ve a las rutas con los nombres de cada alter para ver información de tal alter.'
//   )
// })

app.get('/cynna', (req, res) => {
  res.json(cynnaJSON)
})

app.get('/elizabeth', (req, res) => {
  res.json(elizabethJSON)
})

app.get('/alice', (req, res) => {
  res.json(aliceJSON)
})

app.get('/alex', (req, res) => {
  res.json(alexJSON)
})

app.get('/chloe', (req, res) => {
  res.json(chloeJSON)
})

app.get('/sara', (req, res) => {
  res.json(saraJSON)
})

app.post('/add', (req, res) => {
  res.status(201).json(req.body)
})

app.use((req, res) => {
  res.status(404).end('No se ha encontrado la ruta solicitada (Error 404)')
})

app.listen(PORT, () => {
  console.log(`Escuchando el puerto ${PORT} uwu`)
  console.log(`Puedes entrar a esta ruta: http://localhost:${PORT}`)
})
