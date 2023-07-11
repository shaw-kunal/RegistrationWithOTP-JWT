import toast from 'react-hot-toast'

// validate login page username
export const usernameValidate=async (values)=>{
    const errors  = usernameVerify({},values);
    return errors;

}
// validate the password
export const passwordValidate = async (values)=>{
    const errors = passwordVaerify({},values);
    return errors;
}

export const resetPasswordValidate=(values)=>{
    const errors = passwordVaerify({},values);
    if(values.password  !== values.confirmpassword)
    {
        errors.exist = toast.error("Password not match ...!");
    }
    return errors;
}

//  validate register form

export async function registerValidation(values){
    const errors = usernameVerify({},values);
    passwordVaerify(errors,values);
    emailVerify(errors,values);

    return errors;
}


// profile validate 
export async function profileValidation(values){
    const errors = emailVerify({},values)
    return errors;
}



/* *************************************** */
// validate user name
const usernameVerify=(error={},values)=>{
    if(!values.username)
    {
        error.username=toast.error("Username Required...!")
    }
    else if(values.username.includes(" "))
    {
        error.username= toast.error("Invalid UserName...!")
    }
    return error
}

// validate password 
const passwordVaerify =(error={},values)=>{
    var regex = /[!@#$%^&*()\-_=+{}[\]|\\:;"'<>,.?]/;

    if(!values.password)
    {
        error.password= toast.error("Password Required");
    }
    else if(values.password.includes(" ")){
        error.password= toast.error("Wrong Password");
    }
    else if(values.password.length<4){
        error.password= toast.error("Password must be more than 4 character");
    }
    else if(!regex.test(values.password))
    {
        error.password= toast.error("Password must hava special character");
    }
    return error

}


const emailVerify=(error={},values)=>{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!values.email){
        error.mail = toast.error("Email Required");
    }
    else if(values.email.includes(" "))
    {
        error.mail = toast.error("Wrong Email...");
    }
    else if (!emailRegex.test(values.email))
    {
        error.mail = toast.error("Enter a valid Email address...");
    }
    return error
}


