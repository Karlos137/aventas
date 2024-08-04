'use client'

// Next.js
import Image from 'next/image'

// Tailwind Merge
import { twMerge } from 'tailwind-merge'

// React components
import SectionTitle from '../SectionTitle'

// React Markdown
import Markdown from 'react-markdown'

// Next intl
import { useTranslations } from 'next-intl'

type AboutUsSectionProps = {
  className?: string
  image?: string
  heading?: string
  description?: string
}

const AboutUsSection = ({
  className,
  image,
  heading,
  description,
}: AboutUsSectionProps) => {
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
          {heading ? heading : t('us')}
        </SectionTitle>
        <div className='text-last-center prose max-w-full text-justify'>
          {description ? (
            <Markdown>{description}</Markdown>
          ) : (
            <>
              <p>{t('textOne')}</p>
              <p>{t('textTwo')}</p>
            </>
          )}
        </div>
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
