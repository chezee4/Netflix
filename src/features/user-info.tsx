'use client'
import ProfileAvatarWrapper from 'src/layouts/profile-avatar-wrapper'

import { useUserStore } from 'src/store/user-store'

export default function UserInfo() {
  const user = useUserStore(state => state.user)!

  return (
    <div className="w-full flex gap-14">
      <ProfileAvatarWrapper avatar={user.avatar} name={user.username} />
      <div className="flex flex-col flex-1 ">
        <h1 className="text-4xl font-semibold">{user.username}</h1>
        <span className=" text-xs text-slate-400 cursor-pointer">{user.email}</span>
        <p className="mt-10">{user.bio}</p>
      </div>
    </div>
  )
}
