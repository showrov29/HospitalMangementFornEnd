import React, { useState } from 'react'
import axios from 'axios'
import { useFormik } from 'formik'
import * as yup from 'yup'
import Navigation from './navigation';
import Sessioncheck from './sessioncheck';
import Footer from './footer';
export default function Registration() {

 
  const currentDate = new Date(); // Get the current date
  const maxDate = new Date(currentDate.getFullYear() - 15, currentDate.getMonth(), currentDate.getDate()).toISOString().split('T')[0]; // Calculate the maximum date
  


  const [success,setSuccess]=useState('')
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

    firstName:yup.string().min(2).max(20).required('First Name is required'),
    lastName:yup.string().min(3).max(20).required('Last Name is required'),
    dob:yup.date().required('Date of Birth is required'),
    phone:yup.string().min(11).max(11).required('Phone is required'),
    email:yup.string().email().required('Email is required'),
    password:yup.string().required('Password is required'),
  }),
  onSubmit:(values, {resetForm})=>{

    console.log(values);


    axios.post('http://localhost:3000/patient/register',values)
    .then((response) => {
      console.log(response);
      setSuccess('User registration successful')
    })
    .catch((error) => {
      console.error(error);
      setAlertMessage('User registration failed')
    });
  

    resetForm(values)
  }
})

  return (
  <>

    
<section class="bg-gray-50 dark:bg-gray-900 ">

<div class="flex flex-col items-center justify-center px-6 py-8 ">
    <a href="/" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
        <img class="w-8 h-8 mr-2" src='../MedicalLogo.png' alt="logo"/>
        HealthEase    
    </a>

    
    <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
        {alertMessage &&(
  <div class=" flex-end w-96  bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
  <strong class="font-bold">{alertMessage}!</strong>
<span class="block sm:inline">  This email is already registared</span>
<span class="absolute top-0 bottom-0 right-0 px-4 py-3">
  <svg onClick={()=>{setAlertMessage(null)}} class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
</span>
</div>
   ) 
  }

  {success &&(
  <div class=" flex-end w-96  bg-green-100 border border-green-400 text-white-700 px-4 py-3 rounded relative" role="alert">
  
<span class="block sm:inline">{success}</span>
<span class="absolute top-0 bottom-0 right-0 px-4 py-3">
  <svg onClick={()=>{setSuccess(null)}} class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
</span>
</div>
   ) 
  }
            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create a new account
            </h1>

            
            <form class="space-y-4 md:space-y-6" onSubmit={formik.handleSubmit}>

  <div>

  
      <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white' htmlFor='firstName' >First Name: </label>
      <input type="text" 
      id='firstName'
      name="firstName" 
      placeholder="Enter your first name" 
      className='bg-gray-50 border border-gray-300 rounded-lg text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
      onChange={formik.handleChange}
       value={formik.values.firstName} />
      {formik.touched.firstName && formik.errors.firstName && (<span className='text-sm text-red-600'>{formik.errors.firstName}</span>)}
  </div>
      

   <div>
      <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Last Name: </label>
      <input type="text" name="lastName" 
      placeholder="Enter your last name" 
      className='bg-gray-50 border border-gray-300 rounded-lg text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'

      onChange={formik.handleChange} 
      value={formik.values.lastName} />
      {formik.touched.lastName && formik.errors.lastName && (<span className='text-sm text-red-600'>{formik.errors.lastName}</span>)}
    </div>   
  

    <div>

      <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Date of Birth</label>
      <input type="date" 
      name="dob" min='1980-01-01' 
      className='bg-gray-50 border border-gray-300 rounded-lg text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'

      max={maxDate}  
      onChange={formik.handleChange} 
      value={formik.values.dob} />
      {formik.touched.dob && formik.errors.dob && (<span className='text-sm text-red-600'>{formik.errors.dob}</span>)}
    </div>

  <div>

      <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Phone Number: </label>
      <input type="text" 
      name="phone" 
      placeholder="Enter your phone number" 
      className='bg-gray-50 border border-gray-300 rounded-lg text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'

      onChange={formik.handleChange} 
      value={formik.values.phone} />
      {formik.touched.phone && formik.errors.phone && (<span className='text-sm text-red-600'>{formik.errors.phone}</span>)}
  </div>

  <div>
  
      <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Email: </label>
      <input type="email"
        name="email"
        placeholder="Enter your email" 
        className='bg-gray-50 border border-gray-300 rounded-lg text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'

        onChange={formik.handleChange} 
        value={formik.values.email} />
      {formik.touched.email && formik.errors.email && (<span className='text-sm text-red-600'>{formik.errors.email}</span>)}
  </div>
  <div>

      <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Password: </label>
      <input type="password"
       name="password"
       className='bg-gray-50 border border-gray-300 rounded-lg text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'

      onChange={formik.handleChange} 
      value={formik.values.password} />
      {formik.touched.password && formik.errors.password && (<span className='text-sm text-red-600'>{formik.errors.password}</span>)}
  </div>
  <div>
      <input type='submit' class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded " value="SIGN IN" />
      <p class="text-sm font-light p-2.5 text-gray-500 dark:text-gray-400">
       Already have an account? <a href="/login" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login</a>
      </p>
  </div>


            </form>
        </div>
    </div>
</div>
</section>
<Footer/>
</>










      
  
  )
}
