// Taiwlind Merge
import { twMerge } from 'tailwind-merge'

type SectionTitleProps = {
  color?: 'gray' | 'brown'
  children: React.ReactNode
  className?: string
}

const SectionTitle = ({ children, color, className }: SectionTitleProps) => {
  return (
    <h2
      className={twMerge(
        'mb-7 text-left text-3xl font-bold text-custom-gray-800 lg:text-5xl',
        color === 'gray' && 'text-custom-gray-800',
        color === 'brown' && 'text-custom-brown-400',
        className,
      )}
    >
      {children}
    </h2>
  )
}
export default SectionTitle
