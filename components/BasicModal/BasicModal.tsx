// React Focus Lock
import FocusLock from 'react-focus-lock'

// React
import { ReactNode } from 'react'

// Framer Motion
import { motion } from 'framer-motion'

// Hooks
import { useLockBodyScroll } from '@uidotdev/usehooks'

// React components
import CloseIcon from '@/components/svgs/icons/CloseIcon'

// React Markdown
import Markdown from 'react-markdown'

type BasicModalProps = {
  title: string
  subtitle?: string
  description: ReactNode
  onClose: () => void
}

const BasicModal = ({
  title,
  subtitle,
  description,
  onClose,
}: BasicModalProps) => {
  useLockBodyScroll()
  return (
    <div className='fixed inset-0 z-40 flex items-center justify-center'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className='absolute inset-0 bg-[hsl(0_0%_0%_/_0.4)]'
        onClick={onClose}
      />
      <FocusLock>
        <motion.div
          initial={{ scale: 0.75, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 1,
            transition: {
              ease: 'easeOut',
              duration: 0.15,
            },
          }}
          exit={{
            scale: 0.75,
            opacity: 0,
            transition: {
              ease: 'easeIn',
              duration: 0.15,
            },
          }}
          className='relative z-30 max-h-screen w-[1200px] max-w-[80vw] overflow-auto bg-white py-4 drop-shadow-custom-blue lg:p-14'
        >
          <button
            className='absolute right-4 h-6 w-6 p-1 lg:right-12 lg:top-5 lg:h-auto lg:w-auto lg:p-4'
            onClick={onClose}
          >
            <CloseIcon />
          </button>
          <h3 className='mx-auto mb-10 max-w-[70%] text-center text-2xl font-bold leading-[1.35]'>
            <span>{title}</span>
            {subtitle && (
              <>
                <br />
                <span>{subtitle}</span>
              </>
            )}
          </h3>
          <div className='prose mx-auto max-h-[60vh] w-[1100px] max-w-[85%]'>
            {description && (
              <div className='pb-8'>
                {typeof description === 'string' ? (
                  <Markdown>{description}</Markdown>
                ) : (
                  description
                )}
              </div>
            )}
          </div>
        </motion.div>
      </FocusLock>
    </div>
  )
}
export default BasicModal
