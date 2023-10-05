'use client'

// Tailwind Merge
import { twMerge } from 'tailwind-merge'

// Data
import {
  SPECIALIZATIONS_CZ,
  SPECIALIZATIONS_EN,
} from './SpecializationItems.constants'

// Next intl
import { useTranslations } from 'next-intl'

type SpecializationItemsProps = {
  className?: string
}

const SpecializationItems = ({ className }: SpecializationItemsProps) => {
  const t = useTranslations('Specialization')
  const specialization =
    t('lan') === 'cz' ? SPECIALIZATIONS_CZ : SPECIALIZATIONS_EN
  return (
    <ul className={twMerge('list-none', className)}>
      {specialization.map((specializationItem, i) => {
        return (
          <li
            key={specializationItem.id}
            className={twMerge(
              'border-b border-custom-brown-400 p-4 text-2xl font-bold',
              i + 1 === specialization.length && 'border-b-0',
            )}
          >
            {specializationItem.title}
          </li>
        )
      })}
    </ul>
  )
}
export default SpecializationItems
