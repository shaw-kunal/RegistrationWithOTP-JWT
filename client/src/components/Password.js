import React from 'react'
import styled from 'styled-components';
import { Link } from "react-router-dom"
import avatar from './../assests/profile.png'
import styles from "./../styles/Username.module.css"
import {Toaster} from 'react-hot-toast'
import {useFormik} from 'formik'
import { passwordValidate } from '../helper/Validate';





const Password = () => {

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
            <h4 className='text-5xl font-serif text-cyan-600'>Hello!</h4>
            <span className="text-xl w-2/3 text-center">Explore the New Thing Now.</span>
          </div>


          <form action=""  onSubmit={formik.handleSubmit} className="py-1">
            <div className="profile flex justify-center py-4">
              <img src={avatar} className={styles.profile_img} alt="avatat" />
            </div>
            <div className="textbox flex flex-col items-center ">
              <input type="text" {...formik.getFieldProps('password')}  className={styles.textbox} placeholder='Password' />
              <button type="submit" className={styles.btn}>Sign in</button>
            </div>
            <div className="text-center py-4">
              <span>Forgot password<Link className='text-red-500' to='/recover'>Recover Now</Link></span>
            </div>
          </form>
        </div>
      </div>
    </div>

  )
}

export default Password
