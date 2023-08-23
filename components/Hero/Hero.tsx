// Next.js
import Image from 'next/image'

// Tailwind Merge
import { twMerge } from 'tailwind-merge'

// Images
import aventasHeroImage from '../../public/images/aventas-hero.webp'

type HeroProps = {
  className?: string
}

const Hero = ({ className }: HeroProps) => {
  return (
    <div
      className={twMerge(
        'relative flex w-full flex-col px-8 pb-[19.5vh] pt-8 min-[370px]:px-12 lg:px-[5.625rem] lg:pb-[21vh]',
        className,
      )}
    >
      <div className='mx-auto mt-auto w-full max-w-[1200px]'>
        <Image
          src={aventasHeroImage}
          alt='Aventas'
          priority={true}
          fill={true}
          className='object-cover'
        />
        <h1 className='relative z-10 text-[2rem] font-bold leading-tight text-white sm:text-5xl sm:leading-tight lg:text-7xl lg:leading-tight'>
          Právní jistota
          <br /> při každém kroku
        </h1>
      </div>
    </div>
  )
}
export default Hero
