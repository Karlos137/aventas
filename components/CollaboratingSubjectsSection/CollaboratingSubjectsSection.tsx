'use client'

// Tailwind Merge
import { twMerge } from 'tailwind-merge'

// React components
import SectionTitle from '../SectionTitle'
import LogosBar from '../LogosBar'

// Next intl
import { useTranslations } from 'next-intl'

type CollaboratingSubjectsSectionProps = {
  className?: string
}

const CollaboratingSubjectsSection = ({
  className,
}: CollaboratingSubjectsSectionProps) => {
  const t = useTranslations('Colaboration')

  return (
    <section
      className={twMerge('mx-auto max-w-[1408px] px-7 lg:px-12', className)}
    >
      <SectionTitle className='mb-5 text-center text-2xl lg:text-2xl'>
        {t('titleFirstPart')} <br className='lg:hidden' />
        {t('titleSecondPart')}
      </SectionTitle>
      <LogosBar />
    </section>
  )
}
export default CollaboratingSubjectsSection
