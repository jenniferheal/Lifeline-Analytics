import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <h1 className='text-6xl text-center my-8'>Lifeline Analytics</h1>
      <div className='w-full h-[50vh] mx-auto '>
        <img id='home-photo' className='h-full w-[100%] object-cover  mx-auto' src='/home-photo2.jpg' alt='homepage photo' />
      </div>
      <blockquote className='md:w-2/4 w-2/3 text-2xl text-pretty text-justify mx-auto my-6 pb-[5rem]'>
        Suicide prevention starts with understanding, empathy, and action.
        Together, let's break the silence, offer support, and save lives.
        Every voice matters in the fight against suicide.
      </blockquote>
      <Footer />
    </>
  )
}
