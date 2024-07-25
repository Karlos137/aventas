import { fetchStrapi } from './fetchStrapi'
import type { components } from '@/types/strapi'

export const getHomePage = async () => {
  const res = await fetchStrapi('/homepage', {
    populate: [],
  })

  return res as unknown as components['schemas']['Homepage']
}
