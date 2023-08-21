// Tailwind Merge
import { twMerge } from 'tailwind-merge'

// React components
import SectionTitle from '../SectionTitle'
import SpecializationItems from '../SpecializationItems'
import SpecializationCards from '../SpecializationCards'

type SpecializationSectionProps = {
  className?: string
}

const SpecializationSection = ({ className }: SpecializationSectionProps) => {
  return (
    <section
      id='specializace'
      className={twMerge(
        'lg:bg-[url("/images/specializations-bg.svg")] lg:bg-cover lg:bg-center lg:bg-no-repeat lg:pb-[17rem] lg:pt-[10rem] min-[1340px]:bg-contain',
        className,
      )}
    >
      <SectionTitle className='mx-auto max-w-[1296px] px-12 md:mb-20 lg:text-center'>
        Specializace
      </SectionTitle>
      <div className='lg:hidden'>
        <SpecializationItems className='px-7' />
      </div>
      <div className='hidden lg:block'>
        <SpecializationCards />
      </div>
    </section>
  )
}
export default SpecializationSection
