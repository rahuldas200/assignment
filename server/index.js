const express = require('express');
const authRoute = require('./routes/Auth');
const mongoose = require('./config/mongoose');
const cors = require('cors')

const app = express();
const port = process.env.PORT || 4000
mongoose.connect();

const corsOptions = {
    origin: 'https://scalenow-client.vercel.app', // only allow requests from this origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
    exposedHeaders: 'Content-Range,X-Content-Range',
    credentials: true // enable set cookie
};
app.use(cors(corsOptions));

app.use(express.json())

app.use('/api/v1/auth',authRoute);
app.get('/',(req,res) => {
    res.send('Hello,world')
})

app.listen(port,()=>{
    console.log(`server running on http://localhost:${port}`)
})