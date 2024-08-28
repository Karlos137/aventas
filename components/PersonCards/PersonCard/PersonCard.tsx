// Next.js
import Image from 'next/image'

// React
import { useEffect, useRef } from 'react'

// Framer Motion
import { motion, AnimatePresence } from 'framer-motion'

// React components
import PlusCircleIcon from '@/components/svgs/icons/PlusCircleIcon'
import CloseIcon from '@/components/svgs/icons/CloseIcon'

// React Markdown
import Markdown from 'react-markdown'

type PersonCardProps = {
  name: string
  role: string
  email: string
  phone: string
  image: string
  description: React.ReactNode
  showDescription: boolean
  onClose: () => void
  setDescription: () => void
}

const PersonCard = ({
  name,
  role,
  email,
  phone,
  image,
  description,
  showDescription,
  onClose,
  setDescription,
}: PersonCardProps) => {
  const ref: React.RefObject<HTMLDivElement> = useRef(null)

  useEffect(() => {
    if (ref.current && showDescription) {
      setTimeout(() => {
        ref?.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }, 501)
    }
  }, [showDescription])

  return (
    <div
      ref={ref}
      className='w-full min-w-[285px] max-w-[320px] scroll-mt-[6.875rem]'
    >
      <AnimatePresence>
        {showDescription && (
          <motion.div
            className='bg-white'
            initial={{ opacity: 0, scale: 0.9, height: 0 }}
            animate={{ opacity: 1, scale: 1, height: 'auto' }}
            exit={{
              opacity: 0.3,
              scale: 0.8,
              height: 0,
              transition: {
                duration: 0.3,
              },
            }}
            transition={{ duration: 0.4 }}
          >
            <div className='flex justify-end'>
              <div className='w-fit cursor-pointer p-5' onClick={onClose}>
                <CloseIcon />
              </div>
            </div>
            <motion.div
              className='px-5 pb-7'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{
                opacity: 0,
              }}
              transition={{ duration: 0.5 }}
            >
              <Markdown>{description?.toString()}</Markdown>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        initial={{ opacity: 1, display: 'block' }}
        animate={{
          opacity: showDescription ? 0 : 1,
          display: showDescription ? 'none' : 'block',
        }}
      >
        <div
          className='relative h-[378px] cursor-pointer overflow-hidden bg-custom-brown-300'
          onClick={() => {
            setDescription()
          }}
        >
          <Image
            src={image}
            alt={name}
            fill={true}
            className='scale-100 object-cover transition-transform hover:scale-105'
          />
        </div>
        <div className='flex flex-col items-center gap-2 bg-white px-4 py-5 text-center'>
          <div className='text-lg font-bold tracking-tight'>{name}</div>
          <div>{role}</div>
          <div>
            <a
              href={`mailto:${email}`}
              title={email}
              className='hover:underline'
            >
              {email}
            </a>
          </div>
          <div>
            <a
              href={`tel:${phone.replace(/\s/g, '')}`}
              title={phone}
              className='hover:underline'
            >
              {phone}
            </a>
          </div>
          <button
            title='Zobrazit popisek'
            aria-label='Zobrazit popisek'
            className='cursor mt-4 w-fit scale-100 transform transition-transform duration-300 ease-in-out hover:scale-105'
            onClick={() => {
              setDescription()
            }}
          >
            <PlusCircleIcon />
          </button>
        </div>
      </motion.div>
    </div>
  )
}
export default PersonCard
