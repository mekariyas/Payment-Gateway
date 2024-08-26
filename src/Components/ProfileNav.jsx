import React from 'react'
import {NavLink} from 'react-router-dom'

const ProfileNav = () => {
  return (
    <div className="w-1/3 h-full flex justify-end items-center">
      <ul className="w-2/3 h-3/6  flex justify-between items-center">
        <li><img src="./bell.png" alt="notification-png" className="w-[30%] h-[25%]  rounded-md object-fit-cover md:w-[20%] md:h-[15%]"/></li>
        <li><img src="./profile-picture.png" alt="profile-img" className="w-[30%] h-[25%] rounded-md object-fit-cover md:w-[20%] md:h-[15%]"/></li>
      </ul>
    </div>
  )
}

export default ProfileNav
