const Joi = require('joi');

const userValidation = (req, res, next) => {
    const { name, email, password, password2 } = req.body;
    const userInfo = {
        name,
        email, 
        password, 
        password2
    }

    const schema = Joi.object({
        name: Joi.string()
            .min(3)
            .max(30)
            .required(),

        password: Joi.string()
            .min(8)
            .max(15),

        password2: Joi.ref('password'),

        email: Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    })

   const {error} =  schema.validate(userInfo);
   if(error){
    return res.status(501).json({error: error.details[0].message});
   };
   next()
}

module.exports = { userValidation }