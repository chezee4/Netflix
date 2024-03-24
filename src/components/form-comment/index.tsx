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
import SelectRating from 'src/components/select-rating'
import { HiPlus } from 'react-icons/hi'

export function FormForAddComments() {
  const form = useForm<z.infer<typeof FormCommentSchema>>({
    resolver: zodResolver(FormCommentSchema),
  })
  const { toast } = useToast()

  const onSubmit = (data: z.infer<typeof FormCommentSchema>) => {
    const commentData = {
      id: Math.random().toString(36),
      name: 'Swaraj',
      country: 'India',
      ...data,
    }
    toast({
      title: 'Review Added',
      description: 'Your review has been added successfully.',
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
          <span>Add Your Review</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Edd your review</DialogTitle>
          <DialogDescription>Edit your review for this film here.</DialogDescription>
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
                        <FormLabel>Rating</FormLabel>
                        <SelectRating
                          onValueChange={field.onChange}
                          value={field.value}
                        />
                      </>
                    </FormControl>
                    <FormDescription>Select a rating for the movie.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="comment"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Comment</FormLabel>
                    <Textarea
                      onChange={field.onChange}
                      value={field.value}
                      className="col-span-3"
                    />
                    <FormDescription>
                      Write your review for the movie here.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <DialogFooter>
              <Button type="submit" variant="secondary">
                Send Review
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
