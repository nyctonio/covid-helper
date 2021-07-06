import React from 'react'
import {Link} from 'react-router-dom'

export default ()=> {
    return (
        <header class="">
        <nav class="flex items-center justify-between flex-wrap p-5 " style={{"background-color": "#141515"}}>
            <div class="flex items-center flex-shrink-0 text-white mr-6">
              <img class="mr-3" src="https://s2.svgbox.net/social.svg?ic=ghost&color=eb3656" width="22" height="22" />
              <span class="font-semibold text-xl text-red-500 tracking-tight">CovidHelper</span>
            </div>
            <div class="block lg:hidden">
              <button onclick="func()" class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
              </button>
            </div>
            <div id="hide" class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
              <div class="lg:flex-grow">
                <Link to="/">
                <a href="#" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4">
                  Track
                </a></Link>
                <a href="#" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4">
                 <Link to="/dashboard">Get Help</Link> 
                </a>
                <a href="#" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300">
                <Link to="/dashboard">Help</Link>
                </a>
              </div>
              <div>
                <Link to="/login">
                <a href="#" class="inline-block text-sm px-4 py-2 leading-none border-none rounded text-white border-white hover:border-transparent hover:text-teal-100 hover:bg-red-600 mt-4 mr-2 lg:mt-0" style={{"background-color": "#eb3656"}}>Sign In</a></Link>
              </div>
              <div>
                <Link to="/signup">
                <a href="#" class="inline-block text-sm px-4 py-2 leading-none border-none rounded text-white border-white hover:border-transparent hover:text-teal-100 hover:bg-red-600 mt-4 lg:mt-0" style={{"background-color": "#eb3656"}}>Sign Up</a></Link>
              </div>
            </div>
          </nav>
    </header>
    )
}
