// React components
import Navbar from '../Navbar'
import Hero from '../Hero'

const Header = () => {
  return (
    <header className='flex min-h-screen flex-col'>
      <Navbar />

      <Hero className='flex-grow' />
    </header>
  )
}
export default Header
