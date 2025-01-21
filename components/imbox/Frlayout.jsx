"use client"
import { basicClient } from '@/action'
import FrSidebar from '@/components/imbox/FrSidebar'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function Frlayout() {

  const path=usePathname()
const newPath=path.split("/")[3]
const [friend, setfriend] = useState(null)
useEffect(()=>{
  basicClient.get("/inbox/rooms/"+newPath)
  .then((res)=>{
   setfriend(res.data.data)
  }).catch((Err)=>{
    console.log(Err)
  })
},[])


  return (
   <div className='bg-slate-800 w-full h-[100vh]'>
    <h1 className='text-gray-400 text-center p-2'>Friends</h1>
    <div>
   <div>
   {friend?.friendsList?.length==0?(
    <div className='w-fit mx-auto my-4 text-center'>
        <p className='text-red-400 py-3'>No friends</p>
        <button className='secondary_btn'>Add friend</button>
    </div>
   ):""}
   </div>
 {friend && friend.friendsList.map((item)=>(
   <FrSidebar roomId={friend._id} key={item._id} {...item}/>
 ))}
    </div>
   </div>
  )
}
