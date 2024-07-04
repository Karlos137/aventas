// Next.js
import Image from 'next/image'

type ReferenceItemProps = {
  title: string
  onClick: () => void
  src: string
}

const ReferenceItem = ({ title, onClick, src }: ReferenceItemProps) => {
  return (
    <a
      onClick={onClick}
      rel='noopener norefferer'
      target='_blank'
      title={title}
      className='cursor-pointer'
    >
      <Image src={src} alt='ČSOB Advisory logo' width={94} height={101} />
    </a>
  )
}

export default ReferenceItem
