import { fetchStrapi } from './fetchStrapi'
import type { components } from '@/types/strapi'

export const getHomePage = async (locale: string) => {
  const res = await fetchStrapi('/homepage', {
    populate: ['hero.image', 'about'],
    locale,
  })

  return res as unknown as components['schemas']['HomepageResponse']
}
