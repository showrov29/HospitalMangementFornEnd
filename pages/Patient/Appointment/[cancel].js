import React from 'react'
import { useRouter } from 'next/router'

export default function cancel() {
  const router=useRouter();
    console.log(router.query);
    const {cancel}=router.query;
  return (
    <div>
      <h2>Cancel appointment : {cancel} </h2>
    </div>
  )
}
