'use client'

// React
import { useState } from 'react'

// Types
import { components } from '@/types/strapi'

// Framer Motion
import { AnimatePresence } from 'framer-motion'

// React components
import SpecializationCard from './SpecializationCard'
import SpecializationModal from './SpecializationModal'

// Next intl
import { useTranslations } from 'next-intl'

type SpecializationCardsProps = {
  className?: string
  content: components['schemas']['SpecializationListResponse']
}

const SpecializationCards = ({
  className,
  content,
}: SpecializationCardsProps) => {
  const [modal, setModal] = useState<number | null>(null)
  const t = useTranslations('Specialization')

  if (!content?.data || content?.data?.length === 0) {
    return <></>
  }

  console.log(content)
  return (
    <div className='mx-auto grid max-w-[1271px] grid-cols-1 gap-x-[1.125rem] gap-y-[3.125rem] sm:grid-cols-2 md:grid-cols-3 md:px-12 xl:grid-cols-4'>
      {content.data.map((item, i) => {
        return (
          <SpecializationCard
            key={item.id}
            title={item.attributes?.heading || ''}
            onClick={() => {
              setModal(i)
            }}
          />
        )
      })}
      <AnimatePresence>
        {modal !== null && (
          <SpecializationModal
            title={content.data[modal].attributes?.heading || ''}
            description={content.data[modal].attributes?.content || ''}
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
