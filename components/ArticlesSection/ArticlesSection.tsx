'use client'

// React components
import SectionTitle from '../SectionTitle'
import ArticleCards from '../ArticleCards'

// Next intl
import { useTranslations } from 'next-intl'

type ArticlesSectionProps = {
  className?: string
}

const ArticlesSection = ({ className }: ArticlesSectionProps) => {
  const t = useTranslations('Articles')

  return (
    <section id='specializace' className={className}>
      <SectionTitle className='mx-auto max-w-[1296px] px-12 md:mb-20 lg:text-center'>
        {t('title')}
      </SectionTitle>
      <div>
        <ArticleCards />
      </div>
    </section>
  )
}
export default ArticlesSection
