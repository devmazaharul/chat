import Sidebar from '@/components/Sidebar'
import axios from 'axios';
import React from 'react'

export default function layout({children}) {
  axios.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoibWF6YWhhcnVsIGlzbGFtIiwiZW1haWwiOiJleEBnbWFpbC5jb20iLCJzdGF0dXMiOiJ1c2VyIiwiaWF0IjoxNzM3Mjg5Njc2fQ._iHwWR5H9HuJqmaZPue8w5Ur2r7DdGLqBYLMkB-rlIE';

  return (
    <div className='md:grid md:grid-cols-5 '>
      <div className='col-span-1'>
      <Sidebar/>
      </div>
      <div className='col-span-4'>
      {children}
      </div>
 
    </div>
  )
}
