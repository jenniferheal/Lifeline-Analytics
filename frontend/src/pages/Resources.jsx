import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import getCountryISO2 from 'country-iso-3-to-2'
import { useEffect, useState } from 'react'

export default function Resources() {
  const [resources, setResources] = useState([])

  useEffect(() => {
    fetch('/api/v1/suicides')
      .then((res) => res.json())
      .then((data) => setResources(data))
  }, [])

  const resource = (
    resources.map((resource) => {
      const countryCode = getCountryISO2(resource.id_country)
      const flagLink = `https://countryflagsapi.netlify.app/flag/${countryCode}.svg`
      return (
        <div key={resource.id} className='container bg-white py-6 px-5 bg-opacity-40 my-10 flex flex-col md:flex-row items-center gap-8 mx-auto w-[90%] h-auto rounded-md shadow-md'>
          <img className='h-[6rem] md:h-[8rem] shadow-md' src={flagLink} />
          <div className=''>
            <div className='md:flex gap-3'>
              <h3 className='text-xl font-bold'>{resource.title}</h3>
              <span className='text-lg'> - </span>
              <span className='text-gray-500 text-lg'>{resource.country_name}</span>
            </div>
            <p className='my-3 text-justify'>{resource.description}</p>
            <div className='flex justify-end'>
              <a
                href={resource.link} target='_blank' className='bg-[#204B57] font-bold text-[#F1F1E6] text-md font-[Poppins] py-2 px-2
  rounded shadow-md hover:bg-[#d1792d] duration-500 ' rel='noreferrer'
              >View Help
              </a>
            </div>
          </div>
        </div>
      )
    })

  )

  return (
    <>
      <Navbar />
      <h1 className='text-center text-6xl my-8'>Resources</h1>

      <main className='bg-[#A9D4E2] py-4 w-[95%] md:w-[80%] mx-auto rounded-md my-6 mb-[8rem]'>
        {resource}
      </main>

      <Footer />
    </>
  )
}
