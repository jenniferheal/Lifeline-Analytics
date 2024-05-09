import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import Form from '../components/Form'

export default function Register() {
  return (
    <>

      <Navbar />
      <Form route='/signup' method='signup' />
      <Footer />

    </>
  )
}
