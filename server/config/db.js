const mongoose = require('mongoose')
const config = require('config')

const db = config.get('mongoURI')


const connectDB = async ()=>{
    try{
        await mongoose.connect(db,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useCreateIndex: true
        })
        console.log('MongoDB connected...')
    }catch(err){
        console.error(err.message);
        //on error need to terminate process
        process.exit(1)
    }
}

module.exports = connectDB