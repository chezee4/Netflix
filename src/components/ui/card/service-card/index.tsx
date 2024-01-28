import { Button } from '../../button'

import type { ServiceCardProps } from './types'

export default function ServiceCard({
  title,
  description,
  price,
}: ServiceCardProps) {
  return (
    <div className=" relative cursor-pointer w-full max-w-[500px] mx-auto xl:max-w-none bg-black-10 border-black-15 border rounded-xl p-[3rem_3.5rem_3rem_2.5rem]">
      <h3 className="text-white text-2xl font-medium mb-4">{title}</h3>
      <p className=" text-gray-60 text-lg selection:bg-red-90 selection:text-black-8 line-clamp-3">
        {description}
      </p>
      <p className="text-white text-4xl font-medium my-10 inline-flex gap-1 items-baseline">
        <span>${price[0]}</span>
        <span className=" text-gray-60 text-sm xs:text-lg ">/month</span>
      </p>
      <div className="flex gap-4">
        <Button
          className=" text-sm font-normal whitespace-nowrap"
          variant="secondary"
        >
          Start Free Trial
        </Button>
        <Button className="text-sm font-normal flex-1 whitespace-nowrap">
          Choose Plan
        </Button>
      </div>
    </div>
  )
}
