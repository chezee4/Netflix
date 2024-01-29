import Link from 'next/link'

import { messages } from '@/config/messages'
import { footerLinks } from '@/config/footer-navigation'

export default function Footer() {
  return (
    <footer className="bg-black-6 w-full ">
      <div className="max-w-[1640px] px-3 md:px-8 m-auto w-full">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-12 justify-center w-full lg:mr-4 py-24">
          {footerLinks.map(colLinks => (
            <div key={colLinks.id} className="mx-auto md:mx-0 lg:mx-auto">
              <h4 className="text-white text-xl font-semibold mb-5">
                {colLinks.title}
              </h4>
              <ul className="flex flex-col gap-y-2">
                {colLinks.links.map(link => (
                  <li key={link.id}>
                    <Link
                      href={link.path}
                      className=" text-gray-60 text-lg font-medium hover:text-gray-90/90 transition-all duration-200 ease-linear"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className='mx-auto md:mx-0 lg:mx-auto'>
            <h4 className="text-white text-xl font-semibold mb-5">
              Connect With Us
            </h4>
            <ul className="flex flex-row gap-x-1.5 sm:gap-x-4">
              {messages.map(message => (
                <li
                  key={message.id}
                  className=" cursor-pointer p-2.5 rounded-lg border-black-15 border bg-black-10 hover:bg-black-15 transition-all duration-200 ease-linear"
                >
                  <Link href={message.href}>
                    <message.Icon size={20} color="white" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
