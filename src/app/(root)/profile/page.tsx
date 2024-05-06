import ProfileLayout from 'src/layouts/profile-layout'
import { ProfileTabsEnum } from 'src/types'
import { tabsData } from 'src/constants/profile'
// import { useUserStore } from 'src/store/user-store'

type ProfilePageProps = {
  searchParams: { [key: string]: string | string[] | undefined }
}
export default function ProfilePage({ searchParams }: ProfilePageProps) {
  // const user = useUserStore(state => state.user)

  const tab = (searchParams.tab as ProfileTabsEnum) || ProfileTabsEnum.Profile

  const content = tabsData[tab].content

  return <ProfileLayout>{content}</ProfileLayout>
}
