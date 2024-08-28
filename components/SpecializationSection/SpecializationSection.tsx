'use client'

// Tailwind Merge
import { twMerge } from 'tailwind-merge'

// Types
import { components } from '@/types/strapi'

// React components
import SectionTitle from '../SectionTitle'
import SpecializationItems from '../SpecializationItems'
import SpecializationCards from '../SpecializationCards'

// Next intl
import { useTranslations } from 'next-intl'

type SpecializationSectionProps = {
  className?: string
  heading: string
  content: components['schemas']['SpecializationListResponse']
}

const SpecializationSection = ({
  className,
  heading,
  content,
}: SpecializationSectionProps) => {
  const t = useTranslations('Specialization')

  return (
    <section
      id='specializace'
      className={twMerge(
        'lg:bg-[url("/images/specializations-bg.svg")] lg:bg-contain lg:bg-center lg:bg-no-repeat lg:pb-32 lg:pt-12 min-[1340px]:bg-contain',
        className,
      )}
    >
      <SectionTitle className='mx-auto max-w-[1296px] px-12 md:mb-20 lg:text-center'>
        {heading ? heading : t('title')}
      </SectionTitle>
      <div className='lg:hidden'>
        <SpecializationItems content={content} className='px-7' />
      </div>
      <div className='hidden lg:block'>
        <SpecializationCards content={content} />
      </div>
    </section>
  )
}
export default SpecializationSection
