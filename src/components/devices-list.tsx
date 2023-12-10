"use client"
import { Devices } from '@/config/devices'
import DeviceCard from './device-card'

export default function DevicesList() {
  return (
    <div className='w-full grid md:grid-cols-2 xl:grid-cols-3 gap-5'>
      {Devices.map(device => (
        <DeviceCard key={device.id} {...device} />
      ))}
    </div>
  )
}
