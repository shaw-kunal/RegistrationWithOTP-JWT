import React from 'react'
import styled from 'styled-components';
import { Link } from "react-router-dom"
import avatar from './../assests/profile.png'
import styles from "./../styles/Username.module.css"
import {Toaster} from 'react-hot-toast'
import {useFormik} from 'formik'
import {  resetPasswordValidate } from '../helper/Validate';



const Reset = () => {
   const formik = useFormik({
    initialValues:{
      password:'admin@123',
      confirmpassword:''
    },
    validate :resetPasswordValidate,
    validateOnBlur:false,
    validateOnChange:false,
    onSubmit:async values=>{
      console.log(values)
    }
   })


  return (
    <div className="container mx-auto ">
    <Toaster position='top-center'></Toaster>
      <div className="flex justify-center flex-col items-center h-screen">
        <div className={styles.glass} style={{width:"0%"}}>
          <div className="title flex flex-col items-center">
            <h4 className='text-5xl font-serif text-cyan-600'>Reset Now!</h4>
            <span className="text-xl w-2/3 text-center">Enter New password</span>
          </div>


          <form action=""  className='pt-20' onSubmit={formik.handleSubmit} >
            <div className="textbox flex flex-col items-center ">
              <input type="text" {...formik.getFieldProps('password')}  className={styles.textbox} placeholder='New Password' />
              <input type="text" {...formik.getFieldProps('confirmpassword')}  className={styles.textbox} placeholder='Confirm Password' />
              <button type="submit" className={styles.btn}>Recover</button>
            </div>
          </form>
        </div>
      </div>
    </div>

  )
}

export default Reset
