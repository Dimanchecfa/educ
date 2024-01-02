import React from 'react'
import { Button } from './button'
import { PlusIcon, UploadIcon } from '@radix-ui/react-icons'

export default function Breadcumb({ title , children }: { title : string , children?: React.ReactNode }) {
  return (
    <div className='flex flex-row justify-between items-center'>
      <h1 className='text-2xl font-semibold'>
        {title}
      </h1>
      <div className='flex flex-row space-x-2'>
        {children}
      </div>
    </div>
  )
}


