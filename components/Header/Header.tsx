// React components
import Navbar from '../Navbar'
import Hero from '../Hero'

const Header = () => {
  return (
    <>
      <Navbar />
      <header className='flex flex-col lg:min-h-[calc(100vh_-_110px)]'>
        <Hero className='lg:flex-grow' />
      </header>
    </>
  )
}
export default Header
