// 'use client'
// import { useEffect, useState, useRef } from 'react'
// import { zodResolver } from '@hookform/resolvers/zod'
// import { z } from 'zod'
// import { useForm, useFieldArray } from 'react-hook-form'
// import { Input } from 'src/components/ui/input'
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormDescription,
//   FormMessage,
// } from 'src/components/ui/form'
// import { useToast } from 'src/components/ui/use-toast'
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from 'src/components/ui/select'
// import { DialogFooter } from 'src/components/ui/dialog'
// import { Button } from 'src/components/ui/button'
// import { Movie } from 'src/types'
// import { Textarea } from 'src/components/ui/textarea'
// import {
//   TUpladMovieFormSchema,
//   UploadMovieFormSchema,
//   cn,
//   initialValues,
// } from 'src/lib/utils'
// import { Label } from 'src/components/ui/label'
// import MoviesVideoWrapper from 'src/layouts/movies-video-wrapper'
// import InputChips from 'src/components/input-chips'

// export default function UploadMovieForm() {
//   const fileInputRef = useRef<HTMLInputElement>(null)
//   const [avatar, setAvatar] = useState<string>(' ')
//   const form = useForm<TUpladMovieFormSchema>({
//     defaultValues: initialValues,
//     resolver: zodResolver(UploadMovieFormSchema),
//   })

//   const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files.length > 0) {
//       const file = e.target.files[0]
//       if (file) {
//         const reader: FileReader = new FileReader()
//         reader.onloadend = () => {
//           const base64Image = reader.result as string
//           setAvatar(base64Image)
//         }
//         reader.readAsDataURL(file)
//       }
//     }
//   }

//   const handleImageClick = () => {
//     if (fileInputRef.current) {
//       fileInputRef.current.click()
//     }
//   }

//   const onSubmit = (data: TUpladMovieFormSchema) => {}

//   return (
//     <Form {...form}>
//       <form onSubmit={form.handleSubmit(onSubmit)}>
//         <div className="flex flex-col gap-4 mb-4">
//           <MoviesVideoWrapper
//             avatar={avatar}
//             name="wff"
//             onClick={handleImageClick}
//           />
//           <div className="flex w-full max-w-sm items-center gap-1.5">
//             <Label htmlFor="picture">Picture</Label>
//             <Input
//               accept="image/*"
//               className="hidden"
//               id="picture"
//               onChange={handleAvatarChange}
//               ref={fileInputRef}
//               type="file"
//             />
//           </div>

//           <div className="flex items-center gap-5 mb-5">
//             <FormField
//               control={form.control}
//               name="title"
//               render={({ field }) => (
//                 <FormItem className="flex-1">
//                   <FormLabel>Назва фільму </FormLabel>
//                   <FormControl>
//                     <Input placeholder="Назва фільму" {...field} />
//                   </FormControl>
//                   <FormDescription>
//                     Введіть назву фільму, який ви хочете завантажити.
//                   </FormDescription>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <FormField
//               control={form.control}
//               name="description"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Опис фільму</FormLabel>
//                   <FormControl>
//                     <Textarea
//                       className="min-h-32 max-h-56"
//                       placeholder="Опис фільму"
//                       {...field}
//                     />
//                   </FormControl>
//                   <FormDescription>Розкажіть нам трохи про фільм.</FormDescription>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <FormField
//               control={form.control}
//               name="availableLanguages"
//               render={({ field }) => (
//                 <FormItem className="flex-1">
//                   <FormLabel>Прізвище</FormLabel>
//                   <FormControl>
//                     <InputChips chips={field.value} setChips={field.onChange} />
//                   </FormControl>
//                   <FormDescription>
//                     Це прізвище буде відображатися на вашому профілі та в електронних
//                     листах.
//                   </FormDescription>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//           </div>
//           <div className="flex items-center gap-5 ">
//             <FormField
//               control={form.control}
//               name="email"
//               render={({ field }) => (
//                 <FormItem className="flex-1">
//                   <FormLabel>Email</FormLabel>
//                   <FormControl>
//                     <Input placeholder="Ваш email" type="email" {...field} />
//                   </FormControl>
//                   <FormDescription>Введіть свій email.</FormDescription>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             <FormField
//               control={form.control}
//               name="phone"
//               render={({ field }) => (
//                 <FormItem className="flex-1">
//                   <FormLabel>Телефон</FormLabel>
//                   <FormControl>
//                     <Input placeholder="Ваш телефон" {...field} />
//                   </FormControl>
//                   <FormDescription>Введіть свій номер телефону.</FormDescription>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//           </div>
//           <FormField
//             control={form.control}
//             name="bio"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Біографія</FormLabel>
//                 <FormControl>
//                   <Textarea
//                     className="min-h-32 max-h-56"
//                     placeholder="Ваша біографія"
//                     {...field}
//                   />
//                 </FormControl>
//                 <FormDescription>Розкажіть нам трохи про себе.</FormDescription>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//         </div>

//         <Button type="submit">Зберегти</Button>
//       </form>
//     </Form>
//   )
// }
