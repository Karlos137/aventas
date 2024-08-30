'use client'

// React
import { useState } from 'react'

// Types
import { components } from '@/types/strapi'

// React components
import ArticleCard from './ArticleCard'
import BasicModal from '../BasicModal'

// Framer-motion
import { AnimatePresence } from 'framer-motion'

// Tailwind Merge
import { twMerge } from 'tailwind-merge'

// Utils
import { formatDate } from '@/utils/formatDate'

// const ARTICLES = [
//   {
//     id: 1,
//     detail: {
//       title: 'Aktualita 1',
//       date: '26/6/2024',
//       description:
//         'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ',
//     },
//   },
//   {
//     id: 2,
//     detail: {
//       title: 'Aktualita 2',
//       date: '26/6/2024',
//       description:
//         'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ',
//     },
//   },
//   {
//     id: 3,
//     detail: {
//       title: 'Aktualita 3',
//       date: '26/6/2024',
//       description:
//         'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ',
//     },
//   },
//   {
//     id: 4,
//     detail: {
//       title: 'Aktualita 4',
//       date: '26/6/2024',
//       description:
//         'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ',
//     },
//   },
// ]

type ArticleCardsProps = {
  className?: string
  articles: components['schemas']['ArticleListResponse']
}
const ArticleCards = ({ className, articles }: ArticleCardsProps) => {
  const [modal, setModal] = useState<number | null>(null)

  const activeArticle = articles?.data?.find(article => article.id === modal)

  if (!articles?.data || articles?.data?.length === 0) {
    return <></>
  }

  return (
    <div
      className={twMerge(
        'mx-auto grid max-w-[1271px] grid-cols-1 gap-x-[1.125rem] gap-y-[3.125rem] bg-[url("/images/specializations-bg.svg")] bg-contain bg-center bg-no-repeat px-[1.75rem] py-4 pb-10 md:grid-cols-2 lg:grid-cols-3 lg:pb-12 xl:grid-cols-4 min-[1340px]:bg-contain',
        className,
      )}
    >
      {articles.data.map((article, i) => {
        if (article.attributes?.link) {
          return (
            <a
              key={article.id}
              target='_blank'
              href={article.attributes.link}
              rel='norefferer noopener'
            >
              <ArticleCard
                title={article.attributes?.heading || ''}
                date={
                  article.attributes?.publishedAt
                    ? formatDate(article.attributes.publishedAt)
                    : ''
                }
                description={article.attributes?.content || ''}
              />
            </a>
          )
        }

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
export default ArticleCards
