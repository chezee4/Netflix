import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from 'src/components/ui/select'

import { ratings } from 'src/config/film/rating/rating'

type SelectRatingProps = {
  onValueChange: (value: string) => void
  value: string
}

export default function SelectRating({ onValueChange, value }: SelectRatingProps) {
  return (
    <Select onValueChange={onValueChange} value={value}>
      <SelectTrigger>
        <SelectValue placeholder="Виберіть рейтинг" />
      </SelectTrigger>
      <SelectContent>
        {ratings.map(rating => (
          <SelectItem key={rating.id} value={rating.id}>
            {rating.text}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
