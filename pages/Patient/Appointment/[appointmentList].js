import React from 'react'
import Navigation from '@/pages/components/navigation';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import NavBar from '@/pages/components/navBar';
export default function appointmentlist({data}) {
  const [id,setId]=useState(0)
  const [details,setDetails]=useState(null)
  const router=useRouter();

  useEffect(() => {
     const x=localStorage.getItem('id')
     setId(x)
  }, []);


  const ok={
    

    cancel:(item)=>{

      axios.delete(`http://localhost:3000/appointment/delete/${item}`)
      .then(response => {
        console.log(response.data);
        
      })
      .catch(err => {
        console.log(err);
      })
      window.location.reload(false);
      
    }
  }




  console.log(data);
  return (


    <div class="">
      <Navigation/>
      <NavBar/>
      
      <div class="w-3/4 mx-auto p-4 sm:ml-64">
        <div class="bg-gray-50 shadow-md rounded my-6"> 

      <table class="text-left w-full border-collapse">
            <thead>
              <tr>
                <th  class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Patient Name</th>
                <th  class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Age </th>
                <th  class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Date </th>
                <th  class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Action </th>
                
              </tr>
            </thead>
            <tbody>
              {data && data.map((item) => {
                return (
                  <tr class="hover:bg-gray-200">
                    <td class="py-4 px-6 border-b border-grey-light">{item.name}</td>
                    <td class="py-4 px-6 border-b border-grey-light">{item.age}</td>
                    <td class="py-4 px-6 border-b border-grey-light">{item.date}</td>
                    
                    <td><button class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 border border-blue-700 rounded" onClick={()=>{ok.cancel(item.id)}} >Delete</button></td>
                    
                  </tr>
                );
              })}
            </tbody>
          </table>


          </div>  
      </div>     
        
    </div>
  )
}




export async function getServerSideProps(context) {
  const {appointmentList}=context.query;
  

 
  try {
    
  const response = await axios.get(`http://localhost:3000/appointment/myappointments/${appointmentList}`);
  const data = await response.data;


  console.log(data);

  return {
    props: {
      data
    }
  };
  
  } catch (error) {
    console.log(error);

  return {
    props: {
      data: {status:"enter valid user id"}
    }
  };
}
}


   
  
  



