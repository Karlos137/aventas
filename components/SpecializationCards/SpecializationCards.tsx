'use client'

// React
import { useState } from 'react'

// Framer Motion
import { AnimatePresence } from 'framer-motion'

// React components
import SpecializationCard from './SpecializationCard'
import SpecializationModal from './SpecializationModal'

// Data
import {
  SPECIALIZATIONS_CZ,
  SPECIALIZATIONS_EN,
} from '../SpecializationItems/SpecializationItems.constants'

// Next intl
import { useTranslations } from 'next-intl'

const SpecializationCards = () => {
  const [modal, setModal] = useState<number | null>(null)
  const t = useTranslations('Specialization')
  const specialization =
    t('lan') === 'cz' ? SPECIALIZATIONS_CZ : SPECIALIZATIONS_EN

  return (
    <div className='mx-auto grid max-w-[1271px] grid-cols-1 gap-x-[1.125rem] gap-y-[3.125rem] sm:grid-cols-2 md:grid-cols-3 md:px-12 xl:grid-cols-4'>
      {specialization.map((specializationItem, i) => {
        const { id, title, subtitle } = specializationItem

        return (
          <SpecializationCard
            key={id}
            title={title}
            subtitle={subtitle}
            onClick={() => {
              setModal(i)
            }}
          />
        )
      })}
      <AnimatePresence>
        {modal !== null && (
          <SpecializationModal
            title={specialization[modal].title}
            subtitle={specialization[modal].subtitle}
            description={specialization[modal].description}
            onClose={() => {
              setModal(null)
            }}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
export default SpecializationCards
