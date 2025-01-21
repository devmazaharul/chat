"use client"
import React, { useState } from 'react'
import { IoIosSend } from "react-icons/io";

export default function InboxDesign() {

    const [state, setstate] = useState("")

    const handleSubmit=(e)=>{
        e.preventDefault()
    }

  return (
    <form onSubmit={handleSubmit} className='bg-gray-700 w-[90%] mx-auto px-2 text-gray-300 flex items-center justify-between rounded-md'>
        <input value={state} onChange={(e)=>setstate(e.target.value)} className='w-[90%] bg-gray-700  py-4 border-none outline-none px-3 bg-none ' type="text" placeholder='Type message'  />
    <button className={`${state.trim().length>0?"text-gray-200 text-2xl  rounded-full ":"text-gray-500"}`} disabled={state.length==0?true:false}><IoIosSend className=' hover:bg-gray-500 '/></button>
    </form>
  )
}
