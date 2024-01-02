import Breadcumb from '@/components/ui/breadcumb'
import GeneralLayout from '@/layouts/_general-layout'
import React from 'react'

export default function Settings() {
  return (
    <GeneralLayout>
      <div className='flex flex-col p-4'>
        <Breadcumb
          title='Paramètres'
          children={
            <>
                <p>
                  
                </p>
            </>
          }
        />
      </div>
    </GeneralLayout>
  )
}
