const express=require('express')
const cors=require('cors')
const logic=require('./services/logic')
const server=express()
server.use(cors({
    origin:'http://localhost:3000'
}))
server.use(express.json())
server.listen(8000,()=>{
    console.log('server connected to port number 8000');
})

//get all users
server.get('/get-all-users',(req,res)=>{
logic.allUsers()
.then((result)=>{
    res.status(result.statusCode).json(result)
})
})

//register users
server.post('/register',(req,res)=>{
    logic.addUser(req.body.id,req.body.name,req.body.email,req.body.password)
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
    })

    