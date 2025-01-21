
import Frlayout from '@/components/imbox/Frlayout'
import React from 'react'

export default function layout({children}) {
  return (
  
    <div className='md:grid md:grid-cols-5 w-full  '>
         <div className='col-span-1'>
          <Frlayout/>
         </div>
         <div className='col-span-4'>
         {children}
         </div>
    
       </div>
  )
}
