const mongoose = require('mongoose')

const AddressSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    fullname:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    phone:{
        type: Number,
        required:true
    },
    pincode:{
        type:Number,
        required:true
    },
    flataddress:{
        type: String,
        required:true
    },
    areastreet:{
        type: String
    },
    landmark:{
        type: String
    },
    city:{
        type:String,
        required:true
    }

})

module.exports = Address = mongoose.model('address',AddressSchema);