const http = require('node:http')

const server = http.createServer((req, res) => {
  console.log('Request recibida uwu')
  res.end('Holis uwu')
})

server.listen(0, () => {
  console.log(`Viendo/escuchando el puerto ${server.address().port} uwu`)
  console.log(
    `Puedes entrar a esta ruta: http://localhost:${server.address().port}`
  )
})
