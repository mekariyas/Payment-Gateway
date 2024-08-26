import HomeNav from "./HomeNav"
import ProfileNav from "./ProfileNav"

const NavBar = ({isVisible}) => {
  return (
    <>
    <header style={{
      position: isVisible?'static':'relative'
    }} className="h-14 w-full bg-gradient-to-tr from-slate-950 to-slate-600  flex-col fixed top-0 z-[1] justify-around md:h-16 ">
      <nav className="w-full h-12 flex justify-between items-center">
        <div className="ml-2 h-1/2">
          <div className="text-base text-white md:text-lg">
            <span className="text-blue-700 ">E</span>-Genzeb
          </div>
        </div>
        {isVisible? <HomeNav/>: <ProfileNav/>}
      </nav>
    </header>
    </>
  )
}






export default NavBar
