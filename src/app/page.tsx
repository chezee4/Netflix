import DevicesList from "@/components/devices-list";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full max-w-[1600px] m-auto">
     <DevicesList/>
    </main>
  )
}
