import net from 'net';

const server = net.createServer(socket => {
    socket.on('data', data => {
        console.log(data.toString())

        socket.write(`${data.toString()} Mundo?`)
    })
});

server.on('error', () => console.log('se ha producido un error'));


server.listen({
    host: 'localhost',
    port: 8000,
    exclusive: true
},
()=> console.log(`Servidor socket abierto en ${server.address()}`)
);



process.on('unhandledRejection', (err, p) => {
    console.log('Custom Error: An unhandledRejection occurred')
    console.log(`Custom Error: Rejection: ${err}`)
  })
  
  process.on('uncaughtException', err => {
    console.log('Custom Error: An uncaughtException occurred')
    console.log(`Custom Error: Rejection: ${err}`)
  })
  
  setTimeout(() => console.log('This will still run.'), 500)
  
  // El error es JSON.pasre
  Promise(resolve => JSON.pasre({ color: 'azul' }))
  // test()
  // throw 'casa