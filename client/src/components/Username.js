import React from 'react'
import styled from 'styled-components';
import { Link } from "react-router-dom"
import avatar from './../assests/profile.png'
import styles from "./../styles/Username.module.css"
import {Toaster} from 'react-hot-toast'
import {useFormik} from 'formik'
import { usernameValidate } from '../helper/Validate';





const Username = () => {

   const formik = useFormik({
    initialValues:{
      username:''
    },
    validate :usernameValidate,
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
              <input type="text" {...formik.getFieldProps('username')}  className={styles.textbox} placeholder='Username' />
              <button type="submit" className={styles.btn}>Let's Go</button>
            </div>
            <div className="text-center py-4">
              <span>Not a Member<Link className='text-red-500' to='/register'>Register Now</Link></span>
            </div>
          </form>
        </div>
      </div>
    </div>

  )
}

export default Username
