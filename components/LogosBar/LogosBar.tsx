// Next.js
import Image from 'next/image'

// React components
import KrestonLogo from '../svgs/KrestonLogo'
import DvorakJurigaLogo from '../svgs/DvorakJurigaLogo'

// Images
import csobLogoImage from '../../public/images/csob-logo.png'

const LogosBar = () => {
  const linkClasses = 'scale-1 transition-transform lg:hover:scale-[1.03]'

  return (
    <div className='flex items-center justify-center gap-10 border-b border-t border-b-custom-gray-800 border-t-custom-gray-800 py-3 lg:py-1'>
      <a
        href='https://www.kreston.cz/'
        rel='noopener norefferer'
        target='_blank'
        title='Kreston'
        className={linkClasses}
      >
        <KrestonLogo className='w-[100px] lg:w-[140px]' />
      </a>
      <a
        href='https://advisory.csob.cz/'
        rel='noopener norefferer'
        target='_blank'
        title='ČSOB Advisory'
        className={linkClasses}
      >
        <div className='hidden lg:block'>
          <Image
            src={csobLogoImage}
            alt='ČSOB Advisory logo'
            width={94}
            height={101}
          />
        </div>
        <div className='lg:hidden'>
          <Image src={csobLogoImage} alt='ČSOB' width={61} height={65} />
        </div>
      </a>
      <a
        href='https://www.dvorakjuriga.cz/'
        rel='noopener norefferer'
        target='_blank'
        title='Dvořák & Juriga'
        className={linkClasses}
      >
        <DvorakJurigaLogo className='w-[160px] lg:w-[200px]' />
      </a>
    </div>
  )
}
export default LogosBar
