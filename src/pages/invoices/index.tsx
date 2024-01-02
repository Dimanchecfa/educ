import Filter from '@/components/invoices/filter'
import InvoiceCard from '@/components/invoices/invoice-card'
import InvoiceList from '@/components/invoices/invoices-list'
import Breadcumb from '@/components/ui/breadcumb'
import GeneralLayout from '@/layouts/_general-layout'
import { Button } from '@/components/ui/button'
import { GridIcon, PlusIcon, TableIcon, UploadIcon } from '@radix-ui/react-icons'
import React from 'react'
import { Separator } from '@/components/ui/separator'
import useInvoice from "@/hooks/use-invoice";

export default function Invoices() {
  const { toggleInvoice } = useInvoice()
  return (
    <GeneralLayout>
      <div className='flex flex-col p-4 space-y-4'>
        <Breadcumb
          title='Factures'
          children={
            <>
              <Button
                variant='default'
                className='h-8 px-2 lg:px-3'
              >
                <UploadIcon className='h-4 w-4 mr-1' />
                Import
              </Button>
              <Button
                variant='default'
                className='h-8 px-2 lg:px-3 flex'
              >
                <PlusIcon className='h-4 w-4' />
                Add invoice
              </Button>
              <div className='flex h-8 w-16 border flex-row items-center p-2 space-x-1'>
                <TableIcon className='h-6 w-6' />
                <Separator
                className='h-8 bg-gray-300'
                  orientation='vertical'
                />
                <GridIcon className='h-6 w-6' />
              </div>
            </>
          }
        />
        <Filter />
        <div className='flex flex-wrap gap-4'>
          <InvoiceCard
            title={'Facture 1'}
          />
        </div>
        {/* <InvoiceList data={[]} /> */}
      </div>
    </GeneralLayout>
  )
}
