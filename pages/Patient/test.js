import React from 'react'
import axios from 'axios';
import { useEffect,useState } from 'react';
import { useRouter } from 'next/router';
export default function ambulances({data}) {
  const router = useRouter();

  const handleSubmit= async()=>{

  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
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


 


  return (
    <div>
      <button onClick={handleSubmit} >CLick</button>
    </div>
  )
}



// export async function getServerSideProps() {
 
//   try {
//   const response = await axios.get('http://localhost:3000/ambulance/available');
//   const data = await response.data;
//   console.log(data);

//   return {
//     props: {
//       data
//     }
//   };
  
//   } catch (error) {

//   return {
//     props: {
//       data: {status:"enter valid user id"}
//     }
//   };
// }
// }


   
  
  



