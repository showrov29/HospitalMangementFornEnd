import React, { useState } from 'react'
import axios from 'axios'
import { useFormik } from 'formik'
import { useRouter } from 'next/router'
import Navigation from '@/pages/components/navigation'
import * as yup from 'yup'
import Sessioncheck from '@/pages/components/sessioncheck'
import NavBar from '@/pages/components/navBar'

export default function appointment() {
  const [isPrescription,setIsPrescription]=useState(false)
  const currentDate = new Date();
  const minDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()).toISOString().split('T')[0];
  const sevenDaysLater =  new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()+7).toISOString().split('T')[0];

  const router=useRouter();
    
    const {AppointmentId}=router.query;
   


  const formik=useFormik({
    initialValues:{
      name:'',
      DoctorId:0,
      patientId:0,
      age:'',
      date:'',
      prescriptionId:0,
      status:true,



    },

    validationSchema:yup.object({
      name:yup.string().min(4).max(20).required(),
      // DoctorId:yup.number().required(),
      // patientId:yup.number().required(),
      age:yup.number().required(),
      date:yup.date().required(),
      prescriptionId:yup.number(),
      // status:yup.boolean()

    }),

    onSubmit:(values,{resetForm})=>{

      console.log(AppointmentId);
      values.DoctorId=parseInt(AppointmentId);
      values.patientId=parseInt(localStorage.getItem('id'));
      // values.DoctorId=parseInt(AppointmentId);

     const response= axios.post('http://localhost:3000/appointment/add',values)
      .then(response=>{
        console.log(response);
      })
      .catch(err=>{
        console.log(err);
      })

      console.log(response);
      
      console.log(values);
      resetForm(values);
    }

  })

  return (
    <div class="">
      <Sessioncheck/>
      <Navigation/>
      <NavBar/>
      <form class="w-full max-w-lg px-16 py-4 sm:ml-64 " onSubmit={formik.handleSubmit}>

      <div class="flex flex-wrap  item-center mb-6 ">

      <div class="flex flex-wrap  -mx-3 mb-6"> 
      <div class="w-full px-3">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Patient name:</label>
        <input type='text' 
        name='name' 
        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        onChange={formik.handleChange} 
        value={formik.values.name} />
         {formik.touched.name && formik.errors.name && (<span className='text-sm text-red-600'> { formik.errors.name}</span> ) } 

        </div>
        

        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Patient Age:</label>
        <input type='number' 
        name='age' 
        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
        onChange={formik.handleChange} 
        value={formik.values.age} />
      {formik.touched.age && formik.errors.age && (<span className='text-sm text-red-600'> { formik.errors.age}</span> ) } 

        </div>


            <div class="w-full md:w-1/2 px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Apponitment Date:</label>
              <input type='date' 
              name='date' 
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
              min={minDate} 
              max={sevenDaysLater} 
              onChange={formik.handleChange}
              value={formik.values.date} />
          {formik.touched.date && formik.errors.date && (<span className='text-sm text-red-600'> { formik.errors.date}</span> ) } 

              </div>
              <br />

            <div class="w-full md:w-1/2 px-3">
              <label class="relative inline-flex items-center cursor-pointer">
              <input id="default-checkbox" type="checkbox" value="" onChange={()=>(setIsPrescription(!isPrescription))} class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
               <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">I have Previous Prescription</span>
          </label>
          <br/>
          <br/>
          </div>
    


      {isPrescription &&(  <div class="w-full px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Previous Prescription Id (if any) :</label>
        <input type='number' 
        class="appearance-none block w-1/2 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white" 
        name='prescriptionId' 
        onChange={formik.handleChange} 
        value={null} />
          {formik.touched.prescriptionId && formik.errors.prescriptionId && (<span className='text-sm text-red-600'> { formik.errors.prescriptionId}</span> ) } 

        <br/>
        </div>)}
      
        <div class="w-full ">
        <input className='w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ' type='submit' value='CONFIRM' />
        </div>
        </div>
  </div>
      </form>
     
    </div>
  )
}



