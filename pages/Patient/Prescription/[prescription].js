import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import Navigation from '../../components/navigation'
import { useRouter } from 'next/router';
import NavBar from '@/pages/components/navBar';
import Sessioncheck from '@/pages/components/sessioncheck';

export default function prescription({data}) {
  const router=useRouter()

  const ok={
    details:(item)=>{
      
      router.push({
        pathname: '/Patient/presdetails',
        query: { id: item }
      });
      
    }
  }


  return (
    <div class="">

<Sessioncheck/>
<Navigation/>
<NavBar/>


      <div class="w-3/4 mx-auto p-4 sm:ml-64">
        <div class="bg-gray-50 shadow-md rounded my-6">     
          <table class="text-left w-full border-collapse">
            <thead>
              <tr>
                <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Name</th>
                <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Age</th>
                <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Doctor Name</th>
                <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Action</th>
                
              </tr>
            </thead>
            <tbody>
              {data.map((item) => {
                return (
                  <tr class="hover:bg-gray-200">
                    <td class="py-4 px-6 border-b border-grey-light">{item.patientName}</td>
                    <td>{item.patientAge}</td>
                    <td>{item.doctorName}</td>
                    <td><button class="bg-blue-500 hover:bg-green-700 text-white font-bold py-1 px-4 border border-blue-700 rounded" onClick={()=>{ok.details(item.id)}} >Details</button></td>
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


