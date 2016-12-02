const nodemon = require('nodemon')
require('log-theme')

// node 服务器自动重启
nodemon({
  script: 'app.js',
  ext: 'js json'
})

nodemon.on('start', () => {
  console.log(`\n\nApp has started\n-------------\n`)
}).on('quit', () => {
  console.warn(`App has quit\n|-|-|-|-||-|-|-|-||-|-|-|-|\n`)
}).on('restart', (files) => {
  console.error(`\nApp restarted due to: ${files}\n****************\n`)
})
