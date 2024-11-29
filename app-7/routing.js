const http = require('node:http')
const { findAvailablePort } = require('./findAvailablePort.js')
const cynnaJSON = require('./users/cynna.json')
const elizabethJSON = require('./users/elizabeth.json')
const aliceJSON = require('./users/alice.json')
const alexJSON = require('./users/alex.json')
const chloeJSON = require('./users/chloe.json')
const saraJSON = require('./users/sara.json')

const desiredPort = process.env.PORT ?? 1357

const processRequest = (req, res) => {
  const { method, url } = req
  res.setHeader('Content-Type', 'text/plain; charset=utf-8')

  switch (method) {
    case 'GET':
      switch (url) {
        case '/': {
          return res.end(
            'Bienvenido a la presentación del sistema, ve a las rutas con los nombres de cada alter para ver información de tal alter.'
          )
        }
        case '/cynna': {
          res.setHeader('Content-Type', 'application/json; charset=utf-8')
          return res.end(JSON.stringify(cynnaJSON))
        }
        case '/elizabeth': {
          res.setHeader('Content-Type', 'application/json; charset=utf-8')
          return res.end(JSON.stringify(elizabethJSON))
        }
        case '/alice': {
          res.setHeader('Content-Type', 'application/json; charset=utf-8')
          return res.end(JSON.stringify(aliceJSON))
        }
        case '/alex': {
          res.setHeader('Content-Type', 'application/json; charset=utf-8')
          return res.end(JSON.stringify(alexJSON))
        }
        case '/chloe': {
          res.setHeader('Content-Type', 'application/json; charset=utf-8')
          return res.end(JSON.stringify(chloeJSON))
        }
        case '/sara': {
          res.setHeader('Content-Type', 'application/json; charset=utf-8')
          return res.end(JSON.stringify(saraJSON))
        }
        default: {
          res.statusCode = 404
          res.setHeader('Content-Type', 'text-plain; charset=utf-8')
          res.end('Nothing here bro')
          break
        }
      }
      break

    case 'POST':
      switch (url) {
        case '/add': {
          let body = ''
          req.on('data', (chunk) => {
            body += chunk.toString()
          })

          req.on('end', () => {
            const data = JSON.parse(body)
            res.writeHead(201, {
              'Content-Type': 'application/json; charset=utf-8',
            })
            res.end(JSON.stringify(data))
          })
          break
        }
      }
      break
    default: {
      res.statusCode = 404
      res.setHeader('Content-Type', 'text-plain; charset=utf-8')
      res.end('Nothing here bro')
      break
    }
  }
}

const server = http.createServer(processRequest)

findAvailablePort(desiredPort).then((port) => {
  server.listen(port, () => {
    console.log(`Escuchando el puerto ${port} uwu`)
    console.log(`Puedes entrar a esta ruta: http://localhost:${port}`)
  })
})
