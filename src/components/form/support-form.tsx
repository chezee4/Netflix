'use client'
import React, { useState } from 'react'
import { countries } from '../../config/countries'
import { Icon } from '@iconify/react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'
interface IFormInput {
  'First name': string
  'Last name': string
  Email: string
  'Mobile number': string
  Title: string
  Developer: string
}

export default function SupportForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>()
  const onSubmit: SubmitHandler<IFormInput> = data => console.log(data)
  const [selectedCountry, setSelectedCountry] = useState({ code: 'ua', phone: 380 })
  const [openListCountries, setOpenListCountries] = useState(false)

  const handleSelect = (countryName: { code: string; phone: number }) => {
    setSelectedCountry(countryName)
    setOpenListCountries(!openListCountries)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 mb-5">
      <input
        type="text"
        placeholder="First name"
        {...register('First name', { required: true, minLength: 2, maxLength: 80 })}
      />
      <input
        type="text"
        placeholder="Last name"
        {...register('Last name', { required: true, maxLength: 100 })}
      />
      <input
        type="text"
        placeholder="Email"
        {...register('Email', { required: true, pattern: /^\S+@\S+$/i })}
      />
      <div className=" relative flex items-center gap-1">
        <div
          className="flex gap-1 cursor-pointer items-center "
          onClick={() => setOpenListCountries(!openListCountries)}
        >
          <Icon icon={`flag:${selectedCountry.code}-4x3`} width={25} />

          <span className="text-white text-sm">{'+' + selectedCountry.phone}</span>
        </div>
        <div
          className={cn(
            ' absolute top-[30px] flex flex-col gap-2 max-w-[95px] max-h-[140px] overflow-y-scroll w-full bg-black-8 ',
            openListCountries ? 'flex' : 'hidden',
          )}
        >
          {countries.map((country, index) => (
            <div
              key={index}
              onClick={() =>
                handleSelect({
                  code: country.code.toLowerCase(),
                  phone: country.phone,
                })
              }
              className=" cursor-pointer flex gap-1 items-center"
            >
              <Icon icon={`flag:${country.code.toLowerCase()}-4x3`} width={30} />
              <span className="text-white text-sm">{'+' + country.phone}</span>
            </div>
          ))}
        </div>
        <input
          type="tel"
          placeholder="Mobile number"
          {...register('Mobile number', {
            required: true,
            minLength: 6,
            maxLength: 12,
          })}
        />
      </div>
      <select {...register('Title', { required: true })}>
        <option value="Mr">Mr</option>
        <option value="Mrs">Mrs</option>
        <option value="Miss">Miss</option>
        <option value="Dr">Dr</option>
      </select>

      <Button type="submit" variant="default" size="default">
        Submit
      </Button>
    </form>
  )
}
