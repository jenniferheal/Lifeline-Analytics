import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Select from 'react-select'
import { countries } from '../../mocks/countries'
import { postLoginSignupData } from '../services/api'

export default function Forms({ route, method }) {
  const [userInfo, setUserInfo] = useState({
    username: '',
    email: '',
    password: '',
    countryCode: ''
  })

  const formRoute = route

  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const name = (route === 'login' ? 'Login' : 'Register')

  const handleSubmit = async (e) => {
    setLoading(true)
    e.preventDefault()

    const response = await postLoginSignupData(formRoute, userInfo)

    if (response.ok) {
      const data = await response.json()
      localStorage.setItem('jwtToken', data.token)
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
    setUserInfo({ ...userInfo, countryCode: selectedOption.value })
  }

  const selectedCountry = countries.find(country => country.value === userInfo.countryCode)

  const haveAccount = (
    <div className='flex flex-col gap-1 items-center w-full mb-5 mx-auto text-gray-500'>
      {route === 'login'
        ? <p>Don't have an account?</p>
        : <p>Already have an account?</p>}
      <a
        href={`/${route === 'login' ? 'register' : 'login'}`}
        className='w-1/3 bg-gray-300 text-center mx-auto font-bold
      text-[#204B57] font-[Poppins] py-2 px-6
      rounded hover:bg-gray-500 hover:text-white duration-500 '
      >{route === 'login' ? 'Sign Up' : 'Login'}
      </a>
    </div>
  )

  const inputClass = 'rounded-md h-[2rem] px-2 w-4/5 mx-auto'
  const loginDivSize = route === 'login' ? 'h-[25rem]' : 'h-[29rem]'

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

        {route === 'signup' &&
          <Select
            options={countries}
            name='countryCode'
            value={selectedCountry}
            onChange={handleSelectChange}
            className='w-4/5 mx-auto'
          />}

        <button
          type='submit' className='bg-[#A9D4E2] w-1/3 mt-2 mx-auto font-bold text-[#204B57] text-lg font-[Poppins] py-2 px-2
            rounded hover:bg-[#d1792d] duration-500 '
        >
          {name}
        </button>

        {haveAccount}

      </form>

    </>

  )
}
