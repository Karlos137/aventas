// React
import { useState } from 'react'

// React components
import ReferenceItem from './ReferenceItem'
import BasicModal from '../BasicModal'

// Framer-motion
import { AnimatePresence } from 'framer-motion'

const ReferenceItems = () => {
  const [modal, setModal] = useState<number | null>(null)
  const REFERENCE_ITEMS = [
    {
      id: 1,
      src: '/images/csob-logo.png',
      detail: {
        title: 'Reference 1',
        subtitle: 'Podnadpis',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ',
      },
    },
    {
      id: 2,
      src: '/images/csob-logo.png',
      detail: {
        title: 'Reference 2',
        subtitle: 'Podnadpis',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ',
      },
    },
    {
      id: 3,
      src: '/images/csob-logo.png',
      detail: {
        title: 'Reference 3',
        subtitle: 'Podnadpis',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ',
      },
    },
  ]

  return (
    <div className='flex items-center justify-center gap-10 border-b border-t border-b-custom-gray-800 border-t-custom-gray-800 py-3 lg:py-1'>
      {REFERENCE_ITEMS.map((item, i) => {
        return (
          <ReferenceItem
            key={item.id}
            title={item.detail.title}
            src={item.src}
            onClick={() => {
              setModal(i)
            }}
          />
        )
      })}

      <AnimatePresence>
        {modal !== null && (
          <BasicModal
            title={REFERENCE_ITEMS[modal].detail.title}
            subtitle={REFERENCE_ITEMS[modal].detail.subtitle}
            description={REFERENCE_ITEMS[modal].detail.description}
            onClose={() => {
              setModal(null)
            }}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
export default ReferenceItems
