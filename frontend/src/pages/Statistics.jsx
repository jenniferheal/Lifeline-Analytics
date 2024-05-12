import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import LineGraph from '@/components/LineGraph'
import BarGraph from '@/components/BarGraph'
import PieChart from '@/components/PieChart'
import { useState, useEffect } from 'react'
import Select from 'react-select'
import { countriesForResources } from '../../mocks/countries'
import { ageStage, years, gender } from '../../mocks/graphFilters'

export default function Statistics() {
  const [suicidesData, setSuicidesData] = useState(null)
  const [userQueries, setUserQueries] = useState({
    id_stage: '',
    year_start: '2000',
    year_end: '2021',
    gender: '',
    id_country: ''
  })

  useEffect(() => {
    const queryParams = new URLSearchParams(userQueries).toString()
    fetch(`/api/suicides-data?${queryParams}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((data) => setSuicidesData(data))
  }, [userQueries])

  const handleSelectChange = (selectedOption, action) => {
    setUserQueries(prev => ({
      ...prev,
      [action.name]: selectedOption.value
    }))
  }

  // const selectedCountry = countriesForResources.find(country => country.value === userQueries.id_country)

  if (suicidesData === null) return null

  return (
    <>
      <Navbar />
      <h1 className='text-center text-6xl my-8'>Statistics</h1>
      <main className='mx-auto w-[95%] md:w-[85%] my-6 mb-[8rem] pt-6'>
        <div className='flex flex-wrap gap-4 md:gap-3 justify-evenly md:justify-evenly w-[100%] mx-auto mb-8 md:my-8'>
          <Select
            options={countriesForResources}
            name='id_country'
            onChange={handleSelectChange}
            className='w-1/3 md:w-1/6'
            placeholder='Country...'
          />

          <Select
            options={ageStage}
            name='id_stage'
            onChange={handleSelectChange}
            className='w-1/3 md:w-1/6'
            placeholder='Age...'
          />

          <div className='flex gap-3 justify-evenly w-[95%] md:w-3/6'>
            <Select
              options={gender}
              name='gender'
              onChange={handleSelectChange}
              className='w-1/3 md:w-3/6'
              placeholder='Gender...'
            />

            <Select
              options={years}
              name='year_start'
              onChange={handleSelectChange}
              className='w-1/3 md:w-2/6'
              placeholder='Start...'
            />

            <Select
              options={years}
              name='year_end'
              onChange={handleSelectChange}
              className='w-1/3 md:w-2/6'
              placeholder='End...'
            />
          </div>

        </div>

        <LineGraph suicidesData={suicidesData} />

      </main>
      <Footer />
    </>
  )
}
