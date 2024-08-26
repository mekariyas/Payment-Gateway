import React from 'react'

const ProfileMenu = () => {
  return (
    <aside className="flex flex-col justify-start w-[12%] h-[90.75vh] bg-slate-300 md:w-[20%]">
        <ul className="w-full h-3/4 flex flex-col justify-around items-start">
          <li className="w-full h-14 flex justify-Start items-center">
            <img src="./house.png" alt="home" className="w-7 h-7 object-fit-center ml-3 mr-4"/>
            <span className="hidden md:inline text-lg">Home</span>
          </li>
          <li className="w-full h-14 flex justify-Start items-center">
            <img src="./Search.png" alt="search" className="w-7 h-7 object-fit-center ml-3 mr-4"/>
            <span className="hidden md:inline text-lg">Search</span>
          </li>
          <li className="w-full h-14 flex justify-Start items-center">
            <img src="./money-transfer.png" alt="money-transfer" className="w-7 h-7 object-fit-center ml-3 mr-4"/>
            <span className="hidden md:inline text-lg">Transactions</span>
          </li>
          <li className="w-full h-14 flex justify-Start items-center">
            <img src="./setting.png" alt="settings" className="w-7 h-7 object-fit-center ml-3 mr-4"/>
            <span className="hidden md:inline text-lg">Setting</span>
          </li>
          <li className="w-full h-14 flex justify-Start items-center">
            <img src="./logout.png" alt="logout" className="w-7 h-7 object-fit-center ml-3 mr-4"/>
            <span className="hidden md:inline text-lg">Logout</span>
          </li>
        </ul>
      </aside>
  )
}

export default ProfileMenu
