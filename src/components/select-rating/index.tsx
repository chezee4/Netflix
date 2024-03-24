import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from 'src/components/ui/select'

import { ratings } from 'src/config/rating'
import type { SelectRatingProps } from './types'

export default function SelectRating({ onValueChange, value }: SelectRatingProps) {
  return (
    <Select onValueChange={onValueChange} value={value}>
      <SelectTrigger>
        <SelectValue placeholder="Select a rating" />
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
