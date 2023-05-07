import React, { useState } from 'react'
import Navigation from '../components/navigation'
import axios from 'axios';
import { useFormik } from 'formik';
import * as yup from 'yup'
import { useRouter } from 'next/router';
import Report from '../components/reportcard';
import Navbar2 from '../components/navbar2';
import Footer from '../components/footer';



export default function report() {
  const [data,setData]=useState(null)

  





const formik=useFormik({
  initialValues:{
    id:''
  },
  validationSchema:yup.object({
    id:yup.number().required()
  }),

  onSubmit:(values, {resetForm})=>{
    resetForm(values)

    axios.get(`http://localhost:3000/report/show/${values.id}`)
    .then(response =>{
      setData(response.data)
    })
    .catch(error =>{
      console.log(error);
      setData(null)
    })
      // router.push({
      //   pathname: 'report',
      //   query: { id: formik.values.id }
      // });
    }


    
  



})

console.log(data);
  return (
    <div >
      {/* <Navigation/> */}
      <Navbar2/>
      
<div class="px-64 ">
<form className='flex items-center' onSubmit={formik.handleSubmit}>
  
<input type='number' name='id'  placeholder='Enter report id' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={formik.handleChange} value={formik.values.id}/>

    <button type="submit" class="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        <span class="sr-only">Search</span>
    </button>
<br/>

</form>
    {formik.errors.id && <span className='text-sm text-red-600'>{formik.errors.id}</span>}

</div>
<br/>
<br/>

<div className='mt-4 px-4 ml-4'>


     {data &&
        (<Report data={data}/>)
             }
          
          </div> 
{/* <Footer/>    */}
    </div>
  )
}



// export async function getServerSideProps({ query }) {
//   const inputValue = query.id;
//   console.log(inputValue);
//   try {
//   const response = await axios.get('http://localhost:3000/report/show/'+inputValue);
//   const data = await response.data;

//   return {
//     props: {
//       data
//     }
//   };
  
//   } catch (error) {

//   return {
//     props: {
//       data: {status:null,message:'Request failed'}
//     }
//   };
// }
// }