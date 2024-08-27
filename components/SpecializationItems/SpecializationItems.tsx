'use client'

// Tailwind Merge
import { twMerge } from 'tailwind-merge'

// Types
import { components } from '@/types/strapi'

// Next intl
import { useTranslations } from 'next-intl'

type SpecializationItemsProps = {
  className?: string
  content: components['schemas']['SpecializationListResponse']
}

const SpecializationItems = ({
  className,
  content,
}: SpecializationItemsProps) => {
  const t = useTranslations('Specialization')

  if (!content?.data || content?.data?.length === 0) {
    return <></>
  }

  return (
    <ul className={twMerge('list-none', className)}>
      {content.data.map((item, i) => {
        return (
          <li
            key={item.id}
            className={twMerge(
              'border-b border-custom-brown-400 p-4 text-2xl font-bold',
              i + 1 === item.attributes?.heading.length && 'border-b-0',
            )}
          >
            {item.attributes?.heading}
          </li>
        )
      })}
    </ul>
  )
}
export default SpecializationItems
