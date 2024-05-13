'use client'
import React, { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { useUserStore } from 'src/store/user-store'

import {
  TProfileEditValiador,
  ProfileEditValiador,
} from 'src/lib/validators/ProfileEdit'

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from 'src/components/ui/form'
import { Input } from 'src/components/ui/input'
import { Button } from 'src/components/ui/button'
import { Label } from 'src/components/ui/label'
import { Textarea } from 'src/components/ui/textarea'
import ProfileAvatarWrapper from 'src/layouts/profile-avatar-wrapper'

import { UserFormType } from 'src/types'

export default function ProfilEditForm() {
  const updateUser = useUserStore(state => state.updateUser)
  const updateAvatar = useUserStore(state => state.updateAvatar)
  const user = useUserStore(state => state.user)!
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [avatar, setAvatar] = useState<string>(user.avatar || ' ')
  const form = useForm<TProfileEditValiador>({
    defaultValues: {
      username: user.username,
      email: user.email,
      bio: user.bio || '',
      telNumber: user.telNumber || '',
    },
    resolver: zodResolver(ProfileEditValiador),
  })

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0]
      if (file) {
        const formData = new FormData()
        formData.append('avatar', file)

        updateAvatar(formData)

        const reader: FileReader = new FileReader()
        reader.onloadend = () => {
          const base64Image = reader.result as string
          setAvatar(base64Image)
        }
        reader.readAsDataURL(file)
      }
    }
  }

  const handleImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const onSubmit = (data: UserFormType) => {
    updateUser(data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-4 mb-4">
          <ProfileAvatarWrapper
            avatar={avatar}
            className="cursor-pointer hover:brightness-75 transition"
            name={user.username}
            onClick={handleImageClick}
          />
          <div className="flex w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="picture">Picture</Label>
            <Input
              accept="image/*"
              className="hidden"
              id="picture"
              onChange={handleAvatarChange}
              ref={fileInputRef}
              type="file"
            />
          </div>

          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="max-w-xl w-full text-lg">
                <FormLabel>Ім&apos;я та прізвище</FormLabel>
                <FormControl>
                  <Input placeholder="Ваше ім'я та прізвище" {...field} />
                </FormControl>
                <FormDescription>
                  Це ім&apos;я та прізвище буде відображатися на вашому профілі та в
                  електронних листах.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex items-center gap-5 ">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex-1 text-lg">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Ваш email" type="email" {...field} />
                  </FormControl>
                  <FormDescription>Введіть свій email.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="telNumber"
              render={({ field }) => (
                <FormItem className="flex-1 text-lg">
                  <FormLabel>Телефон</FormLabel>
                  <FormControl>
                    <Input placeholder="Ваш телефон" {...field} />
                  </FormControl>
                  <FormDescription>Введіть свій номер телефону.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="bio"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Біографія</FormLabel>
                <FormControl>
                  <Textarea
                    className="min-h-[200px] text-lg max-h-56"
                    placeholder="Ваша біографія"
                    {...field}
                  />
                </FormControl>
                <FormDescription>Розкажіть нам трохи про себе.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button type="submit">Зберегти</Button>
      </form>
    </Form>
  )
}
