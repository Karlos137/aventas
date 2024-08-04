'use client'

// Tailwind Merge
import { twMerge } from 'tailwind-merge'

// React components
import Contact from './Contact'

// Data
import { CONTACTS_CZ, CONTACTS_EN } from './Contacts.constants'

// Next intl
import { useTranslations } from 'next-intl'

type ContactsProps = {
  className?: string
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

const Contacts = ({
  className,
  contact,
  contactInfo,
  contactOffice,
  linkedInLink,
}: ContactsProps) => {
  const t = useTranslations('Contact')
  const contacts = t('lan') === 'cs' ? CONTACTS_CZ : CONTACTS_EN

  const cmsContactsCs = [
    {
      id: 1,
      icon: 'mailAndPhone',
      title: contact?.heading || 'Kontakt',
      links: [
        {
          title: contact?.email ? contact.email : 'info@aventas.cz',
          href: contact?.email
            ? `mailto:${contact?.email}`
            : 'mailto:info@aventas.cz',
        },
        {
          title: contact?.phone ? contact.phone : '+420 773 905 191',
          href: contact?.phone
            ? `tel:${contact.phone.replace(/\s+/g, '')}`
            : 'tel:+420773905191',
        },
      ],
    },
    {
      id: 2,
      icon: 'info',
      title: contactInfo?.heading || 'AVENTAS',
      description: (
        <>
          <span>
            {contactInfo?.name
              ? contactInfo.name
              : 'AVENTAS s.r.o., advokátní kancelář'}
          </span>
          <br />
          <span>{`IČ: ${contactInfo?.ico ? contactInfo.ico : '19480164'}`}</span>
          <br />
          <span>{`DIČ: ${contactInfo?.dic ? contactInfo.dic : 'CZ19480164'}`}</span>
        </>
      ),
    },
    {
      id: 3,
      icon: 'pin',
      title: contactOffice?.heading ? contactOffice.heading : 'Kancelář',
      links: [
        {
          title: contactOffice?.name
            ? contactOffice.name
            : 'Antala Staška 2027/79, 140 00 Praha 4',
          href: contactOffice?.href
            ? contactOffice.href
            : 'https://goo.gl/maps/fAuKNDMcTVRf3R1y7',
        },
      ],
    },
  ]

  const cmsContactsEn = [
    {
      id: 1,
      icon: 'mailAndPhone',
      title: contact?.heading || 'Kontakt',
      links: [
        {
          title: contact?.email ? contact.email : 'info@aventas.cz',
          href: contact?.email
            ? `mailto:${contact?.email}`
            : 'mailto:info@aventas.cz',
        },
        {
          title: contact?.phone ? contact.phone : '+420 773 905 191',
          href: contact?.phone
            ? `tel:${contact.phone.replace(/\s+/g, '')}`
            : 'tel:+420773905191',
        },
      ],
    },
    {
      id: 2,
      icon: 'info',
      title: contactInfo?.heading || 'AVENTAS',
      description: (
        <>
          <span>
            {contactInfo?.name
              ? contactInfo.name
              : 'AVENTAS s.r.o., advokátní kancelář'}
          </span>
          <br />
          <span>{`IČ: ${contactInfo?.ico ? contactInfo.ico : '19480164'}`}</span>
          <br />
          <span>{`DIČ: ${contactInfo?.dic ? contactInfo.dic : 'CZ19480164'}`}</span>
        </>
      ),
    },
    {
      id: 3,
      icon: 'pin',
      title: contactOffice?.heading ? contactOffice.heading : 'Kancelář',
      links: [
        {
          title: contactOffice?.name
            ? contactOffice.name
            : 'Antala Staška 2027/79, 140 00 Praha 4',
          href: contactOffice?.href
            ? contactOffice.href
            : 'https://goo.gl/maps/fAuKNDMcTVRf3R1y7',
        },
      ],
    },
  ]

  const cmsContacts = t('lan') === 'cs' ? cmsContactsCs : cmsContactsEn

  const contactsToRender =
    contact && contactInfo && contactOffice ? cmsContacts : contacts

  return (
    <div className={twMerge('mx-auto max-w-[1271px] px-8 lg:px-12', className)}>
      <div className='flex max-w-[1271px] flex-col items-center gap-16 lg:flex-row lg:items-start lg:justify-between lg:gap-12'>
        {contactsToRender.map(contact => {
          const { id, icon, title, description, links } = contact

          return (
            <Contact
              key={id}
              icon={icon}
              title={title}
              description={description}
              links={links}
            />
          )
        })}
      </div>
      <div className='mt-16 flex flex-col items-center justify-center'>
        <Contact
          icon='linkedIn'
          links={[
            {
              title: 'LinkedIn',
              href: linkedInLink
                ? linkedInLink
                : 'https://www.linkedin.com/company/akaventas',
            },
          ]}
        />
      </div>
    </div>
  )
}
export default Contacts
