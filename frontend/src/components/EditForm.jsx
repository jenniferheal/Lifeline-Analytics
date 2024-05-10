import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Select from 'react-select'
import { countries } from '../../mocks/countries'
import { updateUserData } from '../services/api'

export default function EditForm({ route, method }) {
  const [userInfo, setUserInfo] = useState({
    username: '',
    email: '',
    password: '',
    countryCode: ''
  })

  useEffect(() => {
    fetch('/api/user-info')
      .then((res) => res.json())
      .then((data) => setUserInfo(data))
  }, [])

  const formRoute = route

  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const name = 'Edit Profile'

  const handleSubmit = async (e) => {
    setLoading(true)
    e.preventDefault()

    const response = await updateUserData(userInfo)

    if (response.ok) {
      const data = await response.json()
      navigate('/')
    } else {
      const errorData = await response.json() // Obtiene el cuerpo de la respuesta como JSON
      console.error('Error:', response.status, response.statusText, errorData.error)
      // Aquí puedes manejar los errores
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setUserInfo({ ...userInfo, [name]: value })
  }

  const handleSelectChange = (selectedOption) => {
    setUserInfo({ ...userInfo, id_country: selectedOption.value })
  }

  const defaultCountry = countries.find(country => country.value === userInfo.id_country)
  const selectedCountry = countries.find(country => country.value === userInfo.countryCode)

  const inputClass = 'rounded-md h-[2rem] px-2 w-4/5 mx-auto'
  const loginDivSize = 'h-[25rem]'

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={`flex flex-col gap-6 md:w-[50%] w-[80%] ${loginDivSize} md:mt-20 mt-10 mx-auto bg-[#96AFB8] 
         rounded-md `}
      >
        <div className='bg-[#334A52] h-[3rem] rounded-t-md'>
          <h1 className='text-4xl text-center text-white font-semibold'>{name}</h1>
        </div>
        <div />

        <input
          type='text'
          name='username'
          value={userInfo.username}
          onChange={handleInputChange}
          placeholder='Username'
          className={inputClass}
        />

        <input
          type='email'
          name='email'
          value={userInfo.email}
          onChange={handleInputChange}
          placeholder='Email'
          className={inputClass}
        />

        <input
          type='password'
          name='password'
          value={userInfo.password}
          onChange={handleInputChange}
          placeholder='Password'
          className={inputClass}
        />

        <Select
          options={countries}
          value={userInfo.countryCode === undefined ? defaultCountry : selectedCountry}
          name='countryCode'
          onChange={handleSelectChange}
          className='w-4/5 mx-auto'
        />

        <button
          type='submit' className='bg-[#A9D4E2] w-2/4 mt-2 mx-auto font-bold text-[#204B57] text-lg font-[Poppins] py-2 px-2
            rounded hover:bg-[#d1792d] duration-500 '
        >
          {name}
        </button>

      </form>

    </>

  )
}
