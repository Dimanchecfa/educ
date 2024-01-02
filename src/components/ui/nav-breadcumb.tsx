import React from 'react'
import { Button } from './button'
import { DashIcon, PlusIcon, UploadIcon } from '@radix-ui/react-icons'

export default function NavBreadcumb({ title , children }: { title : string , children?: React.ReactNode }) {
  return (
    <div className='flex flex-row justify-between items-center'>
      <div className='flex flex-row space-x-2 p-2 bg-slate-400'>
        <div className='flex h-full'>
          <DashIcon className='h-4 w-4 text-white' /> 
          <p>
            <span className='text-white'>Campaigns</span>
            <span className='text-white'>/</span>
            <span className='text-white'>{title}</span>
          </p>

        </div>
      </div>
      <div className='flex flex-row space-x-2'>
        {children}
      </div>
    </div>
  )
}


