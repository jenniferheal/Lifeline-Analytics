export default function HaveAnAccount({ method }) {
  return (
    <div className='flex flex-col gap-1 items-center w-full mb-5 mx-auto text-gray-500'>
      {method === 'login'
        ? <p>Don't have an account?</p>
        : <p>Already have an account?</p>}
      <a
        href={`/${method === 'login' ? 'register' : 'login'}`}
        className='w-1/3 bg-gray-300 text-center mx-auto font-bold
    text-[#204B57] font-[Poppins] py-2 px-6
    rounded shadow-md hover:bg-gray-500 hover:text-white duration-500 '
      >{method === 'login' ? 'Sign Up' : 'Login'}
      </a>
    </div>
  )
}
