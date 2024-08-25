// React components
import Articles from '@/components/Articles'

// Services (Strapi)
import { getArticles } from '@/services/strapi/strapiData'

const ArticlesPage = async ({
  params: { locale },
}: {
  params: { locale: string }
}) => {
  const articles = await getArticles(locale, 0, 3, true)

  return (
    <>
      <Articles articles={articles} />
    </>
  )
}

export default ArticlesPage
