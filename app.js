const express = require('express')
const app = express()
const cors = require('cors');
// const http = require('http');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const router = require('./Backend/routes/userRoutes');
const router1 = require('./Backend/routes/categRoutes');
const router2 = require('./Backend/routes/productRoutes');
const router3 = require('./Backend/routes/userRoutes');
const router4 = require('./Backend/routes/favRoutes');

app.use('/api/user',router);
app.use('/api/cat',router1);
app.use('/api/prod',router2);
app.use('/api/user',router3);
app.use('/api/fav',router4);

// const server = http.createServer(app);
//http://127.0.0.1:3000/api/user
app.get('/',(req,res)=>{
    res.send("<h1> welcome </h1>")
})

app.listen(3000,()=>{
    console.log('running');
})
