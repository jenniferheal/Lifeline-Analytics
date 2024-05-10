import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react'

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([])

  useEffect(() => {
    fetch('/api/testimonials')
      .then((res) => res.json())
      .then((data) => {
        setTestimonials(data)
      })
      .catch((error) => {
        console.error('Error fetching testimonials:', error)
      })
  }, [])

  return (
    <>
      <Navbar />
      <h1 className='text-center text-6xl my-8'>Testimonials</h1>
      <main className='mb-[8rem]'>
        {testimonials.length !== 0
          ? testimonials.map((testimonial) => {
            const date = new Date(testimonial.date)
            const formattedDate = `${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}-${date.getFullYear()}`
            return (
              <article key={testimonial.id} className='w-[85%] md:w-[70%] mx-auto mb-6 bg-[#A9D4E2] p-6 rounded-md shadow-md'>
                <div className='flex justify-between'>
                  <h2 className='text-xl font-bold mb-2'>Anonymus</h2>
                  <span className='text-slate-600'>{formattedDate}</span>
                </div>
                <p className='text-lg text-justify'>{testimonial.testimonial}</p>
              </article>
            )
          })
          : (<article className='w-[85%] md:w-[70%] mx-auto mb-6 bg-[#A9D4E2] p-6 rounded-md shadow-md'>
            <h1 className='text-xl text-center'>There are no testimonials available</h1>
          </article>)}
      </main>
      <Footer />
    </>
  )
}
