const { response }= require('express');
const { validationResult } = require('express-validator')

const validator = (req, res = response, next)=>{
//Error Handler
    const errors = validationResult( req );
        if (!errors.isEmpty()){
            return res.status(400).json({
                ok: false,
                errors: errors.mapped()
            })
        }
        
    next();
}

module.exports ={
    validator,
}