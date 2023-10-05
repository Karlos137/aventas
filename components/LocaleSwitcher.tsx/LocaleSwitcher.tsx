'use client'

// Next intl
import { useLocale, useTranslations } from 'next-intl'
import { usePathname, useRouter } from 'next-intl/client'

type LocaleSwitcherProps = {
  fontSize: string
}

export default function LocaleSwitcher({ fontSize }: LocaleSwitcherProps) {
  const t = useTranslations('LocaleSwitcher')
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const onLocaleChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale })
  }

  return (
    <div
      className={`text-[${fontSize}] text-white transition-colors hover:text-custom-brown-400`}
    >
      <button onClick={() => onLocaleChange(locale === 'cz' ? 'en' : 'cz')}>
        {locale === 'cz' ? 'Cz' : 'En'}
      </button>
    </div>
  )
}
