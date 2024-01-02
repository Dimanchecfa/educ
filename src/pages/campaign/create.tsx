import CampaignForm from '@/components/campaign/campaign-wizard'
import CampaignsList from '@/components/campaign/campaigns-list'
import StepCard from '@/components/campaign/step-card'
import FirstFormStep from '@/components/campaign/steps/first-form-step'
import SecondTableStep from '@/components/campaign/steps/second-step'
import { Icons } from '@/components/icons'
import Breadcumb from '@/components/ui/breadcumb'
import { Button } from '@/components/ui/button'
import NavBreadcumb from '@/components/ui/nav-breadcumb'
import routes from '@/config/routes'
import GeneralLayout from '@/layouts/_general-layout'
import { PlusIcon } from 'lucide-react'
import React from 'react'

export default function CreateCampaign() {
  return (
    <GeneralLayout>
      <div className='w-full p-4 flex flex-col space-y-2'>
      <Breadcumb
          title='Campagnes'
        />
        <CampaignForm
          step1={
            <FirstFormStep />
          }
          step2={
            <SecondTableStep />
          }
        />
      </div>
    </GeneralLayout>
  )
}
