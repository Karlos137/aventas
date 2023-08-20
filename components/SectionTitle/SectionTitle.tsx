// Taiwlind Merge
import { twMerge } from 'tailwind-merge'

type SectionTitleProps = {
  children: React.ReactNode
  className?: string
}

const SectionTitle = ({ children, className }: SectionTitleProps) => {
  return (
    <h2 className={twMerge('mb-7 text-3xl font-bold lg:text-5xl')}>
      {children}
    </h2>
  )
}
export default SectionTitle
