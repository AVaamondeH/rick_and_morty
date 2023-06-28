const http = require('http');
const data = require('./utils/data')

http.createServer((request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    let URL = request.url.split("character/")[1]

    if (request.url === `/rickandmorty/character/${URL}`){
        response.writeHead(200, { 
            "content-type" : "application/json"
        })
        const id = Number(URL)

        return response.end(JSON.stringify(data[id - 1]))
    }
    else {
        response.writeHead(404, { 
            "content-type" : "text/plain" 
        })
        response.end("not found")
    }
})
.listen(3001, "127.0.0.1")