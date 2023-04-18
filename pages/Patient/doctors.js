// import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
const axios=require('axios').default;
import Link from 'next/link';

export default function doctors({data}) {

  return (
    <div>
       
       <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Speciality</th>
                <th>Designation</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => {
                return (
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.specialist}</td>
                    <td>{item.designation}</td>
                    <td><Link href={`Doctor/${item.id}`} >Details</Link> </td>
                   
                   
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
  const response = await axios.get('http://localhost:3000/doctor/alldoc');
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
