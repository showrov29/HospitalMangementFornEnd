import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import MyHead from './head'
import Sessioncheck from './sessioncheck'
import Navigation from './navigation'

export default function MyLayout({children}) {
  
  return (
    <div>
        

        <Sessioncheck/>    
          <MyHead/>
          <Navigation/>
       
       

        <main>{children}</main>

       
    </div>
  )
}
