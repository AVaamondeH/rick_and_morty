// const http = require('http');
// const getCharById = require('./controllers/getCharById')

// http.createServer((request, response) => {
//     response.setHeader('Access-Control-Allow-Origin', '*');
     
//     let id = request.url.split("character/")[1]

//     if (request.url.includes(`rickandmorty/character/${id}`)){
//         getCharById(response, +id)
//     }

//     else {
//         response.writeHead(404, { 
//             "content-type" : "text/plain" 
//         })
//         response.end("not found")
//     }
// })
// .listen(3001, "127.0.0.1")

const express = require('express');
const server = express();
const PORT = 3001;
const routes = require("./routes/index")
const { database } = require("./DB_connection")



server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
        );
        res.header(
            'Access-Control-Allow-Methods',
            'GET, POST, OPTIONS, PUT, DELETE'
            );
            next();
});

server.use(express.json());
        
server.use("/rickandmorty", routes);

database.sync({force: true}).then(() => 
    server.listen(PORT, () => {
        console.log('Server raised in port: ' + PORT);
    })
)
    

