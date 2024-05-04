import { useNavigate } from 'react-router-dom'
import { handleLogout } from '../services/api'

export default function LogoutButton() {
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

  return (
    <button
      onClick={logoutAndRedirect}
      className='flex justify-between items-center gap-3 bg-red-700 text-white font-[Poppins] py-2 px-6
                    rounded md:ml-8 hover:bg-[#d1792d] duration-500'
    >Logout <img className='text-white h-6' src='/logout.svg' alt='' />
    </button>
  )
}
