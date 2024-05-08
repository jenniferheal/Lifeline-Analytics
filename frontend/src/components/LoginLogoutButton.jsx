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

  const btnStyle = 'bg-[#F89236] text-black text-lg py-2 px-6 rounded md:ml-8 hover:bg-[#d1792d] duration-500'

  return (
    <>
      {!token
        ? <a
          href='/register'
          className={btnStyle}
        >
          Sign Up
        </a>

        : <button
          onClick={logoutAndRedirect}
          className={`flex gap-3 ${btnStyle}`}
        >Logout <img className='text-black h-6' src='/logout.svg' alt='' />
        </button>}

    </>
  )
}
