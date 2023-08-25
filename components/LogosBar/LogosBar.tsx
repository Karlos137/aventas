// Next.js
import Image from 'next/image'

// React components
import KrestonLogo from '../svgs/KrestonLogo'
import DvorakJurigaLogo from '../svgs/DvorakJurigaLogo'

// Images
import csobLogoImage from '../../public/images/csob-logo.png'

const LogosBar = () => {
  return (
    <div className='flex items-center justify-center gap-10 border-b border-t border-b-custom-gray-800 border-t-custom-gray-800 py-3 lg:py-0'>
      <KrestonLogo className='w-[100px] lg:w-[140px]' />
      <div className='hidden lg:block'>
        <Image src={csobLogoImage} alt='ČSOB' width={94} height={101} />
      </div>
      <div className='lg:hidden'>
        <Image src={csobLogoImage} alt='ČSOB' width={61} height={65} />
      </div>
      <DvorakJurigaLogo className='w-[160px] lg:w-[200px]' />
    </div>
  )
}
export default LogosBar
