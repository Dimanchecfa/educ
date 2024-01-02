import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@/components/ui/input'
import { RadioItem } from '@radix-ui/react-dropdown-menu'
import { Switch } from '@/components/ui/switch'
import { CalendarIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { useState } from 'react'
import { SaveAllIcon, SaveIcon } from 'lucide-react'

const formSchema = z.object({
  name : z.string().nonempty({ message: 'Le nom complet est requis' }),
  startDate : z.string(),
})

type FormSchema = z.infer<typeof formSchema>

export default function FirstFormStep() {
  const [date, setDate] = useState<Date>()

  const isEdit = false

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name : "",
      startDate : ""
    }, 
  })

  const handleSubmit = () => (e: any) => {
    e.preventDefault()
    console.log(form.getValues())
  }

  return (
    <div className='flex py-4 w-full'>
      <Form {...form}>
        <form className='flex flex-col w-full gap-2'>
       <div className='grid grid-cols-2 w-full gap-6 rounded-md'>
           
           <FormField
             control={form.control}
             name="name"
             render={({ field }) => (
               <FormItem>
                 <FormLabel>
                   <span className="text-gray-700">Nom complet<span className="text-red-500">*</span></span>
                 </FormLabel>
                 <FormControl>
                   <Input
                     {...field}
                     placeholder="Nom complet"
                     className="w-full"
                   />
                 </FormControl>
                 <FormMessage />
               </FormItem>
             )}
           />
           
        </div>
       </form>
      </Form >
    </div >
  )
}

FirstFormStep