import React from 'react'
import Navigation from '@/pages/components/navigation';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
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


    <div class="p-4 sm:ml-64">
      <Navigation/>
      
      <h1>Appointment list</h1>

      <table>
            <thead>
              <tr>
                <th>Patient Name</th>
                <th>Age </th>
                <th>Date </th>
                <th>Action </th>
                
              </tr>
            </thead>
            <tbody>
              {data && data.map((item) => {
                return (
                  <tr>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.date}</td>
                    
                    <td><button onClick={()=>{ok.cancel(item.id)}} >Cancel</button></td>
                    
                  </tr>
                );
              })}
            </tbody>
          </table>
        
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


   
  
  



