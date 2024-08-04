'use client'

// Tailwind Merge
import { twMerge } from 'tailwind-merge'

// React components
import SectionTitle from '../SectionTitle'
import Contacts from '../Contacts'
import SnazzyMap from '../SnazzyMap'

// Next intl
import { useTranslations } from 'next-intl'

type ContactSectionProps = {
  className?: string
  heading?: string
  contact?: {
    heading?: string
    email?: string
    phone?: string
  }
  contactInfo?: {
    name?: string
    ico?: string
    dic?: string
    heading?: string
  }
  contactOffice?: {
    heading?: string
    name?: string
    href?: string
  }
  linkedInLink?: string
}

const ContactSection = ({
  className,
  heading,
  contact,
  contactInfo,
  contactOffice,
  linkedInLink,
}: ContactSectionProps) => {
  const t = useTranslations('Contact')

  return (
    <section
      className={twMerge('mx-auto max-w-[1920px]', className)}
      id='kontakt'
    >
      <SectionTitle className='mx-auto mb-12 max-w-[1296px] px-8 text-center lg:mb-16 lg:px-12 lg:text-center'>
        {heading ? heading : t('title')}
      </SectionTitle>
      <Contacts
        contact={contact}
        contactInfo={contactInfo}
        contactOffice={contactOffice}
        linkedInLink={linkedInLink}
      />

      <SnazzyMap className='mt-12 lg:mt-16' />
    </section>
  )
}
export default ContactSection
