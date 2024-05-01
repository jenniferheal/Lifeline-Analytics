import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function NotFound() {
  return (
    <>
      <Navbar />
      <div className='flex flex-col items-center justify-center mx-auto  h-[35rem] md:w-full w-4/5 '>
        <h1 className='md:text-8xl text-4xl text-[#F89236] font-bold '>404 Not Found</h1>
        <p className='mt-6 text-[#204B57] md:text-2xl text-lg text-wrap text-center font-semibold'>The page you are looking for does not exist!</p>
      </div>
      <Footer />
    </>
  )
}
