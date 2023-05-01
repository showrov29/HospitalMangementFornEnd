import React from 'react'
import axios from 'axios';
import { useEffect,useState } from 'react';
import { useRouter } from 'next/router';
import Navigation from '../components/navigation'
export default function ambulances({data}) {
  const router = useRouter();


  const ok={
    sub:(item)=>{
      const data ={
        patientId:localStorage.getItem('id')
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
    <div class="p-4 sm:ml-64">
      <Navigation/>

      <h1>All Ambulances</h1>
      <table>
            <thead>
              <tr>
                <th>Driver Name</th>
                <th>Rent </th>
                <th>Location </th>
                <th>Action </th>
                
              </tr>
            </thead>
            <tbody>
              {data==null? data.map((item) => {
                return (
                  <tr>
                    <td>{item.driverName}</td>
                    <td>{item.rent}</td>
                    <td>{item.location}</td>
                   
                    <td><button onClick={()=>{ok.sub(item.id)}} >Book</button></td>
                    
                  </tr>
                );
              }):<p>No available ambulances</p>}
            </tbody>
          </table>
        
    </div>
  )
}



export async function getServerSideProps() {
 
  try {
  const response = await axios.get('http://localhost:3000/ambulance/available');
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

function test(){
  
}
  
  



