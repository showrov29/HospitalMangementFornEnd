import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

export default function prescription({data}) {

  return (
    <div>
      
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
  const response = await axios.get('http://localhost:3000/prescription/myprescription');
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


