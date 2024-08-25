// React components

import Hero from '../Hero'

// Types
import type { components } from '@/types/strapi'

type HeaderProps = {
  hero: {
    heading: string
    image?: components['schemas']['HomepageHeroComponent']['image']
  }
}

const Header = ({ hero }: HeaderProps) => {
  return (
    <header className='flex flex-col lg:min-h-[calc(100vh_-_110px)]'>
      <Hero
        heading={hero.heading}
        image={hero.image}
        className='lg:flex-grow'
      />
    </header>
  )
}
export default Header
