'use client'

// Framer Motion
import { motion } from 'framer-motion'

// React
import { useState } from 'react'

// React components
import RightArrowIcon from '@/components/svgs/icons/RightArrowIcon'

// Next intl
import { useTranslations } from 'next-intl'

type ArticleCardProps = {
  title: string
  date: string
  description: string
  onClick?: () => void
}

const ArticleCard = ({
  title,
  date,
  description,
  onClick,
}: ArticleCardProps) => {
  const [hover, setHover] = useState(false)
  const t = useTranslations('Specialization')

  return (
    <button
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick}
      className='drop-shadow-none-none flex h-[330px] w-full min-w-[280px] flex-col items-start gap-2 bg-white p-5 transition-all duration-300 ease-in-out hover:drop-shadow-custom-blue'
    >
      <h3 className='text-left text-[1.375rem] font-bold leading-[1.35]'>
        <div>{title}</div>
        <div className='mt-2 text-xs font-light leading-[0.907rem] tracking-wide'>
          {date}
        </div>
      </h3>
      <div className='text-left text-base font-normal leading-5 tracking-wide text-black'>
        {description.length > 100
          ? `${description.substring(0, 100)}...`
          : description}
      </div>
      <div className='mt-auto flex w-full items-center justify-center gap-3'>
        <span> {t('more')}</span>
        <motion.span initial={{ x: 0 }} animate={hover ? { x: 7 } : { x: 0 }}>
          <RightArrowIcon />
        </motion.span>
      </div>
    </button>
  )
}
export default ArticleCard
