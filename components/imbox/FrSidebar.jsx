"use client"
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function FrSidebar({roomId,_id,name,email}) {

  const patName=usePathname()
  const newpath=patName.split("/")[4]

  return (
    <Link href={`/inbox/rooms/${roomId}/${_id}`} className={`${newpath==_id?"bg-gray-700":""} m-2 rounded-lg py-1 flex hover:bg-gray-700 items-center gap-3 my-2 px-3 ` }>
     <div>
      <Image src={'https://img.freepik.com/free-vector/young-prince-vector-illustration_1308-174367.jpg'} alt='friend image ' width={500} height={500} className='w-[40px] h-[40px] rounded-full'/>
     </div>
     <div>
      <h1 className='text-gray-300 capitalize'>{name}</h1>
      <small className='text-gray-400 lowercase'>1h ago</small>
   
     </div>
    </Link>
  )
}
