// React components
import SpecializationCard from './SpecializationCard'

// Data
import { SPECIALIZATIONS } from '../SpecializationItems/SpecializationItems.constants'

const SpecializationCards = () => {
  return (
    <div className='mx-auto grid max-w-[1271px] grid-cols-1 gap-x-[1.125rem] gap-y-[3.125rem] sm:grid-cols-2 md:grid-cols-3 md:px-12 xl:grid-cols-4'>
      {SPECIALIZATIONS.map(specialization => {
        const { id, title, subtitle } = specialization

        return <SpecializationCard key={id} title={title} subtitle={subtitle} />
      })}
    </div>
  )
}
export default SpecializationCards
