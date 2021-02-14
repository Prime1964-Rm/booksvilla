const mongoose = require('mongoose');

const BookSchema  = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    src:{
        type: String,
        required: true
    },
    imageList:{
       
    },
    author:{
        type:String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    rating:[{
        userId:{
            type:String
        },
        ratedValue:{
            type:Number
        }
    }
    ] ,
    stock:{
        type: Number
    }
})

module.exports = Book = mongoose.model('book',BookSchema)