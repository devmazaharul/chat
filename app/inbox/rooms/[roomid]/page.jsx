"use client"
import { basicClient } from '@/action';
import Roomfriends from '@/components/imbox/Friends';
import axios from 'axios';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export default function Page() {
  const params = useParams();
  const { roomid } = params; // 'id' is the dynamic parameter
const [roomfriends, setroomfriends] = useState(null)

  useEffect(()=>{
    basicClient.get(`/dashboard/rooms/${roomid}/`).then((res)=>{
       
        setroomfriends(res?.data?.data)
    }).catch((Err)=>{
        toast.error("Error")
    })
  },[])



  return (
    <div className='grid grid-cols-5'>
        <div className="col-span-1 bg-gray-800 w-full px-2 py-1 h-[100vh]  ">
            {roomfriends?.friendsList.length==0?<p className='text-red-500 text-center py-3'>No frieds found 😔 {roomfriends?.name} </p>:""}
            {roomfriends && roomfriends?.friendsList.map((item)=>(
      <Roomfriends key={item._id}  {...item}/>
            ))}
      
        </div>
        <div className="col-span-4">bangla</div>
    </div>
  );
}
