const http = require('http');

const server = http.createServer((req, res) => {
   
    if(req.url === '/') {
        res.end('Home page')
    }

    if(req.url === '/about') {
        res.end('About Page')
    }
     res.end(`
          <h1>Page is not found!</h1>
         <a href='/'>Go home</a>
     `)
  
})

server.listen(5000);