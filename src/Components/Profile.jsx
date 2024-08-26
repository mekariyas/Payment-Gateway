import React from 'react'
import ProfileMenu from './ProfileMenu'
import { useEffect } from 'react'
import ProfileMain from './Profile-Main'

const Profile = ({navbarVisibility}) => {
  useEffect(()=>{
    navbarVisibility()
  },[])
  return (
    <main className="w-full flex">
      <ProfileMenu/>
      <ProfileMain/>
    </main>
  )
}

export default Profile
