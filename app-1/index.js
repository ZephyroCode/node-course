// Vamos a hacer un "ls" con Node.js

const fs = require('node:fs')

fs.readdir('.', (err, files) => {
  if (err) throw new Error(err)

  files.forEach((file) => {
    console.log(file)
  })
})
