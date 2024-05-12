import { useNavigate } from 'react-router-dom'
import { handleLogout } from '../services/api'

export default function LoginLogoutButton({ token }) {
  const navigate = useNavigate()

  const logoutAndRedirect = () => {
    handleLogout()
      .then(() => {
        navigate('/login')
      })
      .catch((error) => {
        console.error('Logout failed:', error)
      })
  }

  const btnStyle = 'flex gap-3 font-title bg-[#F89236] text-black text-lg py-2 px-6 rounded md:ml-8 hover:bg-[#d1792d] duration-500'

  return (
    <>
      {!token
        ? <a
          href='/register'
          className={`w-[9.5rem] md:w-full ${btnStyle}`}
        >
          Sign Up <img className='text-black h-6' src='/login.svg' alt='login icon' />
        </a>

        : <button
          onClick={logoutAndRedirect}
          className={`${btnStyle}`}
        >Logout <img className='text-black h-6' src='/logout.svg' alt='logout icon' />
        </button>}

    </>
  )
}
