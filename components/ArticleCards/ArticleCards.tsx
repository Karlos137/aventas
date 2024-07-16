'use client'

// React
import { useState } from 'react'

// React components
import ArticleCard from './ArticleCard'
import BasicModal from '../BasicModal'

// Framer-motion
import { AnimatePresence } from 'framer-motion'

const ReferenceItems = () => {
  const [modal, setModal] = useState<number | null>(null)
  const REFERENCE_ITEMS = [
    {
      id: 1,
      detail: {
        title: 'Reference 1',
        date: '26/6/2024',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ',
      },
    },
    {
      id: 2,
      detail: {
        title: 'Reference 2',
        date: '26/6/2024',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ',
      },
    },
    {
      id: 3,
      detail: {
        title: 'Reference 3',
        date: '26/6/2024',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ',
      },
    },
    {
      id: 4,
      detail: {
        title: 'Reference 3',
        date: '26/6/2024',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ',
      },
    },
    {
      id: 5,
      detail: {
        title: 'Reference 3',
        date: '26/6/2024',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ',
      },
    },
    {
      id: 6,
      detail: {
        title: 'Reference 3',
        date: '26/6/2024',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ',
      },
    },
    {
      id: 7,
      detail: {
        title: 'Reference 3',
        date: '26/6/2024',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ',
      },
    },
    {
      id: 8,
      detail: {
        title: 'Reference 3',
        date: '26/6/2024',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ',
      },
    },
  ]

  return (
    <div className='mx-auto grid max-w-[1271px] grid-cols-1 gap-x-[1.125rem] gap-y-[3.125rem] p-4 md:grid-cols-2 lg:grid-cols-3 lg:bg-[url("/images/specializations-bg.svg")] lg:bg-cover lg:bg-center lg:bg-no-repeat lg:pb-[17rem] lg:pt-[8rem] xl:grid-cols-4 min-[1340px]:bg-contain'>
      {REFERENCE_ITEMS.map((item, i) => {
        return (
          <ArticleCard
            key={item.id}
            title={item.detail.title}
            date={item.detail.date}
            description={item.detail.description}
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
            subtitle={REFERENCE_ITEMS[modal].detail.date}
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
