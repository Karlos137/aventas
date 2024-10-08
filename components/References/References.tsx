'use client'

// Tailwind Merge
import { twMerge } from 'tailwind-merge'

// Types
import { components } from '@/types/strapi'

// React components
import SectionTitle from '../SectionTitle'
import ReferenceItems from '../ReferenceItems'

// Next intl
import { useTranslations } from 'next-intl'

type ReferencesProps = {
  className?: string
  heading?: string
  references: components['schemas']['ReferenceListResponse']
}

const References = ({ className, heading, references }: ReferencesProps) => {
  const t = useTranslations('References')

  return (
    <section
      id='reference'
      className={twMerge('mx-auto max-w-[1408px] px-7 lg:px-12', className)}
    >
      <SectionTitle className='text-center md:mb-12'>
        {heading ? heading : t('title')}
      </SectionTitle>
      <ReferenceItems references={references} />
    </section>
  )
}
export default References
