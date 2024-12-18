// React Focus Lock
import FocusLock from 'react-focus-lock'

// React Remove Scroll
import { RemoveScroll } from 'react-remove-scroll'

// Framer Motion
import { motion } from 'framer-motion'

// React components
import CloseIcon from '@/components/svgs/icons/CloseIcon'

// React Markdown
import Markdown from 'react-markdown'

type SpecializationModalProps = {
  title: string
  description: React.ReactNode
  onClose: () => void
}

const SpecializationModal = ({
  title,
  description,
  onClose,
}: SpecializationModalProps) => {
  return (
    <FocusLock>
      <RemoveScroll allowPinchZoom={true}>
        <div className='fixed inset-0 z-40 flex items-center justify-center'>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='absolute inset-0 bg-[hsl(0_0%_0%_/_0.4)]'
            onClick={onClose}
          />
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
            className='relative z-30 max-h-screen w-[1200px] max-w-[80vw] overflow-auto bg-white p-14 drop-shadow-custom-blue'
          >
            <button className='absolute right-12 top-5 p-4' onClick={onClose}>
              <CloseIcon />
            </button>
            <h3 className='mx-auto mb-10 max-w-[70%] text-center text-2xl font-bold leading-[1.35]'>
              <span>{title}</span>
            </h3>
            <div className='prose mx-auto w-[1100px] max-w-[85%]'>
              <Markdown>{description?.toString()}</Markdown>
            </div>
          </motion.div>
        </div>
      </RemoveScroll>
    </FocusLock>
  )
}
export default SpecializationModal
