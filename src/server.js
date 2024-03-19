import http from 'node:http'

const users = []

const server = http.createServer((req, res) => {  
  const {method, url} = req
  
  if (method === 'GET' && url=== '/users/') {
    return res
    .setHeader('content-type', 'application/json')
    .end(JSON.stringify(users))
  }

  if (method === 'POST' && url=== '/users/') {
    users.push({
      id: 1,
      name: 'Isa',
      email: 'IsaApex@gmail.com',
    })

    return res.end('Criação de úsuarios')
  }


  return res.end('hello world');
})

server.listen(3333)
