'use client'
import '@/promisePolyfill'

// SWR
import useSWR from 'swr'

// React
import { useState, useRef, useLayoutEffect, useEffect } from 'react'

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
import { twMerge } from 'tailwind-merge'

// React PDF
import { pdfjs, Document, Page } from 'react-pdf'

// React Markdown
import Markdown from 'react-markdown'

type ArticlesProps = {
  articles: components['schemas']['ArticleListResponse']
  heading?: string
}

if (typeof Promise.withResolvers === 'undefined') {
  if (window)
    // @ts-expect-error This does not exist outside of polyfill which this is doing
    window.Promise.withResolvers = function () {
      let resolve, reject
      const promise = new Promise((res, rej) => {
        resolve = res
        reject = rej
      })
      return { promise, resolve, reject }
    }
}

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`

const Articles = ({ articles, heading }: ArticlesProps) => {
  const t = useTranslations('Articles')
  const locale = useLocale()

  const [shouldFetch, setShouldFetch] = useState(false)
  const [currentArticles, setCurrentArticles] = useState<
    components['schemas']['ArticleListResponse'] | null
  >(() => articles)
  const [modal, setModal] = useState<number | null>(null)

  const [numPages, setNumPages] = useState<number>()
  const [pageNumber, setPageNumber] = useState<number>(1)
  const pdfWrapperRef = useRef<HTMLInputElement>(null)
  const [width, setWidth] = useState<number>()

  useEffect(() => {
    if (!modal) {
      setPageNumber(1)
    }
  }, [modal])

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages)
  }

  const { isLoading } = useSWR(
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

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver(entries => {
      for (const entry of entries) {
        setWidth(entry?.target?.clientWidth * 0.7)
      }
    })
    pdfWrapperRef?.current && resizeObserver.observe(pdfWrapperRef.current)

    return () => {
      resizeObserver.disconnect()
    }
  }, [activeArticle?.attributes?.pdf?.data?.attributes?.url])

  const pdfContent = activeArticle?.attributes?.pdf?.data?.attributes?.url ? (
    <div
      className='flex flex-col items-center justify-center'
      ref={pdfWrapperRef}
    >
      {activeArticle?.attributes?.content && (
        <Markdown className='mb-8'>
          {activeArticle?.attributes?.content}
        </Markdown>
      )}
      <embed
        src={activeArticle?.attributes?.pdf?.data?.attributes?.url}
        width='100%'
        height='760px'
      />
      {/* <Document
        file={activeArticle?.attributes?.pdf?.data?.attributes?.url || ''}
        onLoadSuccess={onDocumentLoadSuccess}
        className='border-2 border-custom-brown-400'
      >
        <Page
          renderTextLayer={false}
          renderAnnotationLayer={false}
          pageNumber={pageNumber}
          width={width || undefined}
        />
      </Document> */}
      {/* <div className='mt-4 flex items-center justify-between gap-8'>
        <div>
          {pageNumber} / {numPages}
        </div>
        <div className='flex items-center gap-4'>
          <button
            onClick={() =>
              setPageNumber(prev => {
                if (numPages) {
                  if (prev - 1 < 1) {
                    return prev
                  } else {
                    return prev - 1
                  }
                } else {
                  return prev
                }
              })
            }
            className={twMerge(
              'text-lg text-custom-brown-600',
              pageNumber === 1 && 'text-neutral-200',
            )}
          >
            &lt;
          </button>
          <button
            onClick={() =>
              setPageNumber(prev => {
                if (numPages) {
                  if (prev + 1 > numPages) {
                    return prev
                  } else {
                    return prev + 1
                  }
                } else {
                  return prev
                }
              })
            }
            className={twMerge(
              'text-lg text-custom-brown-600',
              pageNumber === numPages && 'text-neutral-200',
            )}
          >
            &gt;
          </button>
        </div>
      </div> */}
      <div className='mt-4 flex justify-center text-center'>
        <a
          href={activeArticle?.attributes?.pdf?.data?.attributes?.url || ''}
          download={true}
          target='_blank'
          rel='noreferrer noopener'
          className='text-lg text-custom-brown-600 hover:no-underline'
        >
          Download
        </a>
      </div>
    </div>
  ) : null

  const articleContent = (
    <Markdown>{activeArticle?.attributes?.content || ''}</Markdown>
  )

  if (!currentArticles?.data || currentArticles?.data?.length === 0) {
    return <></>
  }

  return (
    <div className='pb-16 pt-12 lg:pb-24 lg:pt-16'>
      <SectionTitle className='mx-auto max-w-[1296px] px-12 md:mb-20 lg:text-center'>
        {heading ? heading : t('title')}
      </SectionTitle>

      <div className='mx-auto grid max-w-[1271px] grid-cols-1 gap-x-[1.125rem] gap-y-[3.125rem] bg-[url("/images/specializations-bg.svg")] bg-contain bg-center bg-no-repeat px-[1.75rem] py-4 pb-10 md:grid-cols-2 lg:grid-cols-3 lg:pb-12 xl:grid-cols-4 min-[1340px]:bg-contain'>
        {currentArticles.data.map((article, i) => {
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
                  description={article.attributes?.perex || ''}
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
              description={article.attributes?.perex || ''}
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
              className={
                'scale-100 transform animate-spin text-custom-brown-400 transition-transform duration-300 ease-in-out hover:scale-105 disabled:text-neutral-300'
              }
              disabled={isLoading}
            >
              <PlusCircleIcon
                className={twMerge(
                  'text-custom-brown-400',
                  isLoading && 'animate-spin text-neutral-300',
                )}
              />
            </button>
          </div>
        </>
      )}

      <AnimatePresence>
        {modal !== null && (
          <BasicModal
            title={activeArticle?.attributes?.heading || ''}
            subtitle={
              // activeArticle?.attributes?.publishedAt
              //   ? formatDate(activeArticle?.attributes?.publishedAt)
              //   : ''
              ''
            }
            description={pdfContent || articleContent || ''}
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
