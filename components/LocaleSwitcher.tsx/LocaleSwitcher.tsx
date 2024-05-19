'use client'

// Next intl
import { useLocale, useTranslations } from 'next-intl'

// Next Intl Navigation
import { useRouter, usePathname } from '@/navigation'

// Tailwind Merge
import { twMerge } from 'tailwind-merge'

type LocaleSwitcherProps = {
  className?: string
}

export default function LocaleSwitcher({ className }: LocaleSwitcherProps) {
  const t = useTranslations('LocaleSwitcher')
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const onLocaleChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale })
  }

  return (
    <div
      className={twMerge(
        `font-light text-white transition-colors hover:text-custom-brown-400`,
        className,
      )}
    >
      <button onClick={() => onLocaleChange(locale === 'cs' ? 'en' : 'cs')}>
        {locale === 'cs' ? 'EN' : 'CS'}
      </button>
    </div>
  )
}
