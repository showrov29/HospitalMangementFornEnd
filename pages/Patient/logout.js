import { redirect } from 'next/dist/server/api-utils';
import React from 'react'
import axios from 'axios';

export default function logout({data}) {
 
  return (
    <div>
      
      
    </div>
  )
}


export async function getServerSideProps() {
  
  try {
  const response = await axios.get('http://localhost:3000/patient/logout');
  const data = await response.data;
  

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