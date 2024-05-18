import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { FormCommentSchema } from 'src/lib/utils'
import { z } from 'zod'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from 'src/components/ui/dialog'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from 'src/components/ui/form'
import { useToast } from 'src/components/ui/use-toast'
import { Textarea } from 'src/components/ui/textarea'
import { Button } from 'src/components/ui/button'
import SelectRating from 'src/components/rating-select'
import { HiPlus } from 'react-icons/hi'
import { useUserStore } from 'src/store/user-store'
import { useMovieStore } from 'src/store/movie-store'

export function FormForAddComments() {
  const user = useUserStore(state => state.user)
  const addCommentForMovie = useMovieStore(state => state.addCommentForMovie)

  const form = useForm<z.infer<typeof FormCommentSchema>>({
    resolver: zodResolver(FormCommentSchema),
  })
  const { toast } = useToast()

  const onSubmit = (data: z.infer<typeof FormCommentSchema>) => {
    if (!user) {
      toast({
        title: 'Помилка',
        description: 'Ви повинні увійти в систему, щоб залишити відгук.',
      })
      return
    }
    const commentData = {
      name: user.username,
      country: 'Ukraine',
      rating: +data.rating,
      comment: data.comment,
    }
    addCommentForMovie(commentData)
    toast({
      title: 'Відгук додано',
      description: 'Ваш відгук успішно додано.',
    })

    console.log(commentData)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="default"
          className="flex items-center gap-1 text-xs sm:text-sm lg:text-sm px-3"
        >
          <HiPlus color="text-gray-75" className=" text-base sm:text-xl" />
          <span>Додати свій відгук</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Додайте свій відгук</DialogTitle>
          <DialogDescription>
            Редагуйте свій відгук для цього фільму тут.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="">
            <div className="grid gap-4 py-4">
              <FormField
                control={form.control}
                name="rating"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <>
                        <FormLabel>Рейтинг</FormLabel>
                        <SelectRating
                          onValueChange={field.onChange}
                          value={field.value}
                        />
                      </>
                    </FormControl>
                    <FormDescription>Виберіть рейтинг для фільму.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="comment"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Ваш коментар</FormLabel>
                    <Textarea
                      onChange={field.onChange}
                      value={field.value}
                      className="col-span-3"
                    />
                    <FormDescription>
                      Напишіть свій відгук для фільму тут.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <DialogFooter>
              <Button type="submit" variant="secondary">
                Надіслати відгук
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
