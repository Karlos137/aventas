'use client'

// React
import { useState } from 'react'

// React components
import PersonCard from './PersonCard'

// Data
import { PEOPLE } from './PersonCards.constants'

const PersonCards = () => {
  const [cardDescription, setCardDescription] = useState<number | null>(null)

  return (
    <div className='mx-auto grid max-w-[720px] grid-cols-1 justify-items-center gap-x-7 gap-y-16 sm:grid-cols-2 xl:max-w-[1220px] xl:grid-cols-4'>
      {PEOPLE.map(person => {
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
