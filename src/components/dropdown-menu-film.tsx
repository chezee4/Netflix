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
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" className="h-9 w-9 p-0 ">
          <span className="sr-only">Відкрити меню</span>
          <MoreHorizontal className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel className="mb-2">Дії</DropdownMenuLabel>
        <DropdownMenuItem onClick={() => navigator.clipboard.writeText(film.title)}>
          Копіювати назву фільму
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleDeleteCar(film.title)}>
          Видалити фільм
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
