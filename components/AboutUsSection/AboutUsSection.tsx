'use client'

// Next.js
import Image from 'next/image'

// Tailwind Merge
import { twMerge } from 'tailwind-merge'

// React components
import SectionTitle from '../SectionTitle'

// Next intl
import { useTranslations } from 'next-intl'

type AboutUsSectionProps = {
  className?: string
  image?: string
}

const AboutUsSection = ({ className, image }: AboutUsSectionProps) => {
  const t = useTranslations('AboutUsSection')
  return (
    <section
      className={twMerge(
        'mx-auto flex max-w-[1296px] flex-col gap-8 lg:flex-row lg:justify-between lg:gap-16 lg:px-12',
        className,
      )}
      id='o-nas'
    >
      <div
        className={twMerge(
          'mx-auto px-12 lg:max-w-[880px] lg:px-0',
          image && 'mx-0 lg:max-w-[460px]',
        )}
      >
        <SectionTitle
          className={twMerge('lg:text-center', image && 'lg:text-left')}
        >
          {t('us')}
        </SectionTitle>
        <p className='text-last-center text-justify'>{t('textOne')}</p>
        <br />
        <p className='text-last-center text-justify'>{t('textTwo')}</p>
      </div>
      {image && (
        <div className='relative h-[290px] flex-shrink-0 sm:h-[320px] md:h-[400px] lg:h-[520px] lg:w-[520px]'>
          <Image src={image} alt='O nás' fill={true} className='object-cover' />
        </div>
      )}
    </section>
  )
}
export default AboutUsSection
