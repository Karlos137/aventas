'use client'

// React components
import AventasLogo from '../svgs/AventasLogo'

// Next intl
import { useTranslations } from 'next-intl'

const Footer = () => {
  const t = useTranslations('Footer')
  return (
    <footer className='mx-auto max-w-[1296px] px-8 lg:px-12'>
      <div className='flex flex-col items-center gap-11'>
        <AventasLogo />
        <p className='text-center'>
          {t('title')}
          <br />
          {t('textOne')}
          <br />
          {t('textTwo')}{' '}
          <a
            href='https://www.cak.cz/scripts/detail.php?id=15607'
            title='Česká advokátní komora'
            rel='noopener norefferer'
            className='underline hover:no-underline'
            target='_blank'
          >
            https://www.cak.cz/scripts/detail.php?id=15607
          </a>
        </p>
      </div>
      <div className='mt-14 flex flex-col items-center gap-6 border-t border-t-custom-gray-800 py-8 lg:flex-row lg:justify-between'>
        <p>{`© ${new Date().getFullYear()} AVENTAS All rights reserved.`}</p>
        <div className='flex flex-col gap-6 text-center lg:flex-row'>
          <a
            href='/AVENTAS_Zasady_GDPR.pdf'
            className='underline hover:no-underline'
            rel='noopener norefferer'
            target='_blank'
          >
            {t('personal')}
          </a>
          {/* <a
            href='/'
            className='underline hover:no-underline'
            rel='noopener norefferer'
          >
            Informace o používání Cookies
          </a> */}
        </div>
      </div>
    </footer>
  )
}
export default Footer
