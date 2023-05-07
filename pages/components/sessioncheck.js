import React from 'react'
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Sessioncheck() {
    const router = useRouter();


    useEffect(() => {
        const session=sessionStorage.getItem('email');
        const url=window.location.pathname;

        if(! session){
            router.push('/login');
        }
        else if(url=='/login'){
          router.push('/Patient/Doctor/doctors')
           }
        // else{
        //   router.push(url)
        // }
      
    }, []);

  return (



    <div>
      
    </div>
  )
}
