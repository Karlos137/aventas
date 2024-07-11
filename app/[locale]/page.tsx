// Tailwind Merge
import { twMerge } from 'tailwind-merge'

// React components
import Header from '@/components/Header'
import AboutUsSection from '@/components/AboutUsSection/AboutUsSection'
import SpecializationSection from '@/components/SpecializationSection'
import OurTeamSection from '@/components/OurTeamSection'
import CollaboratingSubjectsSection from '@/components/CollaboratingSubjectsSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import References from '@/components/References'
import ArticleCardsTemporary from '@/components/ArticleCard/ArticleCardsTemporary'

const Home = () => {
  const scrollMarginClass = 'scroll-mt-[6.875rem]'

  return (
    <>
      <Header />
      <AboutUsSection
        className={twMerge('pt-12 lg:pt-20', scrollMarginClass)}
      />
      <SpecializationSection className='mt-12 scroll-mt-32 lg:scroll-mt-0' />
      <OurTeamSection className={scrollMarginClass} />  
      <ArticleCardsTemporary />
      <CollaboratingSubjectsSection className='pt-12 lg:pt-20' />
      <References className='pt-12 lg:pt-20' />
      <ContactSection
        className={twMerge('mb-12 pt-12 lg:pt-20', scrollMarginClass)}
      />
      <Footer />
    </>
  )
}
export default Home
