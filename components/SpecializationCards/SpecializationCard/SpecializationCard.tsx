'use client'

// Framer Motion
import { motion } from 'framer-motion'

// React
import { useState } from 'react'

// React components
import RightArrowIcon from '@/components/svgs/icons/RightArrowIcon'

type SpecializationCardProps = {
  title: string
  subtitle?: string
  onClick: () => void
}

const SpecializationCard = ({
  title,
  subtitle,
  onClick,
}: SpecializationCardProps) => {
  const [hover, setHover] = useState(false)

  return (
    <button
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick}
      className='hover:drop-shadow-custom-blue drop-shadow-none-none flex h-[330px] min-w-[280px] flex-col items-start gap-8 bg-white p-5 transition-shadow'
    >
      <h3 className='text-left text-[1.375rem] font-bold leading-[1.35]'>
        <span>{title}</span>
        {subtitle && (
          <>
            <br />
            <span>{subtitle}</span>
          </>
        )}
      </h3>
      <div className='mt-auto flex items-center gap-3'>
        <span>zjistit více</span>
        <motion.span initial={{ x: 0 }} animate={hover ? { x: 7 } : { x: 0 }}>
          <RightArrowIcon />
        </motion.span>
      </div>
    </button>
  )
}
export default SpecializationCard
