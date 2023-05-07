import React, { useState } from 'react'
import Link from 'next/link'
import { useEffect } from 'react';

export default function Navigation() {
   const [id,setId]=useState(0)
   const [isOpen,setIsOpen]=useState(true)

   useEffect(() => {
      const x=localStorage.getItem('id')
      setId(x)
   }, []);

   function toggleSidebar(){
      setIsOpen(!isOpen)
   }



  
  
  return (
    <>


<button data-drawer-target="sidebar-multi-level-sidebar" data-drawer-toggle="sidebar-multi-level-sidebar" aria-controls="sidebar-multi-level-sidebar" type="button" class="inline-flex-end items-center p-2 mt-2 ml-3 sm:hidden text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 ">
   <span class="sr-only">Open sidebar</span>
   <svg class="w-2 h-2 flex-end" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
   </svg>
</button>
<aside id="sidebar-multi-level-sidebar" class=" mt-16 fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-sky-400" aria-label="Sidebar">


   <div class="h-full px-3 py-4 overflow-y-auto bg-slate-100 dark:bg-gray-800">
      
      <ul class="space-y-2 font-medium">
         

         <li>
            
            <Link href="/Patient/Doctor/doctors" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-violet-500 dark:hover:bg-gray-700">
               <svg aria-hidden="true" class="w-6 h-6 text-black transition duration-75  dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
               <span class="ml-3">Dashboard</span>
            </Link>
         </li>
         <li>
           <button type="button" onClick={toggleSidebar} class="flex items-center w-full hover:bg-violet-500 p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
           <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-black transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                  <span class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>My Account </span>
                  <svg sidebar-toggle-item class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
      {isOpen && (<ul id="dropdown-example" class=" py-2 space-y-2">
            <li>

               <a href={`/Patient/Ambulances/Book/${id}`} class="flex items-center hover:bg-violet-500 w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Booked Ambulance</a>
            </li>
            <li>
               <a href={`/Patient/Appointment/${id}`} class="flex items-center w-full hover:bg-violet-500 p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Appointments</a>
            </li>
            <li>
               <a href={`/Patient/Profile/${id}`} class="flex items-center hover:bg-violet-500 w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Profile</a>
            </li>
            <li>
               <a href={`/Patient/Prescription/${id}`} class="flex items-center hover:bg-violet-500 w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Prescriptions</a>
            </li>
      </ul>)}
         </li>
         <li>
            <Link href="/Patient/bloodbank" class="flex items-center p-2 hover:bg-violet-500 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <svg class="h-8 w-8 text-black"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="4" y="5" width="16" height="16" rx="2" />  <line x1="16" y1="3" x2="16" y2="7" />  <line x1="8" y1="3" x2="8" y2="7" />  <line x1="4" y1="11" x2="20" y2="11" />  <line x1="10" y1="16" x2="14" y2="16" />  <line x1="12" y1="14" x2="12" y2="18" /></svg>       
               <span class="flex-1 ml-3 whitespace-nowrap">Blood Bank</span>
               
            </Link>
         </li>

         
         <li>
            <Link href="/Patient/ambulances" class="flex items-center hover:bg-violet-500 p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <svg class="h-8 w-8 text-blsck"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="7" cy="17" r="2" />  <circle cx="17" cy="17" r="2" />  <path d="M5 17h-2v-11a1 1 0 0 1 1 -1h9v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" />  <path d="M6 10h4m-2 -2v4" /></svg>                
               <span class="flex-1 ml-3 whitespace-nowrap">Ambulances</span>
            </Link>
         </li>
         
         <li>
            <Link href="/components/logout" class="flex items-center hover:bg-violet-500 p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-black transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"></path></svg>
               <span class="flex-1 ml-3 whitespace-nowrap">Logout</span>
            </Link>
         </li>
        
      </ul>
   </div>
</aside>
    
    </>
  )
}
