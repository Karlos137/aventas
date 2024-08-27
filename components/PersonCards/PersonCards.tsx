'use client'

// React
import { useState } from 'react'

// Types
import { components } from '@/types/strapi'

// React components
import PersonCard from './PersonCard'

// Next intl
import { useTranslations } from 'next-intl'

type PersonCardsProps = {
  className?: string
  members: components['schemas']['TeamMemberListResponse']
}

const PersonCards = ({ className, members }: PersonCardsProps) => {
  const [cardDescription, setCardDescription] = useState<number | null>(null)
  const t = useTranslations('Contact')

  if (!members?.data || members?.data?.length === 0) {
    return <></>
  }

  console.log(members)
  return (
    <div className='mx-auto grid max-w-[720px] grid-cols-1 justify-items-center gap-x-7 gap-y-16 sm:grid-cols-2 xl:max-w-[1220px] xl:grid-cols-4'>
      {members.data.map(person => {
        return (
          <PersonCard
            key={person.id}
            name={person.attributes?.name || ''}
            role={person.attributes?.position || ''}
            email={person.attributes?.email || ''}
            phone={person.attributes?.phone || ''}
            image={person.attributes?.image.data?.attributes?.url || ''}
            description={person.attributes?.about || ''}
            showDescription={
              typeof cardDescription === 'number' &&
              cardDescription === person.id
            }
            onClose={() => {
              setCardDescription(null)
            }}
            setDescription={() => {
              setCardDescription(person.id || null)
            }}
          />
        )
      })}
    </div>
  )
}
export default PersonCards
