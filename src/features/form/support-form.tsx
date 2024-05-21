'use client'
import React, { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from 'src/components/ui/form'
import { ScrollArea } from 'src/components/ui/scroll-area'
import { Separator } from 'src/components/ui/separator'
import { Textarea } from 'src/components/ui/textarea'
import { Checkbox } from 'src/components/ui/checkbox'
import { Button } from 'src/components/ui/button'
import { Input } from 'src/components/ui/input'
import { useToast } from 'src/components/ui/use-toast'
import { Label } from 'src/components/ui/label'
import { countries } from 'src/config/countries'
import { Icon } from '@iconify/react'
import { cn } from 'src/lib/utils'
import { supportService } from 'src/services/support'
import { TSupportFormSchema, SupportFormSchema } from 'src/lib/validators/support'
import { ContentWrapper } from 'src/layouts/content-wrapper'

export default function SupportForm() {
  const form = useForm<TSupportFormSchema>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      message: '',
    },
    resolver: zodResolver(SupportFormSchema),
  })
  const { toast } = useToast()
  const [country, setCountry] = useState({ code: 'ua', phone: 380, name: 'Ukraine' })
  const [openListCountries, setOpenListCountries] = useState(false)

  const onSubmit = (data: z.infer<typeof SupportFormSchema>) => {
    toast({
      title: 'Review Added',
      description: 'Your review has been added successfully.',
    })
    supportService.sendSupportMessage(data)
    form.reset()
  }
  const handleSelect = (country: { code: string; phone: number; name: string }) => {
    setCountry(country)
    setOpenListCountries(!openListCountries)
  }
  return (
    <ContentWrapper variant="form" className="max-w-[800px]">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] grid-rows-[auto] gap-x-5 gap-y-10 py-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <>
                      <FormLabel>Ім&apos;я</FormLabel>
                      <Input
                        onChange={field.onChange}
                        value={field.value}
                        placeholder="Введіть ім'я"
                      />
                    </>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <>
                      <FormLabel>Прізвище</FormLabel>
                      <Input
                        onChange={field.onChange}
                        value={field.value}
                        placeholder="Введіть прізвище"
                      />
                    </>
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
                  <FormControl>
                    <>
                      <FormLabel>Email</FormLabel>
                      <Input
                        onChange={field.onChange}
                        value={field.value}
                        placeholder="Введіть Email"
                      />
                    </>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className=" relative flex flex-col ">
              <Label className=" text-sm mb-3">Номер телефону</Label>
              <div className="flex gap-3">
                <div className=" h-fit  relative bg-black-8 border border-black-15 hover:bg-black-12 cursor-pointer transition-colors duration-200 ease-linear rounded-md p-3 w-fit">
                  <div
                    className="flex gap-3 cursor-pointer items-center "
                    onClick={() => setOpenListCountries(!openListCountries)}
                  >
                    <Icon
                      icon={`flag:${country.code.toLowerCase()}-4x3`}
                      width={25}
                    />
                    <Separator orientation="vertical" className="h-6 w-0.5" />
                    <span className="text-white text-sm">{'+' + country.phone}</span>
                  </div>
                  <div
                    className={cn(
                      ' absolute top-14 left-0 ',
                      openListCountries ? 'flex' : 'hidden',
                    )}
                  >
                    <ScrollArea className="h-72 w-48 rounded-md border bg-black-8 ">
                      <div className="p-4">
                        <h4 className="mb-4 text-base font-bold leading-none text-center">
                          Phone Number
                        </h4>
                        <Separator className="mt-2" />
                        {countries.map(country => (
                          <React.Fragment key={country.name}>
                            <div
                              key={country.name}
                              className="text-sm cursor-pointer hover:bg-black-12 py-3 pl-1.5 transition-colors duration-200 ease-linear"
                              onClick={() => handleSelect(country)}
                            >
                              <Icon icon={`flag:${country}-4x3`} width={25} />
                              <span>{country.name}</span>{' '}
                              <span>+ {country.phone}</span>
                            </div>
                            <Separator />
                          </React.Fragment>
                        ))}
                      </div>
                    </ScrollArea>
                  </div>
                </div>

                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem className=" space-y-0 w-full">
                      <FormControl>
                        <>
                          <Input
                            onChange={field.onChange}
                            value={field.value}
                            placeholder="Введіть номер телефону"
                          />
                        </>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel>Ваше питання</FormLabel>
                  <Textarea
                    onChange={field.onChange}
                    value={field.value}
                    className="col-span-2 min-h-[400px] max-h-[400px]"
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Я згоден з Умовами використання та Політикою конфіденційності
              </Label>
            </div>
            <Button type="submit" variant="default">
              Відправити відгук
            </Button>
          </div>
        </form>
      </Form>
    </ContentWrapper>
  )
}
