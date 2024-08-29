// React components
import Articles from '@/components/Articles'

// Services (Strapi)
import { getArticles } from '@/services/strapi/strapiData'

// Constants
import { ARTICLES_LIMIT } from '@/constants/articles'

const ArticlesPage = async ({
  params: { locale },
}: {
  params: { locale: string }
}) => {
  const articles = await getArticles(locale, 0, ARTICLES_LIMIT, true)

  return (
    <>
      <Articles articles={articles} />
    </>
  )
}

export default ArticlesPage
