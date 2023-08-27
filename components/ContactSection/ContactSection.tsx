// Tailwind Merge
import { twMerge } from 'tailwind-merge'

// React components
import SectionTitle from '../SectionTitle'
import Contacts from '../Contacts'
import SnazzyMap from '../SnazzyMap'

type ContactSectionProps = {
  className?: string
}

const ContactSection = ({ className }: ContactSectionProps) => {
  return (
    <section
      className={twMerge('mx-auto max-w-[1920px]', className)}
      id='kontakt'
    >
      <SectionTitle className='mx-auto mb-12 max-w-[1296px] px-8 lg:mb-16 lg:px-12 lg:text-center'>
        Kontakt
      </SectionTitle>
      <Contacts />

      <SnazzyMap className='mt-12 lg:mt-16' />
    </section>
  )
}
export default ContactSection
