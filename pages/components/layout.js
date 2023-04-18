import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import MyHead from './head'

export default function MyLayout({children}) {
  return (
    <div>
        

        <MyHead/>
        <nav>
            <Link href="/about"> About Us</Link>
            <Link href="/"> Home</Link>
            <Link href="/Patient/logout">LogOut</Link>
          
        </nav>

        <main>{children}</main>

       
    </div>
  )
}
