// Tailwind Merge
import { twMerge } from 'tailwind-merge'

// React components
import Header from '@/components/Header'
import AboutUsSection from '@/components/AboutUsSection/AboutUsSection'
import SpecializationSection from '@/components/SpecializationSection'
import OurTeamSection from '@/components/OurTeamSection'
import CollaboratingSubjectsSection from '@/components/CollaboratingSubjectsSection'
import ContactSection from '@/components/ContactSection'
import References from '@/components/References'
import ArticlesSection from '@/components/ArticlesSection'

// Services (Strapi)
import {
  getHomePage,
  getArticles,
  getCollaboratingSubjects,
  getTeamMembers,
  getSpecializations,
  getReferences,
} from '@/services/strapi/strapiData'

// Constants
import { ARTICLES_HOMEPAGE_LIMIT } from '@/constants/articles'

const Home = async ({ params: { locale } }: { params: { locale: string } }) => {
  const homepageData = getHomePage(locale)
  const articlesData = getArticles(locale, 0, ARTICLES_HOMEPAGE_LIMIT)
  const collaboratingSubjectsData = getCollaboratingSubjects(locale)
  const teamMembersData = getTeamMembers(locale)
  const specializationsData = getSpecializations(locale)
  const referencesData = getReferences(locale)

  // Initiate both requests in parallel
  const [
    homepage,
    articleList,
    collaboratingSubjectsList,
    specializationList,
    teamMembersList,
    referencesList,
  ] = await Promise.all([
    homepageData,
    articlesData,
    collaboratingSubjectsData,
    specializationsData,
    teamMembersData,
    referencesData,
  ])

  const {
    hero,
    about,
    specializations,
    ourTeam,
    articles,
    collaboratingSubjects,
    references,
    contact,
  } = homepage.data?.attributes || {}

  const scrollMarginClass = 'scroll-mt-32'

  return (
    <>
      <Header
        hero={{
          heading: hero?.text || '',
          image: hero?.image,
        }}
      />
      <AboutUsSection
        className={twMerge('pt-12 lg:pt-20', scrollMarginClass)}
        heading={about?.heading || ''}
        description={about?.description || ''}
      />
      {articleList?.data && articleList?.data?.length > 0 && (
        <ArticlesSection
          heading={articles?.heading || ''}
          articles={articleList}
          className='scroll-mt-32 pt-20 lg:scroll-mt-0'
        />
      )}
      {specializationList?.data && specializationList?.data?.length > 0 && (
        <SpecializationSection
          heading={specializations?.heading || ''}
          content={specializationList}
          className='mt-12 scroll-mt-32'
        />
      )}
      {teamMembersList?.data && teamMembersList?.data?.length > 0 && (
        <OurTeamSection
          heading={ourTeam?.heading || ''}
          members={teamMembersList || ''}
          className={scrollMarginClass}
        />
      )}
      {collaboratingSubjectsList?.data &&
        collaboratingSubjectsList?.data?.length > 0 && (
          <CollaboratingSubjectsSection
            heading={collaboratingSubjects?.heading || ''}
            collabs={collaboratingSubjectsList}
            className='scroll-mt-32 pt-20 lg:scroll-mt-16'
          />
        )}
      {referencesList?.data && referencesList?.data?.length > 0 && (
        <References
          heading={references?.heading || ''}
          references={referencesList}
          className='mt-12 scroll-mt-32 lg:mt-20'
        />
      )}

      <ContactSection
        heading={contact?.heading || ''}
        contact={contact?.contactSection}
        contactInfo={contact?.contactInfoSection}
        contactOffice={contact?.contactOfficeSection}
        linkedInLink={contact?.linkedInLink}
        facebookLink={contact?.facebookLink}
        className={twMerge('mb-12 pt-12 lg:pt-20', scrollMarginClass)}
      />
    </>
  )
}
export default Home
