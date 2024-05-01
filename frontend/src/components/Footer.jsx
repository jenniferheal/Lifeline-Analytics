export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className='fixed bottom-0 w-full flex justify-center items-center h-[5rem] bg-[#204B57]'>
      <p className='font-[Poppins] text-xl text-[#F1F1E6]'>Lifeline Analytics © {year}</p>
    </footer>
  )
}
