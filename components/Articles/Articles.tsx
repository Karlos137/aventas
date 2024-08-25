'use client'

// SWR
import useSWR from 'swr'

// React
import { useState } from 'react'

// Types
import { components } from '@/types/strapi'

// React components
import ArticleCard from '../ArticleCards/ArticleCard'
import SectionTitle from '../SectionTitle'
import PlusCircleIcon from '../svgs/icons/PlusCircleIcon'
import BasicModal from '../BasicModal'

// Framer-motion
import { AnimatePresence } from 'framer-motion'

// Utils
import { formatDate } from '@/utils/formatDate'

// Next intl
import { useTranslations, useLocale } from 'next-intl'
import { getArticles } from '@/services/strapi/strapiData'

// Constants
import { ARTICLES_LIMIT } from '@/constants/articles'

type ArticlesProps = {
  articles: components['schemas']['ArticleListResponse']
  heading?: string
}

const Articles = ({ articles, heading }: ArticlesProps) => {
  const t = useTranslations('Articles')
  const locale = useLocale()

  const [shouldFetch, setShouldFetch] = useState(false)
  const [currentArticles, setCurrentArticles] = useState<
    components['schemas']['ArticleListResponse'] | null
  >(() => articles)
  const [modal, setModal] = useState<number | null>(null)

  const { data, isLoading } = useSWR(
    // @ts-expect-error
    shouldFetch ? `articles-${currentArticles?.meta?.pagination?.start}` : null,
    () =>
      getArticles(
        locale,
        // @ts-expect-error
        ((currentArticles?.meta?.pagination?.start as number) || 0) +
          ARTICLES_LIMIT,
        ARTICLES_LIMIT,
        true,
      ),
    {
      onSuccess: data => {
        setCurrentArticles(prev => {
          return {
            ...data,
            // @ts-expect-error
            data: [...(prev?.data || []), ...data.data],
          }
        })
        setShouldFetch(false)
      },
    },
  )

  const activeArticle = currentArticles?.data?.find(
    article => article.id === modal,
  )

  if (!currentArticles?.data || currentArticles?.data?.length === 0) {
    return <></>
  }

  return (
    <div className='pb-16 pt-12 lg:pb-24 lg:pt-16'>
      <SectionTitle className='mx-auto max-w-[1296px] px-12 md:mb-20 lg:text-center'>
        {heading ? heading : t('title')}
      </SectionTitle>

      <div className='mx-auto grid max-w-[1271px] grid-cols-1 gap-x-[1.125rem] gap-y-[3.125rem] bg-[url("/images/specializations-bg.svg")] bg-contain bg-center bg-no-repeat p-4 pb-10 md:grid-cols-2 lg:grid-cols-3 lg:pb-12 xl:grid-cols-4 min-[1340px]:bg-contain'>
        {currentArticles.data.map((article, i) => {
          return (
            <ArticleCard
              key={article.id}
              title={article.attributes?.heading || ''}
              date={
                article.attributes?.publishedAt
                  ? formatDate(article.attributes.publishedAt)
                  : ''
              }
              description={article.attributes?.content || ''}
              onClick={() => {
                article.id && setModal(article.id)
              }}
            />
          )
        })}
      </div>

      {/* @ts-expect-error */}
      {currentArticles?.meta?.pagination?.total >
        currentArticles.data?.length && (
        <>
          <div className='mx-auto flex max-w-[1296px] justify-center px-12'>
            <button
              title='Další články'
              aria-label='Další články'
              onClick={() => setShouldFetch(true)}
              className='scale-100 transform transition-transform duration-300 ease-in-out hover:scale-105'
            >
              <PlusCircleIcon />
            </button>
          </div>
          {isLoading && (
            <div className='mt-1 flex justify-center'>
              <p className='text-gray-500'>Loading...</p>
            </div>
          )}
        </>
      )}

      <AnimatePresence>
        {modal !== null && (
          <BasicModal
            title={activeArticle?.attributes?.heading || ''}
            subtitle={
              activeArticle?.attributes?.publishedAt
                ? formatDate(activeArticle?.attributes?.publishedAt)
                : ''
            }
            description={activeArticle?.attributes?.content || ''}
            onClose={() => {
              setModal(null)
            }}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

export default Articles
