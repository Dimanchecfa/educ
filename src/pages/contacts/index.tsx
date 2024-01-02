import ImportUserSheet from '@/components/modal/contact-import-sheet'
import Breadcumb from '@/components/ui/breadcumb'
import { Button } from '@/components/ui/button'
import ContactsList from '@/components/contact/contacts-list'
import UserList, { Payment } from '@/components/contact/contacts-list'
import GeneralLayout from '@/layouts/_general-layout'
import { DownloadIcon, PlusIcon, UploadIcon } from '@radix-ui/react-icons'
import React from 'react'
import ContactSheet from '@/components/modal/contact-detail-sheet'


export default function Contacts() {
  const data: Payment[] = [
    {
      id: "m5gr84i9",
      amount: 316,
      status: "success",
      email: "ken99@yahoo.com",
    },
    {
      id: "3u1reuv4",
      amount: 242,
      status: "success",
      email: "Abe45@gmail.com",
    },
    {
      id: "derv1ws0",
      amount: 837,
      status: "processing",
      email: "Monserrat44@gmail.com",
    },
    {
      id: "5kma53ae",
      amount: 874,
      status: "success",
      email: "Silas22@gmail.com",
    },
    {
      id: "bhqecj4p",
      amount: 721,
      status: "failed",
      email: "carmella@hotmail.com",
    },
    {
      id: "bhqecj4p",
      amount: 721,
      status: "failed",
      email: "carmella@hotmail.com",
    }
  ]
  return (
    <GeneralLayout>
      <div className='w-full p-4 flex flex-col space-y-2'>
        <Breadcumb
          title='Contacts'
          children={
            <>
             <ImportUserSheet title='Import user'>
             <Button
                variant='default'
                className='h-8 px-2 lg:px-3'
              >
                <UploadIcon className='h-4 w-4 mr-1' />
                Import
              </Button>
             </ImportUserSheet>
             <ContactSheet title='Add user' data={null} type='form'>
             <Button
                variant='default'
                className='h-8 px-2 lg:px-3 flex'
              >
                <PlusIcon className='h-4 w-4' />
                Add User
              </Button>
              </ContactSheet> 
            </>
          }
        />
        <ContactsList data={data} />
      </div>
    </GeneralLayout>
  )
}
