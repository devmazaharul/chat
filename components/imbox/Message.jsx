"use client"
import { basicClient } from '@/action'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import InboxDesign from './InboxDesign'

export default function Message() {
const [message, setmessage] = useState(null)
const path=usePathname()
const roomid=path.split("/")[3]
const friendId=path.split("/")[4]

useEffect(()=>{
basicClient.get(`inbox/rooms/${roomid}/${friendId}`).then((Res)=>{
    console.log(Res)
}).catch((err)=>{
    console.log(err)
})
},[])


const rep=["hi","tmi kmn aso","amio valo asi"]
const me=["hlw","ami valo","Tmi kmn aso?"]


  return (
    <div className='h-[100vh] bg-gray-900  w-full'>
        <div className='h-[86%]'>
          {rep.map((replay,i)=>(
             <div key={i}>
                 <p className='bg-gray-900 text-gray-400 p-3'>{replay}</p>
                 <p className='text-right bg-gray-80 text-gray-400 p-3'>{me[i]}</p>
               
             </div>
              
          ))}
        
           
          
        </div>
   <div className=''>
   <InboxDesign/>
   </div>
    </div>
  )
}
