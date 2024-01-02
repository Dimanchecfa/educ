import React from 'react'
import { Icons } from '../icons'
import InvoiceModal from "@/components/modal/invoice-modal";

export default function InvoiceCard( { title } : { title: string }) {
  return (
        <InvoiceModal title={title}>
                <>
                    <div className='flex flex-col w-40 h-48 border-2 rounded-tr-[40px] cursor-pointer hover:border-primary hover:border-dotted'>
                        <div className='flex items-center h-full border-b justify-center'>
                            <Icons.pdf className='w-36 h-36' />
                        </div>
                        <div className='flex items-center justify-center h-8 bg-slate-200'>
                            <p className='text-sm'>Due 19 Aug 2021</p>
                        </div>
                    </div>
                </>
            </InvoiceModal>
  )
}
