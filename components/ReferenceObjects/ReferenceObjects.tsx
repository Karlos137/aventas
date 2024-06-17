// Next.js
import Image from 'next/image'

// React
import { useState } from 'react'

// React components
import KrestonLogo from '../svgs/KrestonLogo'
import DvorakJurigaLogo from '../svgs/DvorakJurigaLogo'
import SpecializationModal from '../SpecializationCards/SpecializationModal'

// Images
import csobLogoImage from '../../public/images/csob-logo.png'

// Framer-motion
import { AnimatePresence } from 'framer-motion'

const ReferenceObjects = () => {
  const linkClasses = 'scale-1 transition-transform lg:hover:scale-[1.03]'
  const [modal, setModal] = useState<number | null>(null)
  const handleOpenModal = (index: number) => {
    setModal(index)
  }

  return (
    <div className='flex items-center justify-center gap-10 border-b border-t border-b-custom-gray-800 border-t-custom-gray-800 py-3 lg:py-1'>
      <a
        rel='noopener norefferer'
        target='_blank'
        title='Kreston'
        className={linkClasses}
        onClick={() => handleOpenModal(0)}
      >
        <KrestonLogo className='w-[100px] lg:w-[140px]' />
      </a>
      <a
        rel='noopener norefferer'
        target='_blank'
        title='ČSOB Advisory'
        className={linkClasses}
        onClick={() => handleOpenModal(1)}
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
        rel='noopener norefferer'
        target='_blank'
        title='Dvořák & Juriga'
        className={linkClasses}
        onClick={() => handleOpenModal(2)}
      >
        <DvorakJurigaLogo className='w-[160px] lg:w-[200px]' />
      </a>
      <AnimatePresence>
        {modal !== null && (
          <SpecializationModal
            title='Nadpis'
            subtitle='Podnadpis'
            description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
            onClose={() => {
              setModal(null)
            }}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
export default ReferenceObjects
