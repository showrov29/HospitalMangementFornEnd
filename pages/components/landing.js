import Footer from './footer'
import MyHead from './head'
import React from 'react'
import Navbar2 from './navbar2'

export default function LandingPage() {
  return (
    <div>

<MyHead/>
    <header>
      <Navbar2/>
    </header>

    <section class="bg-white dark:bg-gray-900">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div class="mr-auto place-self-center lg:col-span-7">
                <h1 class="max-w-2xl mb-4 text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl dark:text-white">WE CARE YOUR HEALTH AND CHECKUP WITH BEST</h1>
                <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">The Master Health Check (MHC) clinic of Evercare Hospital Dhaka is located at the ground floor in one side of the Atrium at the entrance of the hospital. This clinic houses all relevant equipment’s and logistics under one roof in one location; so those who are having health screening packages have the convenience of availing these without the hassle of moving here and there. MHC clinic is a wi-fi zone which further enhances the friendly and conducive ambience of the place, designed to make the over-all health check-up experience pleasant and memorable.</p>
                {/* <a href="#" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                    Get started
                    <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
                <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                    Speak to Sales
                </a>  */}
            </div>
            <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                <img src='hospital.jpg' alt="mockup" />
            </div>                
        </div>
    </section>

 
    

    <section class="bg-gray-50 dark:bg-gray-800">
        <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <div class="max-w-screen-md mb-8 lg:mb-16">
                <h2 class="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white">Our Doctors</h2>
                <p class="text-gray-500 sm:text-xl dark:text-gray-400">We have talent, experienced, reputed and dynamic doctors in our team working in a growing practice. All the doctors are whole heartedly waiting to help out the patients with majestic treatments. Our doctors are supported by practice nurses, management and clerical staff all providing high quality care to our patients.</p>
            </div>
            <h1 class="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white">Our services</h1>
            <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
        
                <div>
                    <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12 dark:bg-blue-900">
                    <svg class="h-8 w-8 text-blue-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="7" cy="17" r="2" />  <circle cx="17" cy="17" r="2" />  <path d="M5 17h-2v-11a1 1 0 0 1 1 -1h9v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" />  <path d="M6 10h4m-2 -2v4" /></svg>                    </div>
                    <h3 class="mb-2 text-xl font-bold dark:text-white">Ambulance</h3>
                    <p class="text-gray-500 dark:text-gray-400"> You can see all the available ambulances which is ready to pick up you. And you can book them</p>
                </div>
                <div>
                    <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12 dark:bg-blue-900">
                    <svg class="h-8 w-8 text-blue-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="4" y="5" width="16" height="16" rx="2" />  <line x1="16" y1="3" x2="16" y2="7" />  <line x1="8" y1="3" x2="8" y2="7" />  <line x1="4" y1="11" x2="20" y2="11" />  <line x1="10" y1="16" x2="14" y2="16" />  <line x1="12" y1="14" x2="12" y2="18" /></svg>                    </div>
                    <h3 class="mb-2 text-xl font-bold dark:text-white">Appoint </h3>
                    <p class="text-gray-500 dark:text-gray-400">You can make an appointment with a doctor youre looking for </p>
                </div>
                <div>
                    <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12 dark:bg-blue-900">
                        <svg class="w-5 h-5 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd"></path><path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path></svg>                    
                    </div>
                    <h3 class="mb-2 text-xl font-bold dark:text-white">Blood Collection</h3>
                    <p class="text-gray-500 dark:text-gray-400">You can see all available bloods and their collection date</p>
                </div>
                <div>
                    <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12 dark:bg-blue-900">
                    <svg class="w-5 h-5 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path></svg>
                    </div>
                    <h3 class="mb-2 text-xl font-bold dark:text-white">Prescription</h3>
                    <p class="text-gray-500 dark:text-gray-400">You can see all the Prescription that is given to you so you need not to wory about loosing them</p>
                </div>
                <div>
                    <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12 dark:bg-blue-900">
                        <svg class="w-5 h-5 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path></svg>
                    </div>
                    <h3 class="mb-2 text-xl font-bold dark:text-white">Report</h3>
                    <p class="text-gray-500 dark:text-gray-400">You don't need to come to hospital to collect your Report as you can find it online</p>
                </div>
                <div>
                    <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12 dark:bg-blue-900">
                    <svg class="h-8 w-8 text-blue-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <circle cx="11" cy="11" r="8" />  <line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                    </div>
                    <h3 class="mb-2 text-xl font-bold dark:text-white">Find Doctors</h3>
                    <p class="text-gray-500 dark:text-gray-400">Here Patient Can see all available doctors and their qualification, specialty, Rating They can book appointment from here</p>
                </div>
            </div>
        </div>
      </section>

      <section class="bg-white dark:bg-gray-900">
        <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                <h2 class="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white">OUR LATEST TECHNOLOGY</h2>
                <p class="mb-4">At Popular Diagnostic Centre Ltd. We have been actively revamping our technologies with the most modern one since the first day of our journey. All the aged machineries are being regularly replaced with the latest one. Technical team members are maintaining the machineries actively so that these can provide the best outcome.</p>
                {/* <p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p> */}
            </div>
            <div class="grid grid-cols-2 gap-4 mt-8">
                <img class="w-full rounded-lg " src="tech1.jpg" alt="office content 1" />
                <img class="mt-4 w-full lg:mt-10 rounded-lg" src="tech2.jpg" alt="office content 2" />
            </div>
        </div>
    </section>


    
    
    {/* <script src="https://unpkg.com/flowbite@1.4.7/dist/flowbite.js"></script> */}





    </div>
  )
}
