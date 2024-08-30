/* eslint-disable react-hooks/rules-of-hooks */
// React
import { useCallback, useState } from 'react'

// Types
import { components } from '@/types/strapi'

// React components
import BasicModal from '../BasicModal'
import ReferenceItem from './ReferenceItem'
import RightArrowIcon from '@/components/svgs/icons/RightArrowIcon'
import LeftArrowIcon from '@/components/svgs/icons/LeftArrowIcon'

// Framer-motion
import { AnimatePresence } from 'framer-motion'

// Embla carousel
import useEmblaCarousel from 'embla-carousel-react'

type ReferenceItemsProps = {
  className?: string
  heading?: string
  references: components['schemas']['ReferenceListResponse']
}

const ReferenceItems = ({
  className,
  heading,
  references,
}: ReferenceItemsProps) => {
  const [modal, setModal] = useState<number | null>(null)
  const [emblaRef, emblaApi] = useEmblaCarousel({})

  if (!references?.data || references?.data?.length === 0) {
    return <></>
  }

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className='border-b border-t border-b-custom-gray-800 border-t-custom-gray-800 py-3 lg:py-1'>
      <div className='overflow-hidden' ref={emblaRef}>
        <div className='flex gap-12'>
          {references.data.map((item, i) => {
            return (
              <ReferenceItem
                key={item.id}
                title={item.attributes?.href || ''}
                src={item.attributes?.logo.data?.attributes?.url || ''}
                className={
                  'flex min-w-0 flex-[0_0_auto] grow cursor-pointer justify-center transition-transform hover:scale-105'
                }
                onClick={() => {
                  setModal(i)
                }}
              />
            )
          })}
        </div>
        <div className='hidden justify-center gap-16 p-2 lg:flex'>
          <button
            className='p-2 duration-300 hover:scale-105 lg:opacity-30'
            onClick={scrollPrev}
          >
            <LeftArrowIcon />
          </button>
          <button
            className='p-2 duration-300 hover:scale-105 lg:opacity-30'
            onClick={scrollNext}
          >
            <RightArrowIcon />
          </button>
        </div>
      </div>
      <AnimatePresence>
        {modal !== null && (
          <BasicModal
            title={references.data[modal].attributes?.href || ''}
            subtitle={references.data[modal].attributes?.href || ''}
            description={references.data[modal].attributes?.href || ''}
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
