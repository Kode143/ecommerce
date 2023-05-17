import React from 'react'
import Link from 'next/link'

const Logo = () => {
  return (
    <>
<Link href={'/'} className='flex gap-1'>

    <span className='text-black'>
        EcommerceAdmin
    </span>
</Link>
    </>
  )
}

export default Logo