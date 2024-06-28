const express = require('express');
const authRoute = require('./routes/Auth');
const mongoose = require('./config/mongoose');
const cors = require('cors')

const app = express();
const port = process.env.PORT || 4000
mongoose.connect();

app.use(
	cors({
		origin: "*",
		credentials: true,
	})
);

app.use(express.json())

app.use('/api/v1/auth',authRoute);
app.get('/',(req,res) => {
    res.send('Hello,world')
})

app.listen(port,()=>{
    console.log(`server running on http://localhost:${port}`)
})