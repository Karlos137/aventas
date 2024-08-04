'use client'

// React components
import SectionTitle from '../SectionTitle'
import ArticleCards from '../ArticleCards'

// Next intl
import { useTranslations } from 'next-intl'

type ArticlesSectionProps = {
  className?: string
  heading?: string
}

const ArticlesSection = ({ className, heading }: ArticlesSectionProps) => {
  const t = useTranslations('Articles')

  return (
    <section id='specializace' className={className}>
      <SectionTitle className='mx-auto max-w-[1296px] px-12 md:mb-20 lg:text-center'>
        {heading ? heading : t('title')}
      </SectionTitle>
      <div>
        <ArticleCards />
      </div>
    </section>
  )
}
export default ArticlesSection
