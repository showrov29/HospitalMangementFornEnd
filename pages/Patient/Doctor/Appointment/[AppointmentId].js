import React from 'react'
import axios from 'axios'
import { useFormik } from 'formik'
import { useRouter } from 'next/router'
import Navigation from '@/pages/components/navigation'
import * as yup from 'yup'

export default function appointment() {
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
    <div class="p-4 sm:ml-64">
      <Navigation/>
      <form onSubmit={formik.handleSubmit}>
        <label>Patient name:</label>
        <input type='text' name='name' onChange={formik.handleChange} value={formik.values.name} />
        <br/>
        <label>Patient Age:</label>
        <input type='number' name='age' onChange={formik.handleChange} value={formik.values.age} />
        <br/>
        <label>Previous Prescription Id (if any) :</label>
        <input type='number' name='prescriptionId' onChange={formik.handleChange} value={''} />
        <br/>
        <label>Apponitment Date:</label>
        <input type='date' name='date' min={minDate} max={sevenDaysLater} onChange={formik.handleChange} value={formik.values.date} />
        <br/>
        <input type='submit' value='CONFIRM' />
      </form>
     
    </div>
  )
}



