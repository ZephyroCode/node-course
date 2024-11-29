// El ejemplo de ls un poco más avanzado
const fs = require('node:fs/promises')

const folder = process.argv[2] ?? '.'

fs.readdir(folder)
  .then((files) => {
    files.forEach((file) => {
      console.log(file)
    })
  })
  .catch((err) => {
    throw new Error(err)
  })
