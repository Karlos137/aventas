// Tailwind Merge
import { twMerge } from 'tailwind-merge'

// Framer Motion
import { motion } from 'framer-motion'

type HamburgerMenuButtonProps = {
  menuOpen: boolean
  toggle: () => void
}

const HamburgerMenuButton = ({
  menuOpen,
  toggle,
}: HamburgerMenuButtonProps) => {
  const lineClasses = twMerge('block h-0.5 w-16 bg-custom-brown-400')

  const topLineVariants = {
    open: {
      rotate: 45,
      y: 10,
      width: 32,
    },
    closed: {
      rotate: 0,
      y: 0,
      width: 64,
    },
  }

  const middleLineVariants = {
    open: {
      opacity: 0,
      width: 0,
    },
    closed: {
      opacity: 1,
      width: 64,
    },
  }

  const bottomLineVariants = {
    open: {
      rotate: -45,
      y: -10,
      width: 32,
    },
    closed: {
      rotate: 0,
      y: 0,
      width: 64,
    },
  }

  return (
    <motion.button
      className='flex h-10 w-16 flex-col items-center justify-center gap-2'
      onClick={() => {
        toggle()
      }}
      initial={menuOpen ? 'open' : 'closed'}
      animate={menuOpen ? 'open' : 'closed'}
    >
      <motion.span
        className={lineClasses}
        variants={topLineVariants}
      ></motion.span>
      <motion.span
        className={lineClasses}
        variants={middleLineVariants}
      ></motion.span>
      <motion.span
        className={lineClasses}
        variants={bottomLineVariants}
      ></motion.span>
      <span className='sr-only'>Hlavní menu</span>
    </motion.button>
  )
}
export default HamburgerMenuButton
