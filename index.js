const http = require('http');
const server = http.createServer((req,res)=>{
    if(req.url=='/'){
        res.end(`
            <h1>Hello from Me</1h>
            <h1>from Me</h1>`)
    }
})
server.listen(3000,()=>{
    console.log("Server is running")
})