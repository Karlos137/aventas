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
}

const References = ({ className }: ReferencesProps) => {
  const t = useTranslations('Colaboration')

  return (
    <section
      className={twMerge('mx-auto max-w-[1408] px-7 lg:px-12', className)}
    >
      <SectionTitle className='mb-5 text-center text-2xl lg:text-2xl'>
        {t('titleFirstPart')} <br className='lg:hidden' />
        {t('titleSecondPart')}
      </SectionTitle>
      <ReferenceItems />
    </section>
  )
}
export default References
