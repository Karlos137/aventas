// Next.js
import Image from 'next/image'

type PersonCardProps = {
  name: string
  role: string
  email: string
  phone: string
  image: string
}

const PersonCard = ({ name, role, email, phone, image }: PersonCardProps) => {
  return (
    <div className='min-w-[285px] max-w-[320px]'>
      <div className='bg-custom-brown-300 relative h-[378px]'>
        <Image src={image} alt={name} fill={true} objectFit='cover' />
      </div>
      <div className='flex flex-col items-center gap-2 bg-white px-4 py-5 text-center'>
        <div className='text-lg font-bold tracking-tight'>{name}</div>
        <div>{role}</div>
        <div>
          <a href={`mailto:${email}`} title={email} className='hover:underline'>
            {email}
          </a>
        </div>
        <div>
          <a
            href={`tel:${phone.replace(/\s/g, '')}`}
            title={phone}
            className='hover:underline'
          >
            {phone}
          </a>
        </div>
      </div>
    </div>
  )
}
export default PersonCard
