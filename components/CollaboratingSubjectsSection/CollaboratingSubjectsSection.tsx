// Tailwind Merge
import { twMerge } from 'tailwind-merge'

// React components
import SectionTitle from '../SectionTitle'
import LogosBar from '../LogosBar'

type CollaboratingSubjectsSectionProps = {
  className?: string
}

const CollaboratingSubjectsSection = ({
  className,
}: CollaboratingSubjectsSectionProps) => {
  return (
    <section
      className={twMerge('mx-auto max-w-[1408] px-7 lg:px-12', className)}
    >
      <SectionTitle className='mb-5 text-center text-2xl lg:text-2xl'>
        Spolupracující <br className='lg:hidden' /> subjekty
      </SectionTitle>
      <LogosBar />
    </section>
  )
}
export default CollaboratingSubjectsSection
