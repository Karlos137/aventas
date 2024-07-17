// React components
import SectionTitle from '../SectionTitle'
import ArticleCards from '../ArticleCards'

type ArticlesSectionProps = {
  className?: string
}

const ArticlesSection = ({ className }: ArticlesSectionProps) => {
  return (
    <section id='specializace' className={className}>
      <SectionTitle className='mx-auto max-w-[1296px] px-12 md:mb-20 lg:text-center'>
        Aktuality
      </SectionTitle>
      <div>
        <ArticleCards />
      </div>
    </section>
  )
}
export default ArticlesSection
