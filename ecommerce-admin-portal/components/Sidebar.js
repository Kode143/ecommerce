import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <aside className='flex flex-col gap-4'>
        <div>
        <logo />
        </div>
        <Link href={'/'} className='flex flex-row'>
            <span>Dashboard</span>
        </Link>
        <Link href={'/product'}  className='flex flex-row'>
            <span>Products</span>
        </Link>
        <Link href={'/orders'}  className='flex flex-row'>
            <span>Orders</span>
        </Link>
        <Link href={'/catogeries'}  className='flex flex-row'>
            <span>Catagory</span>
        </Link>
        <Link href={'/settings'}  className='flex flex-row'>
            <span>Settings</span>
        </Link>
        <div>
            <button  className='flex flex-row'>Logout</button>
        </div>
    </aside>
  )
}

export default Sidebar