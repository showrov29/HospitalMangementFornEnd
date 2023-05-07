import React from 'react'
import axios from 'axios'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useState } from 'react'
import { useEffect } from 'react'
import Profilepicup from '../components/profilepicup'
import Sessioncheck from '../components/sessioncheck'
import Navigation from '../components/navigation'

export default function Editprofile({data}) {
  const [alertMessage, setAlertMessage]=useState('')
  const [alertMessageFailed, setAlertMessageFailed]=useState('')
    // const dateInput = document.getElementById("date"); // Get the input element
    const currentDate = new Date(); // Get the current date
    const maxDate = new Date(currentDate.getFullYear() - 15, currentDate.getMonth(), currentDate.getDate()).toISOString().split('T')[0]; // Calculate the maximum date
    // const userId=localStorage.getItem('id')

    const [id,setId]=useState(0)

   useEffect(() => {
      const x=localStorage.getItem('id')
      setId(x)
   }, []);


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
      
          firstName:yup.string().min(2).max(20),
          lastName:yup.string().min(3).max(20),
          dob:yup.date(),
          phone:yup.string().min(11).max(11),
        //   email:yup.string().email().required(),
        //   password:yup.string().required(),
        }),
        onSubmit:(values, {resetForm})=>{
      
    
          values.email=data.email;
          values.password=data.password;
console.log(values);
          if (values.firstName==='') {
            values.firstName=data.firstName;
          }
           if(values.lastName==='') {
            values.lastName=data.lastName;
          }
           if(values.dob==='') {
            values.dob=data.dob;
          }
           if(values.phone==='') {
            values.phone=data.phone;
          }
          console.log(data);
          console.log(values);
      
          axios.put(`http://localhost:3000/patient/edit/${id}`,values)
          .then((response) => {
            console.log(response);
            setAlertMessage('User updated successfully')
          })
          .catch((error) => {
            console.error(error);
            setAlertMessageFailed('User update failed')
          });
        
      
          resetForm(values)
        }
      })
      
    
  return (
    <div > 
      
<Sessioncheck/>
<Navigation/>







<section class="bg-gray-50 dark:bg-gray-900">

<div class="flex flex-col items-center justify-center px-6 py-8 ">
    {/* <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
        <img class="w-8 h-8 mr-2" src={`http://localhost:3000/patient/getimage/${data.profilePic}`} alt={data.name} />
           
    </a> */}
    <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
   
            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Edit Your Profile
            </h1>

            <div class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
            <div class="flex">
              <div class="py-1"><svg class="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
              <div>
                <p class="font-bold">Important </p>
                <p class="text-sm">Leave the field empty if you Don’t wont to change your information</p>
              </div>
            </div>
          </div>


          {alertMessage &&(
          <div class=" flex-end w-96  bg-green-100 border border-green-400 text-white-700 px-4 py-3 rounded relative" role="alert">
          
        <span class="block sm:inline">{alertMessage}</span>
        <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
          <svg onClick={()=>{setAlertMessage(null)}} class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
        </span>
        </div>
          ) 
          }
          {alertMessageFailed &&(
          <div class=" flex-end w-96  bg-red-100 border border-red-400 text-white-700 px-4 py-3 rounded relative" role="alert">
          
        <span class="block sm:inline">{alertMessageFailed}</span>
        <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
          <svg onClick={()=>{setAlertMessageFailed(null)}} class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
        </span>
        </div>
          ) 
          }

            <form class="space-y-4 md:space-y-6" onSubmit={formik.handleSubmit}>

        <div>

      <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name: </label>
      <input type="text"
       name="firstName" 
       placeholder="Enter your first name" 
       class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 

       onChange={formik.handleChange} 
       value={formik.values.firstName} />
      {formik.touched.firstName && formik.errors.firstName && (<span>{formik.errors.firstName}</span>)}
       </div>

      <div>
      <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name: </label>
      <input type="text" 
      name="lastName" 
      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 

      placeholder="Enter your last name" 
      onChange={formik.handleChange} 
      value={formik.values.lastName} />
      {formik.touched.lastName && formik.errors.lastName && (<span>{formik.errors.lastName}</span>)}
      </div>

      <div>
      <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date of Birth</label>
      <input type="date" 
      name="dob" 
      
      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
      min='1980-01-01' 
      max={maxDate}  
      onChange={formik.handleChange} />
      {formik.touched.dob && formik.errors.dob && (<span>{formik.errors.dob}</span>)}
      </div>

      <div>
      <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number: </label>
      <input type="text" 
      name="phone" 
      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 

      placeholder="Enter your phone number" 
      onChange={formik.handleChange} 
      value={formik.values.phone} />
      {formik.touched.phone && formik.errors.phone && (<span>{formik.errors.phone}</span>)}
      </div>



    <div>
      <input class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded " type='submit' value="Confirm" />
      </div>


            </form>
        </div>
    </div>
</div>
</section>


       
    </div>

  )
}




export async function getServerSideProps() {
 
    try {
    const response = await axios.get('http://localhost:3000/patient/profile');
    const data = await response.data;
    console.log(data);
  
    return {
      props: {
        data
      }
    };
    
    } catch (error) {
  
    return {
      props: {
        data: {status:"enter valid user id"}
      }
    };
  }
  }
  
  
     
    
    
