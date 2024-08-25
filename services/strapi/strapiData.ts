import { fetchStrapi } from './fetchStrapi'
import type { components } from '@/types/strapi'

export const getHomePage = async (locale: string) => {
  const res = await fetchStrapi('/homepage', {
    populate: [
      'hero.image',
      'about',
      'specializations',
      'ourTeam',
      'articles',
      'collaboratingSubjects',
      'references',
      'contact.contactSection',
      'contact.contactInfoSection',
      'contact.contactOfficeSection',
    ],
    locale,
  })

  return res as unknown as components['schemas']['HomepageResponse']
}

export const getArticles = async (
  locale: string,
  start: number,
  limit: number,
  withCount?: boolean,
) => {
  const res = await fetchStrapi('/articles', {
    populate: ['content'],
    locale,
    'pagination[start]': start || 0,
    'pagination[limit]': limit,
    'pagination[withCount]': withCount,
  })

  return res as unknown as components['schemas']['ArticleListResponse']
}
