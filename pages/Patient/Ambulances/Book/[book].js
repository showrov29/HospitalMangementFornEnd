import React from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import Sessioncheck from '@/pages/components/sessioncheck'
import Navigation from '@/pages/components/navigation'
import NavBar from '@/pages/components/navBar'

export default function BookAmbulance({data}) {



  const ok={
    cancel:(item)=>{
      const data ={
        patientId:null,
        status:true
      }
      console.log(data);
      axios.put(`http://localhost:3000/ambulance/edit/${item}`,data)
      .then(response => {
        console.log(response.data);
      })
      .catch(err => {
        console.log(err);
      })

      window.location.reload(false);
      
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
                <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Driver Name</th>
                <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Rent </th>
                <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Location </th>
                <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Action </th>
                
              </tr>
            </thead>
            <tbody>
              {data && (data.map((item) => {
                return (
                  <tr  class="hover:bg-gray-200">
                    <td class="py-4 px-6 border-b border-grey-light">{item.driverName}</td>
                    <td class="py-4 px-6 border-b border-grey-light">{item.rent}</td>
                    <td class="py-4 px-6 border-b border-grey-light">{item.location}</td>
                   
                    <td><button class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 border border-blue-700 rounded" onClick={()=>{ok.cancel(item.id)}} >Cancel</button></td>
                    
                  </tr>
                );
              }))}
            </tbody>
          </table>


          </div>  
      </div>     

    </div>
  )
}

export async function getServerSideProps(context) {

  const {book}=context.query
  

  try {
    console.log(book);
  const response = await axios.get(`http://localhost:3000/ambulance/booked/profile/${book}`);
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