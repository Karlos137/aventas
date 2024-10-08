// Next.js
import Image from 'next/image'

// Tailwind Merge
import { twMerge } from 'tailwind-merge'

type ReferenceItemProps = {
  title: string
  onClick?: () => void
  src: string
  className?: string
}

const ReferenceItem = ({
  title,
  onClick,
  src,
  className,
}: ReferenceItemProps) => {
  return (
    <div
      onClick={onClick}
      title={title}
      className={twMerge('relative h-full w-full', className)}
    >
      <Image
        src={src}
        alt={title}
        fill={true}
        className='object-contain object-center'
      />
    </div>
  )
}

export default ReferenceItem
