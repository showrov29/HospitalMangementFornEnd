import React from 'react'
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Sessioncheck() {
    const router = useRouter();

    useEffect(() => {
        const session=sessionStorage.getItem('email');

        if(! session){
            router.push('/login');
        }
      
    }, []);

  return (



    <div>
      
    </div>
  )
}
