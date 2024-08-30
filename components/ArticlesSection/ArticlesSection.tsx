'use client'

// Next.js
import Link from 'next/link'
import dynamic from 'next/dynamic'

// Types
import { components } from '@/types/strapi'

// React components
import SectionTitle from '../SectionTitle'
import PlusCircleIcon from '../svgs/icons/PlusCircleIcon'

// Next intl
import { useTranslations } from 'next-intl'

const DynamicArticleCards = dynamic(() => import('../ArticleCards'), {
  ssr: false,
})

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
        <DynamicArticleCards articles={articles} />
      </div>
      <div className='mx-auto flex max-w-[1296px] justify-center px-12'>
        <Link
          title='Další články'
          aria-label='Další články'
          href='/clanky'
          className='scale-100 transform text-custom-brown-400 transition-transform duration-300 ease-in-out hover:scale-105'
        >
          <PlusCircleIcon className='text-custom-brown-400' />
        </Link>
      </div>
    </section>
  )
}
export default ArticlesSection
