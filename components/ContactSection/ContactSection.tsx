// Tailwind Merge
import { twMerge } from 'tailwind-merge'

// React components
import SectionTitle from '../SectionTitle'

type ContactSectionProps = {
  className?: string
}

const ContactSection = ({ className }: ContactSectionProps) => {
  return (
    <section className={twMerge('mx-auto max-w-[1296px]', className)}>
      <SectionTitle className='lg:text-center'>Kontakt</SectionTitle>
    </section>
  )
}
export default ContactSection
