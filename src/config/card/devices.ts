'use client'
import Phone from 'src/../public/icons/Phone.svg'
import Tablet from 'src/../public/icons/Tablet.svg'
import SmartTV from 'src/../public/icons/SmartTV.svg'
import Laptop from 'src/../public/icons/Laptop.svg'
import GameСonsole from 'src/../public/icons/Gameconsole.svg'
import VRHeadsets from 'src/../public/icons/Vrheadsets.svg'

export const Devices = [
  {
    id: 1,
    title: 'Смартфони',
    description: `StreamVibe оптимізовано для смартфонів Android та iOS.
     Завантажте наш додаток з Google Play Store або Apple App Store`,
    Icon: Phone,
  },
  {
    id: 2,
    title: 'Планшети',
    description: `StreamVibe оптимізовано для смартфонів Android та iOS.
   Завантажте наш додаток з Google Play Store або Apple App Store`,
    Icon: Tablet,
  },
  {
    id: 3,
    title: 'Smart TV',
    description: `StreamVibe оптимізовано для смартфонів Android та iOS.
   Завантажте наш додаток з Google Play Store або Apple App Store`,
    Icon: SmartTV,
  },
  {
    id: 4,
    title: 'Ноутбуки',
    description: `StreamVibe оптимізовано для смартфонів Android та iOS.
   Завантажте наш додаток з Google Play Store або Apple App Store`,
    Icon: Laptop,
  },
  {
    id: 5,
    title: 'Ігрові консолі',
    description: `StreamVibe оптимізовано для смартфонів Android та iOS.
   Завантажте наш додаток з Google Play Store або Apple App Store`,
    Icon: GameСonsole,
  },
  {
    id: 6,
    title: 'VR-гарнітури',
    description: `StreamVibe оптимізовано для смартфонів Android та iOS.
   Завантажте наш додаток з Google Play Store або Apple App Store`,
    Icon: VRHeadsets,
  },
] as const
