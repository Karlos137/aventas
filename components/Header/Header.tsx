// React components
import Navbar from '../Navbar'
import Hero from '../Hero'

const Header = () => {
  return (
    <>
      <Navbar />
      <header className='flex flex-col lg:min-h-screen'>
        <Hero className='lg:flex-grow' />
      </header>
    </>
  )
}
export default Header
