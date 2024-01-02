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

const formSchema = z.object({
  name: z.string().nonempty(),
  mailSubject: z.string().max(100),
  senderName: z.string().nonempty(),
  senderEmail: z.string().nonempty(),
  is_no_reply: z.boolean(),
  sendDate: z.date(),
  sendTime: z.string(),
})

type FormSchema = z.infer<typeof formSchema>

export default function MailCampaignForm() {
  const [date, setDate] = useState<Date>()

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      mailSubject: '',
      senderName: '',
      senderEmail: '',
      is_no_reply: false,
      sendDate: new Date(),
      sendTime: '',
    },
  })

  return (
    <div className='flex px-8 py-4'>
      <Form {...form}>
        <form className='grid grid-cols-2 w-full gap-6 border p-4'
          onSubmit={form.handleSubmit((data) => console.log(data))}>
           
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <span className="text-gray-700">Nom de la campagne <span className="text-red-500">*</span></span>
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Nom de la campagne"
                    className="w-full"
                  />
                </FormControl>
                <FormDescription>
                  <span className="text-gray-500">Le nom de la campagne est utilisé pour l'identifier dans l'application.</span>
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="mailSubject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <span className="text-gray-700">
                    Sujet du mail <span className="text-red-500">*</span>
                  </span>
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Sujet du mail"
                    className="w-full"
                  />
                </FormControl>
                <FormDescription>
                  <span className="text-gray-500">
                    Le sujet du mail est utilisé pour identifier le mail dans l'application.
                  </span>
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="senderName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <span className="text-gray-700">
                    Nom de l'expéditeur <span className="text-red-500">*</span>
                  </span>
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Nom de l'expéditeur"
                    className="w-full"
                  />
                </FormControl>
                <FormDescription>

                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="senderEmail"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <span className="text-gray-700">
                    Mail de l'expéditeur <span className="text-red-500">*</span>
                  </span>
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Mail de l'expéditeur"
                    className="w-full"
                  />
                </FormControl>
                <FormDescription>

                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="is_no_reply"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                <div className="space-y-0.5">
                  <FormLabel>
                    <span className="text-gray-700">No reply</span>
                  </FormLabel>
                  <FormDescription>
                    {
                      form.getValues('is_no_reply') ? (
                        <>
                          <span className="text-gray-500">Le mail sera envoyé en tant que no reply.</span> <br />
                          <span className="text-gray-400 text-bold">Le recepeteur ne pourra pas répondre au mail.</span>
                        </>
                      ) : (
                        <>
                          <span className="text-gray-500">Le mail sera envoyé en tant que {form.getValues('senderName')}.</span> <br />
                          <span className="text-gray-400 text-bold">Le recepeteur pourra répondre au mail.</span>
                        </>
                      )

                    }
                  </FormDescription>
                </div>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="sendDate"
            render={({ field }) => (
              <FormItem className='flex flex-col items-start justify-start w-full h-full'>
                <FormLabel>
                  <span className="text-gray-700">
                    Date d'envoi <span className="text-red-500">*</span>
                  </span>
                </FormLabel>
                <FormControl>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-full p-0" align="start" sideOffset={5}>
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={(date) => {
                          setDate(date)
                          field.onChange(date)
                        }}

                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </FormControl>
                <FormDescription>
                  <span className="text-gray-500">
                    La date d'envoi est utilisé pour identifier le mail dans l'application.
                  </span>
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form >
    </div >
  )
}
