import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import Navigation from '../../components/navigation'
import { useRouter } from 'next/router';

export default function prescription({data}) {
  const router=useRouter()

  const ok={
    details:(item)=>{
      
      router.push({
        pathname: 'presdetails',
        query: { id: item }
      });
      
    }
  }


  return (
    <div class="p-4 sm:ml-64">

<Navigation/>

      
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>age</th>
                
              </tr>
            </thead>
            <tbody>
              {data.map((item) => {
                return (
                  <tr>
                    <td>{item.patientName}</td>
                    <td>{item.patientAge}</td>
                    <td><button onClick={()=>{ok.details(item.id)}} >Details</button></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        
    </div>
  )
}



export async function getServerSideProps(context) {
  
 const {prescription}=context.query;
 
  try {
  const response = await axios.get(`http://localhost:3000/prescription/myprescription/${prescription}`);
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


