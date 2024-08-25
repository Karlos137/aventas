'use client'

// Next.js
import Link from 'next/link'

// Types
import { components } from '@/types/strapi'

// React components
import SectionTitle from '../SectionTitle'
import ArticleCards from '../ArticleCards'
import PlusCircleIcon from '../svgs/icons/PlusCircleIcon'

// Next intl
import { useTranslations } from 'next-intl'

type ArticlesSectionProps = {
  className?: string
  heading?: string
  articles: components['schemas']['ArticleListResponse']
}

const ArticlesSection = ({
  className,
  heading,
  articles,
}: ArticlesSectionProps) => {
  const t = useTranslations('Articles')

  return (
    <section id='novinky-a-clanky' className={className}>
      <SectionTitle className='mx-auto max-w-[1296px] px-12 md:mb-20 lg:text-center'>
        {heading ? heading : t('title')}
      </SectionTitle>
      <div>
        <ArticleCards articles={articles} />
      </div>
      <div className='mx-auto flex max-w-[1296px] justify-center px-12'>
        <Link
          title='Další články'
          aria-label='Další články'
          href='/clanky'
          className='scale-100 transform transition-transform duration-300 ease-in-out hover:scale-105'
        >
          <PlusCircleIcon />
        </Link>
      </div>
    </section>
  )
}
export default ArticlesSection
