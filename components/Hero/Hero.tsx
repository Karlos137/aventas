'use client'

// Next.js
import Image from 'next/image'

// Tailwind Merge
import { twMerge } from 'tailwind-merge'

// Types
import type { components } from '@/types/strapi'

// Images
import aventasHeroImage from '../../public/images/aventas-hero.webp'

// Next intl
import { useTranslations } from 'next-intl'

// HTML React Parser
import parse from 'html-react-parser'

type HeroProps = {
  className?: string
  heading: string
  image?: components['schemas']['HomepageHeroComponent']['image']
}

const Hero = ({ className, heading, image }: HeroProps) => {
  const t = useTranslations('Hero')

  return (
    <div
      className={twMerge(
        'relative flex w-full flex-col lg:px-[5.625rem] lg:pb-[10vh]',
        className,
      )}
    >
      <div className='mx-auto mt-auto w-full max-w-[1200px]'>
        <div className='lg:hidden'>
          <Image
            src={image?.data?.attributes?.url || aventasHeroImage}
            width={image?.data?.attributes?.width || 3840}
            height={image?.data?.attributes?.height || 2021}
            alt='Aventas'
            priority={true}
          />
          <h1 className='relative z-10 mt-5 px-12 text-[2rem] font-bold leading-tight sm:text-5xl sm:leading-tight lg:text-7xl lg:leading-tight'>
            {/* {t('motoFirstLine')}
            <br />
            {t('motoSecondLine')} */}
            {parse(heading)}
          </h1>
        </div>
        <div className='hidden lg:block'>
          <Image
            src={image?.data?.attributes?.url || aventasHeroImage}
            alt='Aventas'
            priority={true}
            fill={true}
            className='object-cover object-top'
          />

          <h1 className='relative z-10 text-[2rem] font-bold leading-tight text-white sm:text-5xl sm:leading-tight lg:text-7xl lg:leading-tight'>
            {/* {t('motoFirstLine')}
            <br />
            {t('motoSecondLine')} */}
            {parse(heading)}
          </h1>
        </div>
      </div>
    </div>
  )
}
export default Hero
