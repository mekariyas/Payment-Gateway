import React from 'react'
import Fast from '../assets/features/Fast-transactions.jpg'
import Customer from '../assets/features/Customer-Support.jpg'
import Secure from '../assets/features/Secure Transactions.jpg'
import Landing from '../assets/Landing-img2.png'

const Features = () => {
  const features = [
    {
      id: 0,
      image: Secure,
      title: 'Secure Transactions',
      text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque molestias saepe, voluptatem nostrum, tempora tenetur ipsa incidunt ratione magni,  dolore necessitatibus aut animi quia incidunt fuga.'
    },
    {
      id: 1,
      title: 'Fast Transactions',
      image: Fast,
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur a asperiores incidunt distinctio consequuntur totam, voluptates accusamus quidem est, at voluptatem excepturi repellendus quam natus quibusdam autem fuga quis.'
    },{
      id: 2,
      title: '24/7 Customer Support',
      image: Customer,
      text:  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam consequatur mollitia laboriosam at odit doloribus vel eos reprehenderit modi deleniti, officia placeat nulla dolores omnis, aut vitae nostrum obcaecati. Nam.'
    }
  ]
  return (
    <>
      <article className='w-full h-full flex flex-col justify-around  space-y-14 items-center pt-28 pb-7'>
        <h2 className='w-full mt-4 text-center text-4xl font-bold'>Features</h2>
          {features.map((feature)=>{
        return(
          <>
                <section key={feature.id} className="w-4/5 h-3/5 flex flex-col justify-around space-y-4 border-[1px] mb-4 border-slate-500 rounded-lg shadow-2xl shadow-slate-800 md:border-none md:flex-row hover:bg-slate-900 transition ease-in-out duration-1000 delay-75 hover:text-white">
                      <div className="w-full h-1/4 flex justify-center items-center">
                        <img 
                        src={feature.image} 
                        alt={feature.title}
                        className="w-4/5 h-3/5 mt-3 object-cover rounded-lg md:h-2/5 md:mb-6"
                        />
                      </div>
                      <div className="flex flex-col justify-around md:justify-stretch md:space-y-6">
                        <h3 className="text-base mb-3 font-medium md:text-xl w-full text-center underline">{feature.title}</h3>
                        <div w="w-full h-1/4 flex justify-center items-center">
                          <p className="text-left ml-10  w-10/12 mb-3">{ feature.text}</p>
                        </div>
                      </div>  
                </section>
          </>
              )
      })}
      </article>
    </>
  )
}

export default Features
