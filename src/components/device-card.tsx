import Image from 'next/image'

type DeviceCardProps = {
  id: number
  title: string
  description: string
  Icon: any
}

export default function DeviceCard({
  id,
  title,
  description,
  Icon,
}: DeviceCardProps) {
  return (
    <div className=" max-w-[512px] w-full bg-device-card border-black-15 border rounded-xl p-10 ">
      <div className='flex items-center gap-5 mb-5'>
        <div className="flex items-center justify-center rounded-xl border-black-8 bg-black-12 p-3 ">
          <Image src={Icon} alt={title} width={20} className="w-8 h-8" />
        </div>
        <h3 className="text-white text-2xl font-medium">{title}</h3>
      </div>
      <p className=" text-gray-60 text-lg">{description}</p>
    </div>
  )
}
