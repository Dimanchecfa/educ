import React from 'react'
import { Icons } from '../icons'
import { Button } from '../ui/button'
import { useRouter } from 'next/router'

export default function StepCard({ title, icon , description , href}: { title: string, icon: JSX.Element , description : string , href : string }) {
  const router = useRouter()
  return (
    <>
        <div className="flex flex-col items-center w-72 h-[350px] border hover:border-primary hover:shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-0.5 hover:-translate-x-0.5 hover:scale-105">
          <p className='text-2xl font-bold text-gray-500'>
            {title}
          </p>
          <div className="flex flex-col items-center justify-center w-full h-1/2">
              {icon}
              <p>
                {description}
              </p>
          </div>
          <div className="flex items-center justify-center w-full h-1/2 p-3">
           <Button
             onClick={() => {
                router.push(href)
             }}
              className="w-32 h-8 bg-primary hover:bg-primary-dark"
              type="button"
            >
              <p className="text-white">
                Commencer
              </p>
            </Button>
          </div>
        </div>
    </>
  )
}
