import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import Form from '../components/Form'

export default function EditUser() {
  return (
    <>

      <Navbar />
      <Form route='/edit' method='edit' />
      <Footer />

    </>
  )
}
