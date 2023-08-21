// React components
import Header from '@/components/Header'
import AboutUsSection from '@/components/AboutUsSection/AboutUsSection'
import SpecializationSection from '@/components/SpecializationSection'

const Home = () => {
  return (
    <>
      <Header />
      <AboutUsSection className='mt-12 lg:mt-24' />
      <SpecializationSection className='mt-12' />
    </>
  )
}
export default Home
