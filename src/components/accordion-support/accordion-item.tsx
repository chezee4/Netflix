'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

import type { AccordionItemProps } from './types'
import { FaPlus, FaMinus } from 'react-icons/fa6'

export default function AccordionItem({
  id,
  title,
  description,
}: AccordionItemProps) {
  const [activeId, setActiveId] = useState<string | null>(null)

  const handleAccordionClick = (id: string) => {
    setActiveId(activeId === id ? null : id)
  }

  return (
    <div
      className="relative bg-transparent max-w-2xl text-white w-full cursor-pointer grid grid-cols-[80px,85%] items-end"
      onClick={() => handleAccordionClick(id)}
    >
      <span className=" w-min h-min self-start bg-black-12 border border-black-15 px-5 py-4 rounded-md text-lg xl:text-xl font-semibold">
        {id}
      </span>
      <div className=" inline-block w-full pr-10">
        <h3 className=" text-lg xl:text-xl font-medium mb-3">{title}</h3>
        <motion.p
          initial={{ height: 0, overflow: 'hidden' }}
          animate={{ height: activeId === id ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
          className=" text-base xl:text-lg text-gray-60/75"
        >
          {description}
        </motion.p>
      </div>
      <motion.div
        initial={{
          rotate: 0,
          right: 0,
          top: '50%',
          translateY: '-50%',
        }}
        animate={{
          rotate: activeId === id ? [180, 0] : [-180, 0],
          translateY: '-50%',
          top: activeId === id ? '10%' : '50%',
        }}
        transition={{ duration: 0.3 }}
        className="absolute flex justify-end items-center"
      >
        {activeId === id ? (
          <FaMinus className=" text-white text-2xl" />
        ) : (
          <FaPlus className=" text-white text-2xl" />
        )}
      </motion.div>
      <div className=" bg-gradient-linear w-full absolute h-[1px] -bottom-3 -left-10"></div>
    </div>
  )
}
