import { ProfileTabsEnum, ProfileTabsData } from 'src/types'

import ProfilEditForm from 'src/features/form/profil-edit-form'
import UserInfo from 'src/features/user-info'

import { CircleUserRound, UserRoundCog, Clapperboard } from 'lucide-react'
import UserFavoritesMovies from 'src/features/user-favorites-movies'

export const tabsData: ProfileTabsData = {
  [ProfileTabsEnum.Profile]: {
    title: 'Профіль',
    content: <UserInfo />,
    icon: <CircleUserRound />,
  },
  [ProfileTabsEnum.Favorites]: {
    title: 'Улюблені фільми',
    content: <UserFavoritesMovies />,
    icon: <Clapperboard />,
  },
  [ProfileTabsEnum.EditProfile]: {
    title: 'Редагування профілю',
    content: <ProfilEditForm />,
    icon: <UserRoundCog />,
  },
}
