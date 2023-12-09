'use client'
import Phone from '@/../public/icons/Phone.svg'
import Tablet from '@/../public/icons/Tablet.svg'
import Laptop from '@/../public/icons/Laptop.svg'
import Desktop from '@/../public/icons/Desktop.svg'
import GameСonsole from '@/../public/icons/Gameconsole.svg'
import VRHeadsets from '@/../public/icons/Vrheadsets.svg'

export const Devices = [
  {
    id: 1,
    title: 'Smartphones',
    description: `StreamVibe is optimized for both Android and iOS smartphones.
     Download our app from the Google Play Store or the Apple App Store`,
    Icon: Phone,
  },
  {
    id: 2,
    title: 'Tablets',
    description: `StreamVibe is optimized for both Android and iOS smartphones.
   Download our app from the Google Play Store or the Apple App Store`,
    Icon: Tablet,
  },
  {
    id: 3,
    title: 'Laptops',
    description: `StreamVibe is optimized for both Android and iOS smartphones.
   Download our app from the Google Play Store or the Apple App Store`,
    Icon: Laptop,
  },
  {
    id: 4,
    title: 'Desktops',
    description: `StreamVibe is optimized for both Android and iOS smartphones.
   Download our app from the Google Play Store or the Apple App Store`,
    Icon: Desktop,
  },
  {
    id: 5,
    title: 'Game Сonsoles',
    description: `StreamVibe is optimized for both Android and iOS smartphones.
   Download our app from the Google Play Store or the Apple App Store`,
    Icon: GameСonsole,
  },
  {
    id: 6,
    title: 'VR Headsets',
    description: `StreamVibe is optimized for both Android and iOS smartphones.
   Download our app from the Google Play Store or the Apple App Store`,
    Icon: VRHeadsets,
  },
] as const
