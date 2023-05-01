import React from 'react'
import axios from 'axios'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useState } from 'react'
import { useEffect } from 'react'
import Profilepicup from '../components/profilepicup'

export default function Editprofile({data}) {
  const [alertMessage, setAlertMessage]=useState('')
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
            setAlertMessage('User update failed')
          });
        
      
          resetForm(values)
        }
      })
      
    
  return (
    <div > 
      


<div class="flex items-center h-screen w-full justify-center">

<div class="max-w-xs">
    <div class="bg-white shadow-xl rounded-lg py-3">
        <div class="photo-wrapper p-2">
            <img class="w-32 h-32 rounded-full mx-auto" src={`http://localhost:3000/patient/getimage/${data.profilePic}`}/>
</div>
        
<label>Edit Profile</label>
      <Profilepicup/>
      
      <form onSubmit={formik.handleSubmit}>
        {alertMessage && (<><span>{alertMessage}</span> <br/></>)}
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
      <input type="date" name="dob" min='1980-01-01' max={maxDate}  onChange={formik.handleChange} />
      <br/>
      {formik.touched.dob && formik.errors.dob && (<span>{formik.errors.dob}</span>)}
      <br/>

      <label>Phone Number: </label>
      <input type="text" name="phone" placeholder="Enter your phone number" onChange={formik.handleChange} value={formik.values.phone} />
      <br/>
      {formik.touched.phone && formik.errors.phone && (<span>{formik.errors.phone}</span>)}
      <br/>


      <input type='submit' value="Confirm" />



      

      </form>


       
    </div>
</div>

</div>
      
      
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
  
  
     
    
    
