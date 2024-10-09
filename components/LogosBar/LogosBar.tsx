// Next.js
import Image from 'next/image'

// Types
import { components } from '@/types/strapi'

type LogosBarProps = {
  logos: components['schemas']['CollaboratingSubjectListResponse']
}

const LogosBar = ({ logos }: LogosBarProps) => {
  if (!logos?.data || logos?.data?.length === 0) {
    return <></>
  }

  return (
    <div className='flex flex-wrap items-center justify-center gap-x-10 gap-y-2 border-b border-t border-b-custom-gray-800 border-t-custom-gray-800 py-3 lg:py-1'>
      {logos.data.map((logo, i) => {
        return (
          <a
            key={logo.id}
            href={logo.attributes?.href}
            rel='noopener norefferer'
            target='_blank'
            className='relative block size-48 scale-100 cursor-pointer transition-transform hover:scale-[1.02] lg:size-52'
          >
            <Image
              alt={
                logo.attributes?.logo.data?.attributes?.alternativeText || ''
              }
              src={logo.attributes?.logo.data?.attributes?.url || ''}
              fill={true}
              className='object-contain object-center'
            />
          </a>
        )
      })}
    </div>
  )
}
export default LogosBar
