// Next.js
import Link from 'next/link'

// Framer Motion
import { motion } from 'framer-motion'

// Data
import { MAIN_LINKS } from '../Navbar.constants'

const HamburgerMenu = () => {
  return (
    <motion.div
      className='bg-custom-blue-800 fixed bottom-0 left-0 right-0 top-[110px] px-8 py-12'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <nav>
        <ul className='flex flex-col items-center gap-8'>
          {MAIN_LINKS.map(link => {
            const { id, title, href } = link

            return (
              <Link key={id} href={href} className='text-[2rem] text-white'>
                <li>{title}</li>
              </Link>
            )
          })}
        </ul>
      </nav>
    </motion.div>
  )
}
export default HamburgerMenu
