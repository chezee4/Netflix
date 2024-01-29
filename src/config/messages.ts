import { GrInstagram } from 'react-icons/gr'
import { FaTwitter } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'

export const messages = [
  {
    id: '1',
    href: 'https://t.me/chezee_0',
    Icon: FaTwitter,
    alt: 'Telegram',
  },
  {
    id: '2',
    href: 'https://www.instagram.com/vadum_hd/',
    Icon: GrInstagram,
    alt: 'Instagram',
  },
  {
    id: '3',
    href: 'https://www.linkedin.com/in/vadym-dufynets-6229ab27a/',
    Icon: FaLinkedin,
    alt: 'Linkedin',
  },
] as const
