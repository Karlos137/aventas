'use client'

// Next intl
import { useLocale } from 'next-intl'

// Next Intl Navigation
import { useRouter, usePathname } from '@/navigation'

// Tailwind Merge
import { twMerge } from 'tailwind-merge'

type LocaleSwitcherProps = {
  className?: string
}

export default function LocaleSwitcher({ className }: LocaleSwitcherProps) {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const onLocaleChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale as 'cs' | 'en' })
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
