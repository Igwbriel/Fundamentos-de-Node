import http from 'node:http'
import { Transform } from 'node:stream'

class InverseNumberStream extends Transform {
  _transform(chunk, encoding, callback) {
    const transformed = Number(chunk.toString()) * -1

    console.log(transformed)

    callback(null, Buffer.from(String(transformed)))
  }
}

// req => ReadableStream
// res => WritableStream

const server = http.createServer(async (req, res) => {

  console.log(fullStreamContent)

  return res.end(fullStreamContent)
})

server.listen(3334)