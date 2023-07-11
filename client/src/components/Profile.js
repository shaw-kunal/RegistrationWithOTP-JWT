import React, { useState } from 'react'
import styled from 'styled-components';
import { Link } from "react-router-dom"
import avatar from './../assests/profile.png'
import styles from "./../styles/Username.module.css"
import {Toaster} from 'react-hot-toast'
import {useFormik} from 'formik'
import {  profileValidation, registerValidation, resetPasswordValidate } from '../helper/Validate';
import convertFileToBase64 from '../helper/convert';





const Profile = () => {
  const [file, setFile] = useState()
   const formik = useFormik({
    initialValues:{
        firstname:"",
        lastname:"",
    email:'',
    mobile:'',
    address:''
    },
    validate :profileValidation,
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
        <div className={styles.glass} style={{width:"40%" ,padding:"20px" ,height:"fit-content"}}>
          <div className="title flex flex-col items-center">
            <h4 className='text-5xl font-serif text-cyan-600'>Profile!</h4>
            <span className="text-xl w-2/3 text-center">You can update the details.</span>
          </div>
          <form action=""  className='pt-3' onSubmit={formik.handleSubmit} >
          <div className="profile flex justify-center py-4">
             <label htmlFor="profile">
              <img src={file || avatar} className={styles.profile_img} alt="avatat" />
             </label>
             <input type='file' onChange={onUpload} id='profile' name='profile'/>
            </div>


            <div className="textbox flex flex-col items-center ">
            <div className="name flex gap-10">
              <input type="text" {...formik.getFieldProps('firstName')}  className={styles.textbox}  placeholder='Firstname' />
              <input type="text" {...formik.getFieldProps('lastName')}  className={styles.textbox} placeholder='lastname' />
            </div>
            <div className="name flex  gap-10">
              <input type="text" {...formik.getFieldProps('mobile')}  className={styles.textbox}  placeholder='Mobile' />
              <input type="text" {...formik.getFieldProps('email')}  className={styles.textbox} placeholder='Email' />
            </div>
            <div className="name flex gap-10  justify-center" style={{width:"135%"}}>
              <input type="text" {...formik.getFieldProps('address')}   className={styles.textbox}  placeholder='Address' />
            </div>
              <button type="submit" className={styles.btn}>Update</button>
            </div>
            <div className="text-center py-4">
              <span>Come Back Later!<Link className='text-red-500' to='/logout'>Logout</Link></span>
            </div>
          </form>
        </div>
      </div>
    </div>

  )
}

export default Profile
