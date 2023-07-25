import React from 'react'
import { LayoutProps } from '../types'

const Layout = ({children}:LayoutProps) => {
  return (
    <div className='bg-[#434E61] w-[100%] h-[100vh] flex flex-1 justify-center items-center'>
         {children}
    </div>
  )
}

export default Layout