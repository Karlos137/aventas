// React Focus Lock
import FocusLock from 'react-focus-lock'

// React Remove Scroll
import { RemoveScroll } from 'react-remove-scroll'

// React components
import CloseIcon from '@/components/svgs/icons/CloseIcon'

const SpecializationModal = () => {
  return (
    <FocusLock>
      <RemoveScroll>
        <div className='fixed inset-0 flex items-center justify-center'>
          <div className='absolute inset-0 bg-[hsl(0_0%_0%_/_0.5)]' />
          <div className='relative z-30 w-[1200px] max-w-[80vw] bg-white p-14'>
            <button className='absolute right-12 top-5 p-4'>
              <CloseIcon />
            </button>
            <h3 className='mx-auto mb-10 max-w-[70%] text-center text-2xl font-bold leading-[1.35]'>
              Test title
            </h3>
            <div className='mx-auto w-[1100px] max-w-[85%]'>
              Zvažujete rozšíření Vašeho portfolia formou vhodné akvizice nebo
              jste se rozhodli, že je čas předat Vaše podnikání do rukou nového
              investora? V oblasti fúzí a akvizic (M&A) poskytujeme komplexní
              služby od Vaší prvotní myšlenky na prodej rodinné firmy či zájmu
              rozšířit Vaše portfolio formou vhodné akvizice až po finální
              realizaci transakce a kontrolu spokojenosti a fungování po
              transakci.
            </div>
          </div>
        </div>
      </RemoveScroll>
    </FocusLock>
  )
}
export default SpecializationModal
