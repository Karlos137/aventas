'use client'

// Tailwind Merge
import { twMerge } from 'tailwind-merge'

// Types
import { components } from '@/types/strapi'

// React components
import SectionTitle from '../SectionTitle'
import LogosBar from '../LogosBar'

// Next intl
import { useTranslations } from 'next-intl'

type CollaboratingSubjectsSectionProps = {
  className?: string
  heading?: string
  collabs: components['schemas']['CollaboratingSubjectListResponse']
}

const CollaboratingSubjectsSection = ({
  className,
  heading,
  collabs,
}: CollaboratingSubjectsSectionProps) => {
  const t = useTranslations('Colaboration')

  return (
    <section
      id='spolupracujici-subjekty'
      className={twMerge('mx-auto max-w-[1408px] px-7 lg:px-12', className)}
    >
      <SectionTitle className='mb-5 text-center text-2xl lg:text-2xl'>
        {heading ? (
          heading
        ) : (
          <>
            {t('titleFirstPart')} <br className='lg:hidden' />
            {t('titleSecondPart')}
          </>
        )}
      </SectionTitle>
      <LogosBar collabs={collabs} />
    </section>
  )
}
export default CollaboratingSubjectsSection
