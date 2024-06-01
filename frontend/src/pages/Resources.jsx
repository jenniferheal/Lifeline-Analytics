import getCountryISO2 from 'country-iso-3-to-2'
import { useEffect, useState } from 'react'
import { countriesForResources } from '../../mocks/countries'
import Select from 'react-select'

export default function Resources() {
  const [resources, setResources] = useState([])
  const [countryChoice, setCountryChoice] = useState('ALL')

  useEffect(() => {
    if (countryChoice === 'ALL') {
      fetch('/api/resources')
        .then((res) => res.json())
        .then((data) => setResources(data))
    } else {
      fetch(`/api/resources/${countryChoice}`)
        .then((res) => res.json())
        .then((data) => setResources(data))
    }
  }, [countryChoice])

  const resource = (
    resources.length !== 0
      ? resources.map((resource) => {
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
                  href={resource.link} target='_blank' className='bg-[#204B57] font-title text-[#F1F1E6] text-md  py-2 px-2
    rounded shadow-md hover:bg-[#d1792d] duration-500 ' rel='noreferrer'
                >View Help
                </a>
              </div>
            </div>
          </div>
        )
      })
      : <h1 className='text-center'>There are no resources available for this country</h1>
  )

  const handleSelectChange = (selectedOption) => {
    setCountryChoice(selectedOption.value)
  }

  const selectedCountry = countriesForResources.find(country => country.value === countryChoice)

  const selectCountry = (
    <Select
      options={countriesForResources}
      name='countryCode'
      value={selectedCountry}
      onChange={handleSelectChange}
      className='w-[10rem] md:w-1/3 '
    />
  )

  return (
    <>
      <h1 className='font-title text-center text-6xl my-8'>Resources</h1>
      <div className='flex flex-col items-end w-[80%] mx-auto'>
        <p className='text-xl text-slate-600 mb-3 '>Filter by Country</p>
        {selectCountry}
      </div>
      <main className='bg-[#A9D4E2] py-4 w-[95%] md:w-[80%] mx-auto rounded-md my-6 mb-[8rem]'>
        {resource}
      </main>
    </>
  )
}
