// Tailwind Merge
import { twMerge } from 'tailwind-merge'

// Data
import { SPECIALIZATIONS } from './SpecializationItems.constants'

type SpecializationItemsProps = {
  className?: string
}

const SpecializationItems = ({ className }: SpecializationItemsProps) => {
  return (
    <ul className={twMerge('list-none', className)}>
      {SPECIALIZATIONS.map((item, i) => {
        return (
          <li
            className={twMerge(
              'border-b border-custom-brown-400 p-4 text-2xl font-bold',
              i + 1 === SPECIALIZATIONS.length && 'border-b-0',
            )}
          >
            {item.title}
          </li>
        )
      })}
    </ul>
  )
}
export default SpecializationItems
