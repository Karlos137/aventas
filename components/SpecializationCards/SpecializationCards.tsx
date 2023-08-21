'use client'

// React
import { useState } from 'react'

// Framer Motion
import { AnimatePresence } from 'framer-motion'

// React components
import SpecializationCard from './SpecializationCard'
import SpecializationModal from './SpecializationModal'

// Data
import { SPECIALIZATIONS } from '../SpecializationItems/SpecializationItems.constants'

const SpecializationCards = () => {
  const [modal, setModal] = useState<number | null>(null)

  return (
    <div className='mx-auto grid max-w-[1271px] grid-cols-1 gap-x-[1.125rem] gap-y-[3.125rem] sm:grid-cols-2 md:grid-cols-3 md:px-12 xl:grid-cols-4'>
      {SPECIALIZATIONS.map((specialization, i) => {
        const { id, title, subtitle } = specialization

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
            title={SPECIALIZATIONS[modal].title}
            subtitle={SPECIALIZATIONS[modal].subtitle}
            description={SPECIALIZATIONS[modal].description}
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
