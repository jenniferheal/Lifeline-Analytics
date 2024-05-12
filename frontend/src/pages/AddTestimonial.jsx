import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { postTestimonial } from '../services/api'

export default function AddTestimonial() {
  const [testimonial, setTestimonial] = useState({ testimonial: '' })
  const navigate = useNavigate()

  const handleTestimonialChange = (event) => {
    setTestimonial({ testimonial: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const response = await postTestimonial(testimonial)
    if (response.ok) {
      const data = await response.json()
      navigate('/testimonials')
    } else {
      const errorData = await response.json()
      console.error('Error:', response.status, response.statusText, errorData.error)
    }
  }
  return (
    <>
      <Navbar />
      <form
        onSubmit={handleSubmit}
        className='flex flex-col gap-6 md:w-[75%] w-[90%] h-[30rem] md:mt-20 mt-10 mx-auto bg-[#96AFB8] rounded-md mb-[8rem]'
      >
        <div className='bg-[#334A52] h-[3rem] rounded-t-md'>
          <h1 className='text-4xl text-center text-white font-semibold'>Add Testimonial</h1>
        </div>
        <div />

        <textarea
          name='testimonial' rows={10} id=''
          placeholder='Write your testimonial here...'
          className='w-[80%] font-body mx-auto rounded-md p-4'
          value={testimonial.testimonial}
          onChange={handleTestimonialChange}
        />

        <button
          type='submit' className='bg-[#A9D4E2] w-2/4 mt-2 mx-auto font-bold text-[#204B57] text-lg  py-2 px-2
            rounded hover:bg-[#d1792d] duration-500 '
        >
          Save
        </button>

      </form>
      <Footer />
    </>
  )
}
