import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div className='flex items-center justify-between gap-2 py-3 px-4 primary_bg primary_color'>
    <div className='text-xl font-semibold'><Link href={'/'}>Chat</Link></div>
    <div>
        <Link href={'/login'}>Login</Link>
    </div>
    </div>
  )
}
