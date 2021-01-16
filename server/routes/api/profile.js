const express = require('express')
const router = express.Router();
const gravatar = require('gravatar')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {check, validationResult} = require('express-validator')
const config = require('config')
const Profile = require('../../models/Profile')
const User = require('../../models/User');
const auth = require('../../middleware/auth');

router.get('/me', auth,
async (req,res)=>{
   try{
    const profile = await Profile.findOne({user: req.user.id}).populate('user',['name', 'avatar']);
    if(!profile){
        return res.status(400).json({msg:'There is no Profile for this user'})
    }
    res.json(profile)
}catch(err){
       console.error(err.message)
       res.status(500).send('Server Error')
   }
});

//post api/profile
//create or update user profile
router.post('/',
[auth,[
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
        fullname,
        state,
        phone,
        pincode,
        flataddress,
        areastreet,
        landmark,
        city
    } = req.body;

    try{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    return res.send("Profile Created")
    }
    catch(err){
        console.error(err.message);
        return res.status(500).send('Server Error')
    }
    
})

module.exports = router