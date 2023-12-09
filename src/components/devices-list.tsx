"use client"
import { Devices } from '@/config/devices'
import DeviceCard from './device-card'

export default function DevicesList() {
  return (
    <div className=' flex justify-center flex-wrap gap-5'>
      {Devices.map(device => (
        <DeviceCard key={device.id} {...device} />
      ))}
    </div>
  )
}
