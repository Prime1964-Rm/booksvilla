const express = require('express');
const auth = require('../../middleware/auth');
const router = express.Router();
const {check, validationResult} = require('express-validator')
const User = require('../../models/User')

const Address= require('../../models/Address');
const { create, update } = require('../../models/User');
const { isValidObjectId } = require('mongoose');

//Fetch Address
router.get('/myaddress',auth,
 async (req,res)=>{
    const address = await Address.find({user:req.user.id})
    try{
        console.log(address)
        if(!address){
            return res.status(404).json({msg:'No Address Found'})
        
        }
       return res.json(address)
      
    }
    catch(err){
        // console.error("This is full Error",err);

        res.status(500).send('Server Error')
    }
})

//Post Address

router.post('/',[auth,[
    check('fullname','Name Required').not().isEmpty(),
    check('state','State isn\'t selected').not().isEmpty(),
    check('pincode','Pincode is Required').not().isEmpty(),
    check('phone','Phone number is Required').not().isEmpty(),
    check('flataddress','Your flat no, building name is required ').not().isEmpty(),
    check('city','City Name is required').not().isEmpty()
]],
async (req,res)=>{

    const {
        user,
        id,
        fullname,
        state,
        phone,
        pincode,
        flataddress,
        areastreet,
        landmark,
        city
    } = req.body;

    const addressFields={}
     addressFields.user = req.user.id;
     if(fullname) addressFields.fullname = fullname;
     if(state) addressFields.state = state;
     if(phone) addressFields.phone = phone;
     if(pincode) addressFields.pincode = pincode;
     if(flataddress) addressFields.flataddress = flataddress;
     if(areastreet) addressFields.areastreet= areastreet;
     if(landmark) addressFields.landmark = landmark;
     if(city) addressFields.city = city;

    try{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()})
        }

        
        let valid = isValidObjectId(id)
        console.log("valid", valid)
        
    
        let address = await Address.findById(id)
           
        if(address){
            address = await Address.findOneAndUpdate({_id:id},{$set:addressFields},(error,res)=>{
                if(error){
                    console.error(error)
                }else{res}
            })
            return res.json(address)
        }else{
            address = new Address(addressFields);
            await address.save();
            return res.json(address)
        }
    }
    catch(err){
        console.error(err.message);
        return res.status(500).send('Server Error')
    }
}
)

module.exports= router