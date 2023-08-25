// React components
import Header from '@/components/Header'
import AboutUsSection from '@/components/AboutUsSection/AboutUsSection'
import SpecializationSection from '@/components/SpecializationSection'
import OurTeamSection from '@/components/OurTeamSection'
import CollaboratingSubjectsSection from '@/components/CollaboratingSubjectsSection'
import ContactSection from '@/components/ContactSection'

const Home = () => {
  return (
    <>
      <Header />
      <AboutUsSection className='pt-12 lg:pt-20' />
      <SpecializationSection className='mt-12' />
      <OurTeamSection />
      <CollaboratingSubjectsSection className='pt-12 lg:pt-20' />
      <ContactSection className='pt-12 lg:pt-20' />
    </>
  )
}
export default Home
