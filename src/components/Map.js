import React, { useState } from 'react';
import Header from './Header/Header'
import Footer from './Footer/Footer'
import img from '../image/map.png'

export default function Form() {
  return (
    <div>
        <Header />
    <div className="flex p-20">
        <div className="h-full border-2 rounded-2xl p-10 bg-red-100 w-1/3 ml-20 mr-10">
            <h1 className="text-center mb-6 font-bold text-2xl">Needy</h1>
            <h2 >Your Name</h2>
            <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" type="text" />
            <h2 >Your Phone No</h2>
            <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" type="text" />
            <h2 >Your Email ID</h2>
            <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" type="text" />
            <div className="bg-blue-400 my-5 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded-xl">Submit and allow Location</div>
        </div>
        <div className="h-full border-2 rounded-2xl p-10 bg-green-100 w-1/3 ml-10">
        <h1 className="text-center mb-6 font-bold text-2xl">Helper</h1>
            <h2 >Your Name</h2>
            <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" type="text" />
            <h2 >Your Phone No</h2>
            <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" type="text" />
            <h2 >Your Email ID</h2>
            <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" type="text" />
            <div className="bg-blue-400 my-5 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded-xl">Submit and allow Location</div>
            </div>
        </div>
        <p className="text-center"> Red Dots Are Needy and Greed Dots Are Helper click them to get contact information</p>
        <div className="p-20 rounded-md">
        <img className="rounded-md" src={img} alt=""/>
        </div>
    <Footer />

    </div>
  );
}