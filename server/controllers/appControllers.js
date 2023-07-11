import User from "../model/User.js";
import bcrypt from 'bcrypt'

// register user
export const  register = async(req,res)=>{

   try {
    const {username, password, profile, email} = req.body
    // first check the existing  user 
     const existingUsername = new Promise((resolve, reject)=>{
        User.findOne({username},(err,user)=>{
            if(err) reject (new Error(err))
            if(user) reject({error:"please use Unique username"})
            resolve();
        })
     });


    //  check for  existing email 
    const existEmail = new Promise((resolve, reject)=>{
        User.findOne({email},(err, email)=>{
            if(err) reject(new Error(err))
            if(email) reject({error:"Please use unique Email"})

            resolve();
        })
    })

    Promise.all([existingUsername,existEmail])
    .then(()=>{
        if(password)
        {
            bcrypt.hash(password,10)
            .then(hashedPassword=>
                {
                    const user = new User({
                        username:username,
                        password:hashedPassword,
                        profile:profile || '',
                        email
                    })
            
                    // return save reseult as a response
                    user.save((err,saveobj)=>{
                            if(err)
                            {
                             return res.status(500).json(err)
                            }
                            else 
                            {
                                return res.status(201).json("user save successfully")
                            };

                    })
        
                })
            .catch(errro=>{
                return res.status(200).send({
                    error:"enable to hased password"
                })
            })

            
        }
    })
    .catch((err)=>{
        return res.status(500).send(err)
    })


   } catch (error) {
    
   }
    

    res.status(200).json('register route')
}
//  login
export const  login =async(req,res)=>{
    res.status(200).json('login route')
}

// get user
export const  getUSer =async(req,res)=>{
    res.status(200).json('register route')
}

// update user
export const  updateuser = async(req,res)=>{
    res.status(200).json('update route')
}

// generate OTP
export const  generateOTP =async(req,res)=>{
    res.status(200).json('generate OTP route')
}

//verigy OTP

export const verifyOTP =async(req,res)=>{
    res.status(200).json("verifyOTP");
}

// reset password
export const resetPassword =async(req,res)=>{
    res.status(200).json("reset password");
}


//createResetSession
export const createResetSession =async(req,res)=>{
    res.status(200).json("reset password");
}






