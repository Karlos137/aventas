// Next.js
import Image from 'next/image'

type ReferenceItemProps = {
  title: string
  onClick: () => void
  src: string
  className: string
}

const ReferenceItem = ({
  title,
  onClick,
  src,
  className,
}: ReferenceItemProps) => {
  return (
    <a
      onClick={onClick}
      rel='noopener norefferer'
      target='_blank'
      title={title}
      className={className}
    >
      <Image src={src} alt='ČSOB Advisory logo' width={94} height={101} />
    </a>
  )
}

export default ReferenceItem
