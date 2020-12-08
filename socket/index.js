const http = require('http')
const app = require('express')()
const server = http.createServer(app)
const io = require('socket.io')(server)

io.on('connection', socket => {
  console.log(`Socket ID: ${socket.id}を接続しました。`)

  socket.on('post-tweets', tweets => {
    socket.broadcast.emit('new-tweets', tweets)
    console.log(`新しいTweetsをクライアントへ送信しました。`)
  })
})

server.listen(4000)
