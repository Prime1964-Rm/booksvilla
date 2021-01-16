const express = require('express')
const router = express.Router();
const Book = require('../../models/Book')
const mongoose = require('mongoose')
const {check,validationResult} = require('express-validator')

router.get('/books', 

async (req,res)=>{

    try{
        const bookList = await Book.find()
        if(bookList){
            return res.json(bookList)
        }else{
            return res.status(404).json({msg:'No books found'})
        }
    }catch(err){
        console.error(err)
        return res.status(500).json({msg:'Server Error'})
    }
    
    
});


router.post('/',
[
 check('title','title is required').notEmpty(),
 check('src','src is required').notEmpty(),
 check('author','author is required').notEmpty(),
 check('price','price is required').notEmpty(),
 check('stock','stock is required').notEmpty(),
],
async (req,res)=>{
    const{
        title,
        src,
        author,
        price,
        category,
        rating,
        stock
    }= req.body

    let bookFields={}

    if(title) bookFields.title= title
    if(src) bookFields.src = src
    if(author) bookFields.author = author
    if(price) bookFields.price = price
    if(category) bookFields.category = category
    if(rating) bookFields.rating = category
    if(stock) bookFields.stock = stock

    try{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()})
        }

        let book = await Book.findOne({title:title})

        if(book){
            return res.status(501).json({msg:'Book Already Exists'})
    
        }else{
            book = new Book(bookFields)
            await book.save()
            return res.json(book)
        }


    }catch(err){
        console.error(err.message)
        return res.status(500).json({msg:'Server Error'})
    }
})

module.exports=router;