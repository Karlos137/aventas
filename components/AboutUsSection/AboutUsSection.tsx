// Next.js
import Image from 'next/image'

// Tailwind Merge
import { twMerge } from 'tailwind-merge'

// React components
import SectionTitle from '../SectionTitle'

// Images
import aboutUsImage from '../../public/images/o-nas.webp'

type AboutUsSectionProps = {
  className?: string
  image?: string
}

const AboutUsSection = ({ className, image }: AboutUsSectionProps) => {
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
          O nás
        </SectionTitle>
        <p>
          Jsme sehraný tým právníků s ekonomickým a businessovým přesahem a
          smyslem pro detail. Ke každému klientovi přistupujeme individuálně dle
          jeho potřeb a specifik prostředí, v němž se pohybuje. Naším hlavním
          cílem je poskytovat našim klientům vždy kvalitní službu, která se
          neomezuje pouze na právní řešení konkrétního problému, ale pokrývá
          ekonomické dopady a rizika a možné scénáře dalšího směřování klienta.
          Poskytujeme právní poradenství na špičkové úrovni odbornosti i při
          řešení nejsložitějších problémů. Specializujeme se na výstavbu
          holdingových struktur a svěřenských fondů, restrukturalizace a přeměny
          společností, komplexní transakční poradenství, běžnou korporátní
          agendu, cizinecké právo a další související oblasti.
        </p>
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
