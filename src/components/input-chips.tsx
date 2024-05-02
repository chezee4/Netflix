import React, { useState, useRef } from 'react'

import { Badge } from 'src/components/ui/badge'
import { Input } from 'src/components/ui/input'

type InputChipsProps = {
  chips: string[]
  setChips: (chips: string[]) => void
}

export default function InputChips({ chips, setChips }: InputChipsProps) {
  const [inputValue, setInputValue] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const maxlength = 10

  const handleClick = () => {
    if (inputRef.current) inputRef.current.focus()
  }

  const handlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    if (value.length <= maxlength) setInputValue(value)
  }

  const push = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      updateChips(inputValue)
    }
  }

  const updateChips = (value: string) => {
    const chipValue = value.trim().toLowerCase()
    if (chipValue && !chips.find(chip => chipValue === chip)) {
      setChips([...chips, chipValue])
    }
    setInputValue('')
  }

  return (
    <div
      className=" min-h-[36px] mt-5 pl-3 rounded-xl bg-transparent cursor-pointer"
      onClick={handleClick}
    >
      {chips.map(chip => (
        <Badge key={chip}>chip</Badge>
      ))}
      {chips.length <= 10 ? (
        <Input
          ref={inputRef}
          placeholder="Type chips"
          value={inputValue}
          onChange={handlChange}
          onKeyDown={push}
        />
      ) : null}
    </div>
  )
}
