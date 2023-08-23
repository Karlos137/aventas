// React components
import SectionTitle from '../SectionTitle'
import PersonCards from '../PersonCards'

// Tailwind Merge
import { twMerge } from 'tailwind-merge'

type OurTeamSectionProps = {
  className?: string
}

const OurTeamSection = ({ className }: OurTeamSectionProps) => {
  return (
    <section
      className={twMerge(
        'mx-auto max-w-[1296px] bg-custom-blue-800 px-8 pb-16 pt-12 lg:px-12',
        className,
      )}
      id='nas-tym'
    >
      <SectionTitle className='mb-8 text-center md:mb-16' color='brown'>
        Náš tým
      </SectionTitle>
      <PersonCards />
    </section>
  )
}
export default OurTeamSection
