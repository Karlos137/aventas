'use client'

// React components
import SectionTitle from '../SectionTitle'
import PersonCards from '../PersonCards'

// Types
import { components } from '@/types/strapi'

// Tailwind Merge
import { twMerge } from 'tailwind-merge'

// Next intl
import { useTranslations } from 'next-intl'

type OurTeamSectionProps = {
  className?: string
  heading?: string
  members: components['schemas']['TeamMemberListResponse']
}

const OurTeamSection = ({
  className,
  heading,
  members,
}: OurTeamSectionProps) => {
  const t = useTranslations('OurTeam')

  return (
    <section
      className={twMerge(
        'mx-auto max-w-[1296px] bg-custom-blue-800 px-8 pb-16 pt-12 lg:px-12',
        className,
      )}
      id='nas-tym'
    >
      <SectionTitle className='mb-8 text-center md:mb-16' color='brown'>
        {heading ? heading : t('title')}
      </SectionTitle>
      <PersonCards members={members} />
    </section>
  )
}
export default OurTeamSection
