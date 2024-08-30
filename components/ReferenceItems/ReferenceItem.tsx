// Next.js
import Image from 'next/image'

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
    <div onClick={onClick} title={title} className={className}>
      <Image src={src} alt='ČSOB Advisory logo' width={94} height={101} />
    </div>
  )
}

export default ReferenceItem
