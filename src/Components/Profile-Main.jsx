import React from 'react'

const ProfileMain = () => {
  return (
    <section>
        <div className="w-full h-32 flex justify-around items-center space-x-6">
            <img src="./profile-picture.png" alt="profile-picture" className="w-20 ml-3 h-20"/>
            <div>
                <p>John Doe</p>
                <i>@Johnblahblah</i>
            </div>
        </div>
        <RecentTransactions/>
    </section>
  )
}

function RecentTransactions(){
  return(
    <section>
        <h3 className="w-full text-center text-lg font-bold md:text-3xl">Recent Transactions</h3>
        <div></div>
    </section>
  )
}


export default ProfileMain
