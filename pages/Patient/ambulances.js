import React from 'react'
import axios from 'axios';
import { useEffect,useState } from 'react';
import { useRouter } from 'next/router';
export default function ambulances({data}) {
  const router = useRouter();


 


  return (
    <div>
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
              {data.map((item) => {
                return (
                  <tr>
                    <td>{item.driverName}</td>
                    <td>{item.rent}</td>
                    <td>{item.location}</td>
                    <td><button>Details</button></td>
                    <td><button>Book</button></td>
                    
                  </tr>
                );
              })}
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


   
  
  



