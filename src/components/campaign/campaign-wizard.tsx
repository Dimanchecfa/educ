import GeneralLayout from '@/layouts/_general-layout'
import FormWizard from "react-form-wizard-component";
import React from 'react'
import { InfoCircledIcon } from '@radix-ui/react-icons';
import { DownloadCloud, Mail, Users } from 'lucide-react';

export default function CampaignForm({ step1, step2, step3 }: any) {
  const handleComplete = () => {
    console.log("Form completed!");
    // Handle form completion logic here
  };
  const tabChanged = ({
    prevIndex,
    nextIndex,
  }: {
    prevIndex: number;
    nextIndex: number;
  }) => {
    console.log("prevIndex", prevIndex);
    console.log("nextIndex", nextIndex);
  };

  return (
    <div>
      <FormWizard shape="circle" color="#2563EB" onComplete={handleComplete} onTabChange={tabChanged} stepSize="sm">
        <FormWizard.TabContent title="Informations sur la campagne" icon={<InfoCircledIcon className='w-8 h-8' />}>
          {step1}
        </FormWizard.TabContent>
        <FormWizard.TabContent title="Contacts" icon={<Users className='w-8 h-8' />}>
          {step2}
        </FormWizard.TabContent>
        <FormWizard.TabContent title="Documents" icon={<DownloadCloud className='h-8 w-8' />}>
          {step3}
        </FormWizard.TabContent>
        <FormWizard.TabContent title="Message" icon={<Mail className='h-8 w-8' />}>
          {step3}
        </FormWizard.TabContent>
      </FormWizard>
    </div>
  )
}
