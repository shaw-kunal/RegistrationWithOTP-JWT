import React from 'react'
import styled from 'styled-components';
import { Link } from "react-router-dom"
import avatar from './../assests/profile.png'
import styles from "./../styles/Username.module.css"
import {Toaster} from 'react-hot-toast'
import {useFormik} from 'formik'
import { passwordValidate } from '../helper/Validate';





const Recovery = () => {

   const formik = useFormik({
    initialValues:{
      password:'admin@123'
    },
    validate :passwordValidate,
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
        <div className={styles.glass}>
          <div className="title flex flex-col items-center">
            <h4 className='text-5xl font-serif text-cyan-600'>Recover !</h4>
            <span className="text-xl w-2/3 text-center">Enter OTP for recover password</span>
          </div>


          <form action=""  className='pt-20' onSubmit={formik.handleSubmit} >
          <p className="py-3 text-sm text-center  text-green-500">Enter 6 digit OTP sent to Your email</p>

            <div className="textbox flex flex-col items-center ">
              <input type="text" {...formik.getFieldProps('password')}  className={styles.textbox} placeholder='OTP' />
              <button type="submit" className={styles.btn}>Recover</button>
            </div>
            <div className="text-center py-4">
              <span>Can't Get OTP<button className='text-red-500 pl-4'>Resend</button></span>
            </div>
          </form>
        </div>
      </div>
    </div>

  )
}

export default Recovery
