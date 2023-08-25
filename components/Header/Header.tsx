// React components
import Navbar from '../Navbar'
import Hero from '../Hero'

const Header = () => {
  return (
    <header className='flex flex-col lg:min-h-screen'>
      <Navbar />
      <Hero className='lg:flex-grow' />
    </header>
  )
}
export default Header
