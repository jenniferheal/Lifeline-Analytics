import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Forms({ route, method }) {
  const [userInfo, setUserInfo] = useState({
    username: '',
    password: '',
    country: ''
  })
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const name = (method === 'login' ? 'Login' : 'Register')

  const handleSubmit = async (e) => {
    setLoading(true)
    e.preventDefault()

    const { username, password } = userInfo
  }

  const haveAccount = (
    <div className='flex flex-col gap-1 items-center w-full mx-auto text-gray-500'>
      {method === 'login'
        ? <p>Don't have an account?</p>
        : <p>Already have an account?</p>}
      <a
        href={`/${method === 'login' ? 'register' : 'login'}`}
        className='w-1/3 bg-gray-300 text-center mx-auto font-bold
      text-[#204B57] font-[Poppins] py-2 px-6
      rounded hover:bg-gray-500 hover:text-white duration-500 '
      >{method === 'login' ? 'Sign Up' : 'Login'}
      </a>
    </div>
  )

  const inputClass = 'rounded-md h-[2rem] px-2 w-4/5 mx-auto'
  const loginDivSize = method === 'login' ? 'h-[23.5rem]' : 'h-[27rem]'

  const registerCountryInput = (
    <input
      type='text'
      value={userInfo.country}
      onChange={(e) => setUserInfo(e.target.value)}
      placeholder='Enter your country'
      className={inputClass}
    />

  )

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
          value={userInfo.username}
          onChange={(e) => setUserInfo(e.target.value)}
          placeholder='Username'
          className={inputClass}
        />
        <input
          type='password'
          value={userInfo.password}
          onChange={(e) => setUserInfo(e.target.value)}
          placeholder='Password'
          className={inputClass}
        />

        {method === 'register' && registerCountryInput}

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
