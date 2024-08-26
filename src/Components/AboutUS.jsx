import React from 'react'
import Mission from '../assets/about-us/Mission.png'
import OurTeam from '../assets/about-us/ourTeam.jpg'
import Services from '../assets/about-us/services.jpg'
import Vision from '../assets/about-us/vision.png'
import WhoWeAre from '../assets/about-us/Who-we-are.jpg'
import Contact from '../assets/about-us/ContactUs.jpg'
import Socials from  '../assets/about-us/Social-tree.jpg'


const AboutUs = () => {
  const Infos = [
    {
      id: 1, 
      title:'Who we are',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque molestias saepe, voluptatem nostrum, tempora tenetur ipsa incidunt ratione magni,  dolore necessitatibus aut animi quia incidunt fuga.',
      image: WhoWeAre
    },
    {
      id: 2,
      title: 'Our Team',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque molestias saepe, voluptatem nostrum, tempora tenetur ipsa incidunt ratione magni,  dolore necessitatibus aut animi quia incidunt fuga.',
      image: OurTeam
    },
    {
      id: 3,
      title: 'Our Services',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque molestias saepe, voluptatem nostrum, tempora tenetur ipsa incidunt ratione magni,  dolore necessitatibus aut animi quia incidunt fuga.',
      image: Services
    },
    {
      id: 4,
      title: 'Our Mission',
      text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque molestias saepe, voluptatem nostrum, tempora tenetur ipsa incidunt ratione magni,  dolore necessitatibus aut animi quia incidunt fuga.',
      image: Mission
    },
    {
      id: 5,
      title: 'Our Vision',
      text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque molestias saepe, voluptatem nostrum, tempora tenetur ipsa incidunt ratione magni,  dolore necessitatibus aut animi quia incidunt fuga.',
      image: Vision
    }
  ]
  return (
    <article className='w-full h-full flex flex-col justify-around  space-y-14 items-center pt-28 pb-7'>
    <h2 className='w-full mt-4 text-center text-4xl font-bold'>About Us</h2>
      {Infos.map((Info)=>{
    return(
          <>
            <section key={Info.id} className="w-4/5 h-3/5 flex flex-col justify-around space-y-4 border-[1px] mb-4 border-slate-500 rounded-lg shadow-2xl shadow-slate-800 md:border-none md:flex-row hover:bg-slate-900 transition ease-in-out duration-1000 delay-75 hover:text-white">
                  <div className="w-full h-1/4 flex justify-center items-center">
                    <img 
                    src={Info.image} 
                    alt={Info.title}
                    className="w-4/5 h-3/5 mt-3 object-cover rounded-lg md:h-2/5 md:mb-6"
                    />
                  </div>
                  <div className="flex flex-col justify-around md:justify-stretch md:space-y-6">
                    <h3 className="text-base mb-3 font-medium md:text-xl w-full text-center underline">{Info.title}</h3>
                    <div w="w-full h-1/4 flex justify-center items-center">
                      <p className="text-left ml-10  w-10/12 mb-3">{ Info.text}</p>
                    </div>
                  </div>  
            </section>
            
          </>
          )
  })}
  <section  key={Infos.length + 1}className="w-4/5 h-3/5 flex flex-col justify-around space-y-4 border-[1px] mb-4 border-slate-500 rounded-lg shadow-2xl shadow-slate-800 md:border-none md:flex-row hover:bg-slate-900 transition ease-in-out duration-1000 delay-75 hover:text-white">
  <div className="w-full h-1/4 flex justify-center items-center md:w-1/2 md:justify-start">
    <img src={Socials} alt="Socials" className="w-4/5 h-3/5 mt-6 mr-4 object-cover rounded-lg md:h-2/5 md:mb-6"/>
  </div>
  <div className="flex flex-col justify-around md:justify-evenly md:space-y-4">
    <h3 className="text-base mb-3 font-medium md:text-xl w-full text-center underline">
      Our Socials
    </h3>
    <ul className="w-full h-1/4 pl-8 flex flex-col justify-around space-y-2 items-start md:pl-0 mb-4">
      <li>Facebook</li>
      <li>Twitter/X</li>
      <li>LinkedIn</li>
      <li>Instagram</li>
      <li>Telegram</li>
      <li>WhatsApp</li>
    </ul>
  </div>
</section> 
              <section key={Infos.length+2} className="w-4/5 h-3/5 flex flex-col justify-around space-y-4 border-[1px] mb-4 border-slate-500 rounded-lg shadow-2xl shadow-slate-800 md:border-none md:flex-row hover:bg-slate-900 transition ease-in-out duration-1000 delay-75 hover:text-white">
                  <div className="w-full h-1/4 flex justify-center items-center md:w-1/2 md:justify-start">
                    <img src={Contact} alt="Contact-info" className="w-4/5 h-3/5 mt-3 object-cover rounded-lg md:h-2/5 md:mb-6"/>
                  </div>
                  <div className="flex flex-col justify-around md:justify-stretch md:space-y-6">
                    <h3 className="text-base mb-3 font-medium md:text-xl w-full text-center underline">
                      Contact Us
                    </h3>
                    <ul className="w-full h-1/4 pl-8 flex flex-col justify-around items-start md:pl-0 mb-4">
                      <li className="text-left"><i>www.E-genzeb@blahblah.com</i></li>
                      <li>Tel:- 992-334-5672</li>
                      <li><i>Main Office:- 1234st,Addis Ababa,Ethiopia</i></li>
                    </ul>
                  </div>
                </section>  

               
  </article>
  )
}

export default AboutUs