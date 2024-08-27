// Next.js
import Image from 'next/image'

// Types
import { components } from '@/types/strapi'

type LogosBarProps = {
  collabs: components['schemas']['CollaboratingSubjectListResponse']
}

const LogosBar = ({ collabs }: LogosBarProps) => {
  if (!collabs?.data || collabs?.data?.length === 0) {
    return <></>
  }
  {
    console.log(collabs)
  }
  return (
    <div className='flex items-center justify-center gap-10 border-b border-t border-b-custom-gray-800 border-t-custom-gray-800 py-3 lg:py-1'>
      {collabs.data.map((collab, i) => {
        return (
          <div key={collab.id}>
            <a href={collab.attributes?.href}>
              <Image
                alt={
                  collab.attributes?.logo.data?.attributes?.alternativeText ||
                  ''
                }
                src={collab.attributes?.logo.data?.attributes?.url || ''}
                width={collab.attributes?.logo.data?.attributes?.width}
                height={collab.attributes?.logo.data?.attributes?.height}
              />
            </a>
          </div>
        )
      })}
    </div>
  )
}
export default LogosBar
