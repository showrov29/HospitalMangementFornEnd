import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import { useRouter } from 'next/router'

export default function Login() {
  const [alertMessage,setAlertMessage] =useState('')
  const router=useRouter();

 

  const formik = useFormik({
    initialValues:{
      email:'',
      password:'',
    },

    validationSchema:yup.object({
      email:yup.string().email().required(),
      password:yup.string().min(6).max(10).required(),
    }),


    onSubmit:(values, {resetForm,setSubmitting})=>{
      console.log( values);

      console.log(values.email);
      axios.post('http://localhost:3000/patient/login/user', values)
      .then((response) => {
        console.log(response.data);
        router.push('/')
        
      })
      .catch((error) => {
        console.log(error.response.data.error);
        // console.error(error.status);
        setAlertMessage('login failed')

      });
      


      resetForm(values);
    }
    
  })

  return (
   <>
   <form onSubmit={formik.handleSubmit}>
    { alertMessage && alert(alertMessage)}
    <label>Email:</label>
    <input type="email" name="email" onChange={formik.handleChange} value={formik.values.email} />
    <br/>
    {formik.touched.email && formik.errors.email && (<span> { formik.errors.email}</span> ) } 
    
    <br/>
    <label>Password:</label>
    <input type="password" name="password" onChange={formik.handleChange} value={formik.values.password} />
    <br/>
    {formik.touched.password && formik.errors.password && (<span> { formik.errors.password}</span> ) } 
    
    <br/>
    <input type="submit" value="LOGIN"/>
   </form>



   </>
  )
}
