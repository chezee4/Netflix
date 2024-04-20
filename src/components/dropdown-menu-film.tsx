'use client'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
} from 'src/components/ui/dropdown-menu'
import { Button } from 'src/components/ui/button'
import { MoreHorizontal } from 'lucide-react'
import { Film } from 'src/types'

type DropdownMenuFilmProps = {
  film: Film
}

export const DropdownMenuFilm = ({ film }: DropdownMenuFilmProps) => {
  const handleDeleteCar = (title: string) => {
    // there will be a function to delete the film
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild > 
        <Button variant="secondary" className="h-9 w-9 p-0 ">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel className="mb-2">Actions</DropdownMenuLabel>
        <DropdownMenuItem onClick={() => navigator.clipboard.writeText(film.title)}>
          Copy title film
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleDeleteCar(film.title)}>
          Delete Film
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
