import React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from '../ui/button'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { FilePlusIcon } from '@radix-ui/react-icons'


export default function Filter() {
  return (
    <>
      <div className='flex flex-col gap-y-3 rounded-md shadow-md p-4 border-2'>
        <div className='flex flex-row flex-wrap justify-start space-x-4 '>
          <div>
            <Input
              placeholder="Filtrer par nom"
              className="w-80"
            />
          </div>
          <Select>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Campagne" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">Campagne</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Campagne" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">Campagne</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
          <Button
            variant="outline"
            className="ml-auto"
          >
            Rechercher
          </Button>

        </div>
        <p>
          <Label>
            Historique de recherche
          </Label>
        </p>
        <div className='flex flex-row'>
          <div className='flex flex-row flex-wrap gap-x-2 gap-y-2'>
            <Tag title='Campagne' />
            <Tag title='Users' />
          </div>

        </div>
      </div>
    </>
  )
}


const Tag = ({ title }: { title: string }) => {
  return (
    <>
      <div className='flex flex-row items-center justify-center h-6 px-2 bg-slate-200 rounded-lg'>
          <FilePlusIcon className='w-4 h-4 mr-2' />
          <p className='text-sm'>{title}</p>
      </div>
    </>
  )
}

