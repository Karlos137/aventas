// Next.js
import Image from 'next/image'

// Tailwind Merge
import { twMerge } from 'tailwind-merge'

// Images
import pragueImg from '../../public/images/prague.webp'

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
      <Image
        src={pragueImg}
        alt='Praha'
        priority={true}
        fill={true}
        objectFit='cover'
      />
      <h1 className='relative z-10 mt-auto text-[2rem] font-bold leading-tight text-white sm:text-5xl sm:leading-tight lg:text-7xl lg:leading-tight'>
        Právní jistota
        <br /> při každém kroku
      </h1>
    </div>
  )
}
export default Hero
