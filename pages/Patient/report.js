import React, { useState } from 'react'
import Navigation from '../components/navigation'
import axios from 'axios';
import { useFormik } from 'formik';
import * as yup from 'yup'
import { useRouter } from 'next/router';
import Report from '../components/reportcard';



export default function report({data}) {
console.log(data);
  const router=useRouter()




const formik=useFormik({
  initialValues:{
    id:''
  },
  validationSchema:yup.object({
    id:yup.number().required()
  }),

  onSubmit:(values, {resetForm})=>{
    resetForm(values)
    
      router.push({
        pathname: 'report',
        query: { id: formik.values.id }
      });
    }


    
  



})
  return (
    <div>
      <Navigation/>
      
<form onSubmit={formik.handleSubmit}>
<input type='number' name='id'  placeholder='enter report id' onChange={formik.handleChange} value={formik.values.id}/>

<input type='submit' value='Search' />
<br/>
{formik.errors.id && <span>{formik.errors.id}</span>}
</form>


<br/>
<br/>

{data.status == null? 
   <Report data={data}/>
        :null}
     


    </div>
  )
}



export async function getServerSideProps({ query }) {
  const inputValue = query.id;
  console.log(inputValue);
  try {
  const response = await axios.get('http://localhost:3000/report/show/'+inputValue);
  const data = await response.data;

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