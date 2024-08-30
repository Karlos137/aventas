'use client'

// Next.js
import Link from 'next/link'

// Framer Motion
import { motion } from 'framer-motion'

// React Remove Scroll
import { RemoveScroll } from 'react-remove-scroll'

// Data
import { MAIN_LINKS_CZ, MAIN_LINKS_EN } from '../Navbar.constants'

// Next intl
import { useTranslations } from 'next-intl'
import LocaleSwitcher from '@/components/LocaleSwitcher.tsx/LocaleSwitcher'

type HamburgerMenuProps = {
  onLinkClick?: () => void
}

const HamburgerMenu = ({ onLinkClick }: HamburgerMenuProps) => {
  const t = useTranslations('Navbar')
  const mainLinks = t('lan') === 'cs' ? MAIN_LINKS_CZ : MAIN_LINKS_EN
  return (
    <RemoveScroll>
      <motion.div
        className='fixed inset-0 z-20 overflow-auto bg-custom-blue-800 px-8 pb-8 pt-[9.375rem]'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <nav>
          <ul className='flex flex-col items-center gap-8'>
            {mainLinks.map(link => {
              const { id, title, href } = link

              return (
                <Link
                  key={id}
                  href={href}
                  onClick={onLinkClick}
                  className='text-center text-[1.5rem] text-white'
                >
                  <li>{title}</li>
                </Link>
              )
            })}
            <LocaleSwitcher className='mt-2 text-2xl' />
          </ul>
        </nav>
      </motion.div>
    </RemoveScroll>
  )
}
export default HamburgerMenu
