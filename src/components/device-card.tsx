import Image from 'next/image'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import { MouseEvent } from 'react'
type DeviceCardProps = {
  title: string
  description: string
  Icon: any
}

export default function DeviceCard({ title, description, Icon }: DeviceCardProps) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const handleMouseMove = ({ currentTarget, clientX, clientY }: MouseEvent) => {
    const { left, top } = currentTarget.getBoundingClientRect()
   
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }
  return (
    <div
      className=" relative cursor-pointer group max-w-[512px] w-full bg-device-card border-black-15 border rounded-xl p-10 "
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none  absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
        radial-gradient(
          300px circle at ${mouseX}px ${mouseY}px,
          rgba(229, 0, 0, 0.3),
          transparent 120%
        )
      `,
        }}
      ></motion.div>
      <div className="flex items-center gap-5 mb-5">
        <div className=" select-none  flex items-center justify-center rounded-xl border-black-8 bg-black-12 p-3 ">
          <Image src={Icon} alt={title} width={20} className="w-8 h-8" />
        </div>
        <h3 className="text-white text-2xl font-medium">{title}</h3>
      </div>
      <p className=" text-gray-60 text-lg selection:bg-red-90 selection:text-black-8">{description}</p>
    </div>
  )
}
