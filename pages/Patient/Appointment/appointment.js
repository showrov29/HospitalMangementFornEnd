import React from 'react'
import axios from 'axios'
import { useFormik } from 'formik'
import { useRouter } from 'next/router'
import * as yup from 'yup'

export default function appointment() {

  const router = useRouter();


  const formik=useFormik({
    initialValues:{
      name:'',
      DoctorId:router.query,
      patientId:sessionStorage.getItem('patientId'),
      age:0,
      date:'',
      prescriptionId:null,
      status:true,



    },

    validationSchema:yup.object({
      name:yup.string().min(4).max(20).required(),
      DoctorId:yup.number().required(),
      packageId:yup.number().required(),
      age:yup.number().required(),
      date:yup.string().date().required(),
      prescriptionId:yup.number().required(),
      status:yup.boolean()

    }),

    onSubmit:(values,{resetForm})=>{


      console.log(values);
      resetForm(values);
    }

  })

  return (
    <div>
      <form>
        <label>Patient name:</label>
        <input type='text' name='name' onChange={formik.handleChange} value={formik.values.name} />
        <br/>
        <label>Patient Age:</label>
        <input type='number' name='age' onChange={formik.handleChange} value={formik.values.name} />
        <br/>
        <label>Apponitment Date:</label>
        <input type='date' name='date' onChange={formik.handleChange} value={formik.values.name} />
        <br/>
        <input type='submit' value='CONFIRM' />
      </form>
     
    </div>
  )
}



