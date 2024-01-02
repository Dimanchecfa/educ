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
  fullName : z.string().nonempty({ message: 'Le nom complet est requis' }),
  email : z.string().email({ message: 'Le mail est requis' }),
  phone : z.string().nonempty({ message: 'Le numéro de téléphone est requis' }),
  address : z.string().nonempty({ message: 'L\'adresse est requis' }),
})

type FormSchema = z.infer<typeof formSchema>

export default function   ContactForm({ title , data  , setView }: { title : string , data: any , setView : any}) {
  const [date, setDate] = useState<Date>()
  const isEdit = data ? true : false

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: data?.fullName,
      email: data?.email,
      phone: data?.phone,
      address: data?.address,
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
       <div className='grid grid-cols-2 w-full gap-6 border p-4 rounded-md'>
           
           <FormField
             control={form.control}
             name="fullName"
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
           <FormField
             control={form.control}
             name="email"
             render={({ field }) => (
               <FormItem>
                 <FormLabel>
                   <span className="text-gray-700">
                      Email
                     <span className="text-red-500">*</span>
                   </span>
                 </FormLabel>
                 <FormControl>
                   <Input
                     {...field}
                     placeholder="Email"
                     className="w-full"
                   />
                 </FormControl>
                
                 <FormMessage />
               </FormItem>
             )}
           />
           <FormField
             control={form.control}
             name="phone"
             render={({ field }) => (
               <FormItem>
                 <FormLabel>
                   <span className="text-gray-700">
                     Numéro de téléphone
                   <span className="text-red-500">*</span>
                   </span>
                 </FormLabel>
                 <FormControl>
                   <Input
                     {...field}
                     placeholder="Numéro de téléphone"
                     className="w-full"
                   />
                 </FormControl>
                
                 <FormMessage />
               </FormItem>
             )}
           />
           <FormField
             control={form.control}
             name="address"
             render={({ field }) => (
               <FormItem>
                 <FormLabel>
                   <span className="text-gray-700">
                     Adresse
                     <span className="text-red-500">*</span>
                   </span>
                 </FormLabel>
                 <FormControl>
                   <Input
                     {...field}
                     placeholder="Addresse"
                     className="w-full"
                   />
                 </FormControl>
                 <FormMessage />
               </FormItem>
             )}
           />
           
        </div>
        <div className={cn('flex flex-row items-center' , {
          "justify-end" : !isEdit,
          "justify-between" : isEdit
        })}> {
          isEdit && (
            <>
                <Button 
          onClick={() => setView('detail')}
          className="w-24"
          variant={"destructive"}
        >
         Annuler
        </Button>
            </>
          )
        }
        <Button 
            onClick={handleSubmit()}
            className="w-24"
          >
            {isEdit ? 'Modifier' : 'Ajouter'}
          </Button>
         
        </div>
       </form>
      </Form >
    </div >
  )
}
