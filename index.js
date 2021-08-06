const app = require("express")();
const httpServer = require("http").createServer(app);
const options = { /* ... */ };
const io = require("socket.io")(httpServer, options);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('hello', (arg) => {
      console.log(arg);
  })
  socket.emit('foo', 'bar');
});

const port = process.env.PORT || 3000;

httpServer.listen(port, () => {
  console.log('listening on *:' + port);
});