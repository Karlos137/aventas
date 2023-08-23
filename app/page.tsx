// React components
import Header from '@/components/Header'
import AboutUsSection from '@/components/AboutUsSection/AboutUsSection'
import SpecializationSection from '@/components/SpecializationSection'
import OurTeamSection from '@/components/OurTeamSection'

const Home = () => {
  return (
    <>
      <Header />
      <AboutUsSection className='pt-12 lg:pt-24' />
      <SpecializationSection className='mt-12' />
      <OurTeamSection />
    </>
  )
}
export default Home
