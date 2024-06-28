import React from 'react'
import Image from 'next/image'
import logo from '../../public/logo.webp'
import Link from 'next/link'

export default function Nav() {
    return (
        <nav className="p-2 border-b-gray-300 border-b  ">
            <div className='max-w-[91%] mx-auto flex justify-between'>
                <div>
                    <Image src={logo} width={150} alt='logo'  priority={true} />
                </div>
                <div className="flex justify-end gap-4">
                    <Link className="px-3 py-2 bg-blue-900 rounded-lg" href='/auth/register'>Sign up</Link>
                    <Link className="px-3 py-2 bg-blue-900 rounded-lg" href='/auth/login'>Login</Link>
                </div>
            </div>
        </nav>
    )
}
