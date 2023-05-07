import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import { useRouter } from 'next/router'
import Footer from './components/footer'
import Sessioncheck from './components/sessioncheck'

export default function Login() {
  const [alertMessage,setAlertMessage] =useState(null)
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


    onSubmit:(values, {resetForm})=>{
      console.log( values);

      console.log(values.email);
      axios.post('http://localhost:3000/patient/login/user', values)
      .then((response) => {
        console.log(response.data);

        
        sessionStorage.setItem('email',response.data)
        sessionStorage.setItem('id',response.data.id)

       
        localStorage.setItem('id',response.data.id)
        localStorage.setItem('profilePic',response.data.profilePic)
        localStorage.setItem('email',response.data.email)
        localStorage.setItem('password',values.password)
        console.log(localStorage.getItem('id'));

        // 
        router.push('/Patient/Doctor/doctors')
        
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
 
    <Sessioncheck/>


<section class="bg-gray-50 dark:bg-gray-900">

  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="/" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img class="w-8 h-8 mr-2" src='MedicalLogo.png' alt="logo"/>
          HealthEase    
      </a>
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          {alertMessage &&(
    <div class=" flex-end w-96  bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
  <strong class="font-bold">Login failed!</strong>
  <span class="block sm:inline"> Incorrect email or password</span>
  <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
    <svg onClick={()=>{setAlertMessage(null)}} class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
  </span>
</div>
     ) 
    }
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
              </h1>
              <form class="space-y-4 md:space-y-6" onSubmit={formik.handleSubmit}>
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email"
                        name="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        id="email"
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                         placeholder="name@company.com" />
                        {formik.touched.email && formik.errors.email && (<span className='text-sm text-red-600'> { formik.errors.email}</span> ) } 
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password"
                       name="password"
                        id="password"
                         placeholder="••••••••"
                         value={formik.values.password}
                         onChange={formik.handleChange}
                          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                              {formik.touched.password && formik.errors.password && (<span className='text-sm text-red-600'> { formik.errors.password}</span> ) } 
                  </div>
                  <div class="flex items-center justify-between">
                      <div class="flex items-start">
                          <div class="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                          </div>
                          <div class="ml-3 text-sm">
                            <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                          </div>
                      </div>
                      <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                  </div>
                  <button type="submit" class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">Sign in</button>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet? <a href="../components/registration" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>




<Footer/>



   </>
  )
}
