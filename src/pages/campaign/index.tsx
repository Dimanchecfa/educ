import CampaignsList from '@/components/campaign/campaigns-list'
import Breadcumb from '@/components/ui/breadcumb'
import GeneralLayout from '@/layouts/_general-layout'
import { Button } from '@/components/ui/button'
import { PlusIcon } from '@radix-ui/react-icons'
import React from 'react'
import { useRouter } from 'next/router'

export default function Campaign() {
  const router = useRouter()
  return (
    <GeneralLayout>
      <div className='w-full p-4 flex flex-col space-y-2'>
        <Breadcumb
          title='Campagnes'
          children={
            <>
              <Button
                onClick={() => router.push('/campaign/create')}
                variant='default'
                className='h-8 px-2 lg:px-3 flex'
              >
                <PlusIcon className='h-4 w-4' />
                 Create campaign
              </Button>
            </>
          }
        />
        <CampaignsList data={[]} />

      </div>
    </GeneralLayout>
  )
}
