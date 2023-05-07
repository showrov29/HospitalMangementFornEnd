import React, { useEffect, useState } from 'react'
import { Formik, useFormik } from 'formik'
import * as yup from 'yup'
import axios from 'axios';
import Sessioncheck from './sessioncheck';
import Navigation from './navigation';
import NavBar from './navBar';


export default function changepass() {
    const [pass,setPass]=useState('')
    const [id,setId]=useState('')
    const [alert,setAlert]=useState('')
    useEffect(() => {
        setPass(localStorage.getItem('password'))
        setId(localStorage.getItem('id'))

      
    }, []);

    
const formik=useFormik({
    initialValues:{
        currentPassword: '',
        newPassword:'',
        confirmPassword: ''
    },
    validationSchema:yup.object({
        currentPassword:yup.string().required().matches(pass ,'Current Password is wrong'),
        newPassword:yup.string().required(),
        confirmPassword:yup.string().required().oneOf([yup.ref('newPassword'),null],"Does not match with new password")
    }),
    onSubmit:function(values,{resetForm}){

      const  data = {
        password:values.newPassword
      }

        axios.put(`http://localhost:3000/patient/changepass/${id}`,data)
        .then(response => {
            console.log(response);
            setAlert("Password changed")
            localStorage.removeItem("password");
            localStorage.setItem("password",data.newPassword)

        })
        .catch(errors=>console.log(errors))
        resetForm(values)
    }
})

  return (
    <div>
        <Sessioncheck/>
        <Navigation/>
        <NavBar/>

<section class="bg-gray-50 dark:bg-gray-900">

<div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
   
    <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">


        {alert &&(
    <div class=" flex-end w-96  bg-yello-100 border border-red-400 text-black px-4 py-3 rounded relative" role="alert">

  <span class="block sm:inline"> {alert}</span>
  <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
    <svg onClick={()=>{setAlert(null)}} class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
  </span>
</div>
     ) 
    }
   
            <form class="space-y-4 md:space-y-6" onSubmit={formik.handleSubmit}>
                <div>
                    <label for="currentPass" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Current Password</label>
                    <input type="password"
                      name="currentPassword"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                      id="currentPass"
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       placeholder="" />
                      {formik.touched.currentPassword && formik.errors.currentPassword && (<span className='text-sm text-red-600'> { formik.errors.currentPassword}</span> ) } 
                </div>
                <div>
                    <label for="newPassword" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New Password</label>
                    <input type="password"
                     name="newPassword"
                      id="newPassword"
                       placeholder="••••••••"
                       value={formik.values.newPassword}
                       onChange={formik.handleChange}
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            {formik.touched.newPassword && formik.errors.newPassword && (<span className='text-sm text-red-600'> { formik.errors.newPassword}</span> ) } 
                </div>

                <div>
                    <label for="confirmPassword" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
                    <input type="password"
                     name="confirmPassword"
                      id="confirmPassword"
                       placeholder="••••••••"
                       value={formik.values.confirmPassword}
                       onChange={formik.handleChange}
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            {formik.touched.confirmPassword && formik.errors.confirmPassword && (<span className='text-sm text-red-600'> { formik.errors.confirmPassword}</span> ) } 
                </div>
           
                <button type="submit" class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">Confirm</button>
               
            </form>
        </div>
    </div>
</div>
</section>

      
    </div>
  )
}
