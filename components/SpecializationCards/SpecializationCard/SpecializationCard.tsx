'use client'

// Framer Motion
import { motion } from 'framer-motion'

// React
import { useState } from 'react'

// React components
import RightArrowIcon from '@/components/svgs/icons/RightArrowIcon'

// Next intl
import { useTranslations } from 'next-intl'

type SpecializationCardProps = {
  title: string
  onClick: () => void
}

const SpecializationCard = ({ title, onClick }: SpecializationCardProps) => {
  const [hover, setHover] = useState(false)
  const t = useTranslations('Specialization')

  return (
    <button
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick}
      className='drop-shadow-none-none flex min-h-[240px] min-w-[280px] flex-col items-start gap-8 bg-white p-5 transition-all duration-300 ease-in-out hover:drop-shadow-custom-blue'
    >
      <h3 className='text-left text-[1.375rem] font-bold leading-[1.35]'>
        <span>{title}</span>
      </h3>
      <div className='mt-auto flex items-center gap-3'>
        <span> {t('more')}</span>
        <motion.span
          className='text-custom-brown-400'
          initial={{ x: 0 }}
          animate={hover ? { x: 7 } : { x: 0 }}
        >
          <RightArrowIcon />
        </motion.span>
      </div>
    </button>
  )
}
export default SpecializationCard
