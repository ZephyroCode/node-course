const http = require('node:http')
const { findAvailablePort } = require('./findAvailablePort.js')

const desiredPort = process.env.PORT ?? 1357

const processRequest = (req, res) => {
  res.setHeader('Content-Type', 'text-plain; charset=utf-8')
  if (req.url === '/') {
    res.statusCode = 200 // Oki :)
    console.log('Request recibida uwu')
    res.end('Holis uwu')
  } else {
    res.statusCode = 404 // Not found x.x
    res.end('Nada por aquí darling')
  }
}

const server = http.createServer(processRequest)

findAvailablePort(desiredPort).then((port) => {
  server.listen(port, () => {
    console.log(`Viendo/escuchando el puerto ${port} uwu`)
    console.log(`Puedes entrar a esta ruta: http://localhost:${port}`)
  })
})
