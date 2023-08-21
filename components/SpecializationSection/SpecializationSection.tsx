// React components
import SectionTitle from '../SectionTitle'
import SpecializationItems from '../SpecializationItems'

const SpecializationSection = () => {
  return (
    <section id='specializace' className='mx-auto max-w-[1271px] md:px-12'>
      <SectionTitle className='px-12 md:px-0'>Specializace</SectionTitle>
      <SpecializationItems className='px-7 md:px-0' />
    </section>
  )
}
export default SpecializationSection
