import React, { useState } from 'react'
import axios from 'axios'
import { useFormik } from 'formik'
import * as yup from 'yup'
export default function Registration() {
  const [alertMessage, setAlertMessage]=useState('')

const formik = useFormik({
  initialValues:{
    firstName:'',
    lastName:'',
    dob:'',
    phone:'',
    email:'',
    password:''


  },
  validationSchema:yup.object({

    firstName:yup.string().min(2).max(20).required(),
    lastName:yup.string().min(3).max(20).required(),
    dob:yup.date().required(),
    phone:yup.string().min(11).max(11).required(),
    email:yup.string().email().required(),
    password:yup.string().required(),
  }),
  onSubmit:(values, {resetForm})=>{

    console.log(values);


    axios.post('http://localhost:3000/patient/register',values)
    .then((response) => {
      console.log(response);
      setAlertMessage('User registration successful')
    })
    .catch((error) => {
      console.error(error);
      setAlertMessage('User registration failed')
    });
  

    resetForm(values)
  }
})

  return (
    <div>

      {alert(alertMessage)}
      <form onSubmit={formik.handleSubmit}>
      <label>First Name: </label>
      <input type="text" name="firstName" placeholder="Enter your first name" onChange={formik.handleChange} value={formik.values.firstName} />
      <br/>
      {formik.touched.firstName && formik.errors.firstName && (<span>{formik.errors.firstName}</span>)}
      <br/>

      
      <label>Last Name: </label>
      <input type="text" name="lastName" placeholder="Enter your last name" onChange={formik.handleChange} value={formik.values.lastName} />
      <br/>
      {formik.touched.lastName && formik.errors.lastName && (<span>{formik.errors.lastName}</span>)}
      <br/>

      <label>Date of Birth</label>
      <input type="date" name="dob"  onChange={formik.handleChange} value={formik.values.dob} />
      <br/>
      {formik.touched.dob && formik.errors.dob && (<span>{formik.errors.dob}</span>)}
      <br/>

      <label>Phone Number: </label>
      <input type="text" name="phone" placeholder="Enter your phone number" onChange={formik.handleChange} value={formik.values.phone} />
      <br/>
      {formik.touched.phone && formik.errors.phone && (<span>{formik.errors.phone}</span>)}
      <br/>

      <label>Email: </label>
      <input type="email" name="email" placeholder="Enter your email" onChange={formik.handleChange} value={formik.values.email} />
      <br/>
      {formik.touched.email && formik.errors.email && (<span>{formik.errors.email}</span>)}
      <br/>

      <label>Password: </label>
      <input type="password" name="password"  onChange={formik.handleChange} value={formik.values.password} />
      <br/>
      {formik.touched.password && formik.errors.password && (<span>{formik.errors.password}</span>)}
      <br/>

      <input type='submit' value="SIGN IN" />



      

      </form>
      
      
    </div>
  )
}
