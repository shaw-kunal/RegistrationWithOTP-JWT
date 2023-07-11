import React, { useState } from 'react'
import styled from 'styled-components';
import { Link } from "react-router-dom"
import avatar from './../assests/profile.png'
import styles from "./../styles/Username.module.css"
import {Toaster} from 'react-hot-toast'
import {useFormik} from 'formik'
import {  registerValidation, resetPasswordValidate } from '../helper/Validate';
import convertFileToBase64 from '../helper/convert';



const Register = () => {
  const [file, setFile] = useState()
   const formik = useFormik({
    initialValues:{
    email:'',
    username:'',
    password:''
    },
    validate :registerValidation,
    validateOnBlur:false,
    validateOnChange:false,
    onSubmit:async values=>{
      values = await Object.assign(values,{profile:file || ''})
      console.log(values)
    }
   })


  /* formik does not support  file upload so we need to create this handler*/
 const onUpload = async e=>
 {
  const base64 = await convertFileToBase64(e.target.files[0]);
  setFile(base64);
 }



  return (
    <div className="container mx-auto">
    <Toaster position='top-center'></Toaster>
      <div className="flex justify-center flex-col items-center h-screen ">
        <div className={styles.glass} style={{width:"35%" ,padding:"20px" ,height:"fit-content"}}>
          <div className="title flex flex-col items-center">
            <h4 className='text-5xl font-serif text-cyan-600'>Register Now!</h4>
            <span className="text-xl w-2/3 text-center">Happy To Join You! </span>
          </div>
          <form action=""  className='pt-3' onSubmit={formik.handleSubmit} >
          <div className="profile flex justify-center py-4">
             <label htmlFor="profile">
              <img src={file || avatar} className={styles.profile_img} alt="avatat" />
             </label>
             <input type='file' onChange={onUpload} id='profile' name='profile'/>
            </div>
            <div className="textbox flex flex-col items-center ">
              <input type="text" {...formik.getFieldProps('email')}  className={styles.textbox} placeholder='Email' />
              <input type="text" {...formik.getFieldProps('username')}  className={styles.textbox} placeholder='username' />
              <input type="text" {...formik.getFieldProps('password')}  className={styles.textbox} placeholder='Password' />
              <button type="submit" className={styles.btn}>Recover</button>
            </div>
            <div className="text-center py-4">
              <span>Already Register!<Link className='text-red-500' to='/recover'>Lgin Now</Link></span>
            </div>
          </form>
        </div>
      </div>
    </div>

  )
}

export default Register
