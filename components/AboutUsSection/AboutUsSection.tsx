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
}

const AboutUsSection = ({ className }: AboutUsSectionProps) => {
  return (
    <section
      className={twMerge(
        'mx-auto flex max-w-[1296px] flex-col gap-8 lg:flex-row lg:justify-between lg:gap-16 lg:px-12',
        className,
      )}
      id='o-nas'
    >
      <div className='px-12 lg:max-w-[460px] lg:px-0'>
        <SectionTitle>O nás</SectionTitle>
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
      <div className='relative h-[290px] flex-shrink-0 sm:h-[320px] md:h-[400px] lg:h-[520px] lg:w-[520px]'>
        <Image src={aboutUsImage} alt='O nás' fill={true} objectFit='cover' />
      </div>
    </section>
  )
}
export default AboutUsSection
