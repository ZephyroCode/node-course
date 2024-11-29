const http = require('node:http')
const { findAvailablePort } = require('../app-7/findAvailablePort.js')
const cynnaJSON = require('./users/cynna.json')

const desiredPort = process.env.PORT ?? 1357

const processRequest = (req, res) => {
  const { method, url } = req

  switch (method) {
    case 'GET':
      switch (url) {
        case '/':
          res.setHeader('Content-Type', 'application/json; charset=utf-8')
          return res.end(JSON.stringify(cynnaJSON))
        default:
          res.statusCode = 404
          res.setHeader('Content-Type', 'text-plain; charset=utf-8')
          res.end('Nothing here bro')
      }
      break

    default:
      console.log('nya')
      break
  }
}

const server = http.createServer(processRequest)

findAvailablePort(desiredPort).then((port) => {
  server.listen(port, () => {
    console.log(`Viendo/escuchando el puerto ${port} uwu`)
    console.log(`Puedes entrar a esta ruta: http://localhost:${port}`)
  })
})
