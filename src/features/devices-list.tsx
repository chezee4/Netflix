'use client'
import DeviceCard from 'src/components/card/device-card'
import { Devices } from 'src/config/card/devices'

export default function DevicesList() {
  return (
    <div className="w-full grid md:grid-cols-2 xl:grid-cols-3 gap-5">
      {Devices.map(device => (
        <DeviceCard key={device.id} {...device} />
      ))}
    </div>
  )
}
