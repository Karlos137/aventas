'use client'

// React
import { useState, useRef, useLayoutEffect } from 'react'

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

// React PDF
import { pdfjs, Document, Page } from 'react-pdf'

// React Markdown
import Markdown from 'react-markdown'

type ArticleCardsProps = {
  className?: string
  articles: components['schemas']['ArticleListResponse']
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

const ArticleCards = ({ className, articles }: ArticleCardsProps) => {
  const [modal, setModal] = useState<number | null>(null)
  const [numPages, setNumPages] = useState<number>()
  const [pageNumber, setPageNumber] = useState<number>(1)
  const pdfWrapperRef = useRef<HTMLInputElement>(null)
  const [width, setWidth] = useState<number>()

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages)
  }

  const activeArticle = articles?.data?.find(article => article.id === modal)

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
      <Document
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
      </Document>
      <div className='mt-4 flex items-center justify-between gap-8'>
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
      </div>
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
export default ArticleCards
