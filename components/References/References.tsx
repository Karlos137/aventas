'use client'

// Tailwind Merge
import { twMerge } from 'tailwind-merge'

// React components
import SectionTitle from '../SectionTitle'
import ReferenceItems from '../ReferenceItems'

// Next intl
import { useTranslations } from 'next-intl'

type ReferencesProps = {
  className?: string
  heading?: string
}

const References = ({ className, heading }: ReferencesProps) => {
  const t = useTranslations('References')

  return (
    <section
      id='reference'
      className={twMerge('mx-auto max-w-[1408px] px-7 lg:px-12', className)}
    >
      <SectionTitle className='mb-5 text-center text-2xl lg:text-2xl'>
        {heading ? heading : t('title')}
      </SectionTitle>
      <ReferenceItems />
    </section>
  )
}
export default References
