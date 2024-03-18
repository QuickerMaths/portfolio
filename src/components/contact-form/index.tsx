"use client"

import React, { MutableRefObject, useRef } from 'react'
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
import emailjs from '@emailjs/browser';
import { useToast } from "@/components/ui/use-toast"

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
    hidden: z.string()
  })

const ContactForm = () => {
  const formRef = useRef() as MutableRefObject<HTMLFormElement>
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        name: "",
        email: "",
        message: "",
        hidden: ""
      },
    })
   
  async function onSubmit(values: z.infer<typeof formSchema>) {
    if(values.hidden.length > 0) return
    
    return emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID as string, 
        process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID as string, 
        formRef.current, {
        publicKey: process.env.NEXT_PUBLIC_EMAIL_JS_PB_KEY,
      })
      .then((res) => {
        if(res.status === 200) {
          toast({
            title: "Message sent successfully!",
            description: "I will get back to you as soon as possible.",
            variant: "success",
          })  
          form.reset()
        }    
      }).catch((_error) => { 
        toast({
          title: "Ups, something went wrong!",
          description: "Please try again later or contact me directly using my gmail address or leave me a message on LinkedIn.",
          variant: "destructive",
        })
      });
  }
    
  return (
    <div className='w-[90%] sm:w-full md:max-w-[600px] lg:max-w-[700px] py-5 px-10 md:py-10 md:px-20'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8" ref={formRef}>
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
          <FormField
            control={form.control}
            name="hidden"
            render={({ field }) => (
              <FormItem className="h-0 w-0 invisible pointer-events-none">
                <FormLabel className='sr-only'>Hidden</FormLabel>
                <FormControl>
                  <Textarea placeholder="" {...field} />
                </FormControl>
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