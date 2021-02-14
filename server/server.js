const express = require('express');
const connectDB = require('./config/db')
const app = express();

connectDB()


//init middleware
app.use(express.json())

// app.get('/',(req,res)=> res.send('API Running'))

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use('/api/users',require('./routes/api/users'))
app.use('/api/books',require('./routes/api/books'))
app.use('/api/auth',require('./routes/api/auth'))
app.use('/api/profile', require('./routes/api/profile'))
app.use('/api/address',require('./routes/api/address'))

const PORT = process.env.PORT || 80

app.listen(PORT, ()=>console.log(`Server started on port ${PORT}`));