// Next.js
import Image from 'next/image'

// Images
import csobLogoImage from '../../public/images/csob-logo.png'

type ReferenceItemProps = {
  title: string
  onClick: () => void
}

const ReferenceItem = ({ title, onClick }: ReferenceItemProps) => {
  return (
    <a
      onClick={onClick}
      rel='noopener norefferer'
      target='_blank'
      title={title}
      className='cursor-pointer'
    >
      <Image
        src={csobLogoImage}
        alt='ČSOB Advisory logo'
        width={94}
        height={101}
      />
    </a>
  )
}

export default ReferenceItem
