import { redirect } from 'next/dist/server/api-utils';
import React, { useEffect } from 'react'
import axios from 'axios';
import { useRouter } from 'next/router';

export default function logout({data}) {

const router=useRouter();
  useEffect(() => {
    axios.get('http://localhost:3000/patient/logout')
    .then((response) => {
      console.log(response);
      localStorage.clear();
      sessionStorage.clear();
      router.push('/login');
    }).catch((err) => {
      console.log(err);
      
      
    })
  }, []);
 
  return (
    <div>
      
      
    </div>
  )
}

