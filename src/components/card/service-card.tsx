import { Button } from 'src/components/ui/button'
import { ContentWrapper } from 'src/layouts/content-wrapper'

type ServiceCardProps = {
  id: number
  title: string
  description: string
  price: number[]
}

export default function ServiceCard({
  title,
  description,
  price,
}: ServiceCardProps) {
  return (
    <ContentWrapper
      variant="card"
      className="relative cursor-pointer max-w-[500px] bg-black-10"
    >
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
    </ContentWrapper>
  )
}
