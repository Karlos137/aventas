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
import { MAIN_LINKS } from './Navbar.constants'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className='bg-custom-blue-800'>
      <div className='mx-auto flex max-w-[1296px] items-center justify-between gap-4 px-8 py-7 lg:px-12'>
        <Link href='/' className='flex min-h-[54px] items-center'>
          <div className='lg:hidden'>
            <AventasLogo />
          </div>
          <div className='hidden lg:block'>
            <AventasTextLogo />
          </div>
          <span className='sr-only'>Aventas logo</span>
        </Link>
        <div className='lg:hidden'>
          <HamburgerMenuButton
            menuOpen={menuOpen}
            toggle={() => {
              const nextOpen = !menuOpen
              setMenuOpen(nextOpen)
            }}
          />
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
        <div className='hidden lg:block'>
          <nav>
            <ul className='flex items-center gap-8'>
              {MAIN_LINKS.map(link => {
                const { id, title, href } = link

                return (
                  <li key={id}>
                    <Link
                      href={href}
                      className='text-white transition-colors hover:text-custom-brown-400'
                    >
                      {title}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}
export default Navbar
