"use client"

import React from 'react'
import { useForm } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Textarea } from '../ui/textarea'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { z } from "zod"
import { ReloadIcon } from "@radix-ui/react-icons"
import { zodResolver } from "@hookform/resolvers/zod"

const formSchema = z.object({
    email: z.string().email({
        message: "Please enter valid email.",
    }),
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    message: z.string().min(10, {
        message: "Message must be at least 10 characters.",
    }),
  })

const ContactForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          name: "",
          email: "",
          message: "",
        },
      })
     
      function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
        
        form.reset()
      }
    
  return (
    <div className='w-[90%] sm:w-full md:max-w-[600px] lg:max-w-[700px] py-5 px-10 md:py-10 md:px-20'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className='sr-only'>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your Name" {...field} />
                </FormControl>
                <FormDescription className='sr-only'>Input field for name of a email sender</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className='sr-only'>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Your Email" {...field} />
                </FormControl>
                <FormDescription className='sr-only'>Input field for email of a email sender</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className='sr-only'>Message</FormLabel>
                <FormControl>
                  <Textarea placeholder="Your Message" {...field} />
                </FormControl>
                <FormDescription className='sr-only'>Input field for message to a recipient</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className='w-full' variant="outline" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting 
                    ? (
                        <>
                            <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                            Sending
                        </>
                    ) 
                    : "Send"
                }
            </Button>
        </form>
      </Form>
    </div>
  )
}

export default ContactForm