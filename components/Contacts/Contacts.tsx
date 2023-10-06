'use client'

// React components
import Contact from './Contact'

// Data
import { CONTACTS_CZ, CONTACTS_EN } from './Contacts.constants'

// Next intl
import { useTranslations } from 'next-intl'

const Contacts = () => {
  const t = useTranslations('Contact')
  const contacts = t('lan') === 'cs' ? CONTACTS_CZ : CONTACTS_EN

  return (
    <div className='mx-auto max-w-[1271px] px-8 lg:px-12'>
      <div className='flex max-w-[1271px] flex-col items-center gap-16 lg:flex-row lg:items-start lg:justify-between lg:gap-12'>
        {contacts.map(contact => {
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
              href: 'https://www.linkedin.com/company/akaventas',
            },
          ]}
        />
      </div>
    </div>
  )
}
export default Contacts
