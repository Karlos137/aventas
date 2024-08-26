'use client'

// React
import { useState } from 'react'

// Next.js
import Link from 'next/link'

// Framer Motion
import { AnimatePresence } from 'framer-motion'

// React components
import AventasLogo from '../svgs/AventasLogo'
import AventasTextLogo from '../svgs/AventasTextLogo'
import HamburgerMenuButton from './HamburgerMenuButton'
import HamburgerMenu from './HamburgerMenu'

// Data
import { MAIN_LINKS_CZ, MAIN_LINKS_EN } from './Navbar.constants'

// Next intl
import { useTranslations } from 'next-intl'
import LocaleSwitcher from '../LocaleSwitcher.tsx/LocaleSwitcher'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const t = useTranslations('Navbar')
  const mainLinks = t('lan') === 'cs' ? MAIN_LINKS_CZ : MAIN_LINKS_EN

  return (
    <>
      <div className='xl:hidden'>
        <AnimatePresence>
          {menuOpen && (
            <HamburgerMenu
              onLinkClick={() => {
                setMenuOpen(false)
              }}
            />
          )}
        </AnimatePresence>
      </div>
      <div className='sticky top-0 z-30 bg-custom-blue-800'>
        <div className='mx-auto flex max-w-[1296px] items-center justify-between gap-4 px-8 py-7 lg:px-12'>
          <Link href='/' className='flex min-h-[54px] items-center'>
            <div className='md:hidden'>
              <AventasLogo />
            </div>
            <div className='hidden md:block'>
              <AventasTextLogo />
            </div>
            <span className='sr-only'>Aventas logo</span>
          </Link>
          <div className='xl:hidden'>
            <HamburgerMenuButton
              menuOpen={menuOpen}
              toggle={() => {
                const nextOpen = !menuOpen
                setMenuOpen(nextOpen)
              }}
            />
          </div>
          <div className='hidden xl:block'>
            <nav className='flex gap-8'>
              <ul className='flex items-center gap-6'>
                {mainLinks.map(link => {
                  const { id, title, href } = link

                  return (
                    <li key={id}>
                      <Link
                        href={href}
                        className='text-base text-white transition-colors hover:text-custom-brown-400'
                      >
                        {title}
                      </Link>
                    </li>
                  )
                })}
              </ul>
              <LocaleSwitcher className='text-base' />
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}
export default Navbar
