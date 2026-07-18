import React from 'react'
import Link from 'next/link'

function Header() {
  return (
    <nav className='px-10 md:px-20 py-5 bg-[#001] flex justify-between items-center'>
      <div>
        <Link href="/" className='text-2xl font-bold text-[#7cf03d] hover:cursor-pointer'>HiTech</Link>
      </div>
      <div className='flex gap-6 text-white font-bold'>
        <Link href="/" className="text-md hover:text-[#7cf03d] hover:transition-all hover:translate-0.5 hover:">Home</Link>
        <Link href="/skills" className="text-md hover:text-[#7cf03d] hover:transition-all hover:translate-0.5 hover:">Skills</Link>
        <Link href="/projects" className="text-md hover:text-[#7cf03d] hover:transition-all hover:translate-0.5 hover:">Projects</Link>
        <Link href="/contact" className="text-md hover:text-[#7cf03d] hover:transition-all hover:translate-0.5 hover:">Contact</Link>

      </div>
    </nav>
  )
}

export default Header
