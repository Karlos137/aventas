// Next.js
import Link from 'next/link'

// Framer Motion
import { motion } from 'framer-motion'

// React Remove Scroll
import { RemoveScroll } from 'react-remove-scroll'

// Data
import { MAIN_LINKS } from '../Navbar.constants'

type HamburgerMenuProps = {
  onLinkClick?: () => void
}

const HamburgerMenu = ({ onLinkClick }: HamburgerMenuProps) => {
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
            {MAIN_LINKS.map(link => {
              const { id, title, href } = link

              return (
                <Link
                  key={id}
                  href={href}
                  onClick={onLinkClick}
                  className='text-[2rem] text-white'
                >
                  <li>{title}</li>
                </Link>
              )
            })}
          </ul>
        </nav>
      </motion.div>
    </RemoveScroll>
  )
}
export default HamburgerMenu
