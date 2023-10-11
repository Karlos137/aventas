'use client'

// React
import { useState } from 'react'

// React components
import PersonCard from './PersonCard'

// Data
import { PEOPLE_CZ, PEOPLE_EN } from './PersonCards.constants'

// Next intl
import { useTranslations } from 'next-intl'

const PersonCards = () => {
  const [cardDescription, setCardDescription] = useState<number | null>(null)
  const t = useTranslations('Contact')
  const people = t('lan') === 'cs' ? PEOPLE_CZ : PEOPLE_EN

  return (
    <div className='mx-auto grid max-w-[720px] grid-cols-1 justify-items-center gap-x-7 gap-y-16 sm:grid-cols-2 xl:max-w-[1220px] xl:grid-cols-4'>
      {people.map(person => {
        const { id, name, role, email, phone, image, description } = person

        return (
          <PersonCard
            key={id}
            name={name}
            role={role}
            email={email}
            phone={phone}
            image={image}
            description={description}
            showDescription={
              typeof cardDescription === 'number' && cardDescription === id
            }
            onClose={() => {
              setCardDescription(null)
            }}
            setDescription={() => {
              setCardDescription(id)
            }}
          />
        )
      })}
    </div>
  )
}
export default PersonCards
