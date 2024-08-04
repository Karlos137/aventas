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
