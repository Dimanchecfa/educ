import ReportsList from '@/components/reports/reports-list'
import Breadcumb from '@/components/ui/breadcumb'
import GeneralLayout from '@/layouts/_general-layout'
import React from 'react'

export default function Report() {

  const data : any = [
    {
      id: "m5gr84i9",
      amount: 316,
      status: "success",
      email: "mmm@mm.com"
    },
    {
      id: "m5gr84i9",
      amount: 316,
      status: "success",
      email: "mmm@mm.com"
    },
    {
      id: "m5gr84i9",
      amount: 316,
      status: "success",
      email: "mmm@mm.com"
    }
  ]
  return (
    <GeneralLayout>
      <div className='flex flex-col p-4'>
        <Breadcumb
          title='Rapports'
          children={
            <>
            </>
          }
        />
        <ReportsList  data={data}/>
      </div>
    </GeneralLayout>
  )
}
