import React from 'react'



const Home = () => {
  
  return (
    <>
       <main className="w-full mt-8">
        <section className="w-full flex flex-col justify-around md:flex-row items-center md:justify-between">
          <div className="w-5/6 md:w-1/3 md:ml-5">
              <h1 className="w-full mb-6 font-bold text-center text-lg md:text-4xl">Payment Gateway</h1>
              <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque molestiae dolor minus ducimus, doloribus temporibus, numquam, voluptatem nemo reprehenderit error quo ipsum. Pariatur reprehenderit temporibus minus ab quae sapiente molestiae?
            </p>
          </div>
          <div className='w-5/6 md:w-1/3 md:ml-5'>
            <img src="./Landing.jpg" alt="Landing" />
          </div>
        </section>
       </main>
    </>
  )
}

export default Home
