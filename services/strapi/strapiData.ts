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

export const getCollaboratingSubjects = async (locale: string) => {
  const res = await fetchStrapi('/collaborating-subjects', {
    populate: ['content', 'logo'],
    locale,
  })

  return res as unknown as components['schemas']['CollaboratingSubjectListResponse']
}

export const getTeamMembers = async (locale: string) => {
  const res = await fetchStrapi('/team-members', {
    populate: ['content', 'name', 'position', 'about', 'image'],
    sort: 'rank:asc',
    locale,
  })

  return res as unknown as components['schemas']['TeamMemberListResponse']
}

export const getSpecializations = async (locale: string) => {
  const res = await fetchStrapi('/specializations', {
    populate: ['content'],
    locale,
  })

  return res as unknown as components['schemas']['SpecializationListResponse']
}
