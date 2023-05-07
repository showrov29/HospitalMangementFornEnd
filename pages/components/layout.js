import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import MyHead from './head'
import Sessioncheck from './sessioncheck'
import Navigation from './navigation'
import LandingPage from './landing'
import Footer from './footer'

export default function MyLayout({children}) {
  
  return (
    <div>
        

        <LandingPage/>
          
          
       
       

        <main>{children}</main>
<Footer/>
       
    </div>
  )
}
