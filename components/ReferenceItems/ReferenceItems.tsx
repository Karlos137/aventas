/* eslint-disable react-hooks/rules-of-hooks */
// React
import { useCallback, useState, useEffect } from 'react'

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
import { twMerge } from 'tailwind-merge'

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
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)
  const [modal, setModal] = useState<number | null>(null)
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    slidesToScroll: 1,
  })

  if (!references?.data || references?.data?.length === 0) {
    return <></>
  }

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback((emblaApi: any) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onSelect(emblaApi)
    emblaApi.on('reInit', onSelect).on('select', onSelect)
  }, [emblaApi, onSelect])

  return (
    <>
      <div className='grid grid-cols-1 items-center gap-8 border-b border-t border-b-custom-gray-800 border-t-custom-gray-800 py-3 lg:grid-cols-[1fr,_75px] lg:py-1'>
        <div className='overflow-hidden' ref={emblaRef}>
          <div className={twMerge('flex items-center gap-12')}>
            {references.data.map((item, i) => {
              if (item.attributes?.href) {
                return (
                  <a
                    key={item.id}
                    href={item.attributes.href}
                    target='_blank'
                    rel='noopener norefferer'
                    className={
                      'flex size-28 min-w-0 flex-[0_0_auto] cursor-pointer items-center justify-center transition-transform hover:scale-105 lg:size-32'
                    }
                  >
                    <ReferenceItem
                      title={item.attributes?.href || ''}
                      src={item.attributes?.logo.data?.attributes?.url || ''}
                    />
                  </a>
                )
              }

              return (
                <ReferenceItem
                  key={item.id}
                  title={item.attributes?.href || ''}
                  src={item.attributes?.logo.data?.attributes?.url || ''}
                  className={
                    'flex h-24 w-24 min-w-0 flex-[0_0_auto] cursor-pointer items-center justify-center transition-transform hover:scale-105'
                  }
                  onClick={() => {
                    setModal(i)
                  }}
                />
              )
            })}
          </div>
        </div>
        <div className='hidden shrink-0 items-center gap-4 p-4 lg:flex lg:flex-col'>
          <button
            className={twMerge(
              'p-2 text-custom-brown-400 duration-300 hover:scale-105',
              prevBtnDisabled && 'opacity-50',
            )}
            onClick={scrollPrev}
          >
            <LeftArrowIcon />
          </button>
          <button
            className={twMerge(
              'p-2 text-custom-brown-400 duration-300 hover:scale-105',
              nextBtnDisabled && 'opacity-50',
            )}
            onClick={scrollNext}
          >
            <RightArrowIcon />
          </button>
        </div>
        <AnimatePresence>
          {modal !== null && (
            <BasicModal
              title={''}
              description={references.data[modal].attributes?.content || ''}
              onClose={() => {
                setModal(null)
              }}
            />
          )}
        </AnimatePresence>
      </div>
    </>
  )
}
export default ReferenceItems
