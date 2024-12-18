// React components
import MailIcon from '@/components/svgs/icons/MailIcon'
import PhoneIcon from '@/components/svgs/icons/PhoneIcon'
import InfoIcon from '@/components/svgs/icons/InfoIcon'
import PinIcon from '@/components/svgs/icons/PinIcon'
import LinkedInIcon from '@/components/svgs/icons/LinkedInIcon'
import FacebookIcon from '@/components/svgs/icons/FacebookIcon'

// Tailwind Merge
import { twMerge } from 'tailwind-merge'

type ContactProps = {
  className?: string
  icon: string
  title?: string
  description?: React.ReactNode
  links?: { title: string; href: string }[]
}

const Contact = ({
  className,
  icon,
  title,
  description,
  links,
}: ContactProps) => {
  const getIcon = () => {
    switch (icon) {
      case 'mailAndPhone':
        return (
          <div className='flex items-center justify-center gap-3'>
            <MailIcon />
            <PhoneIcon />
          </div>
        )
      case 'pin':
        return <PinIcon />
      case 'linkedIn':
        return <LinkedInIcon />
      case 'facebook':
        return <FacebookIcon />
      default:
        return <InfoIcon />
    }
  }
  return (
    <div
      className={twMerge(
        'flex min-w-[260px] flex-col items-center text-center lg:min-w-[300px]',
        className,
      )}
    >
      <div className='min-h-[50px]'>{getIcon()}</div>
      {title && <h3 className='mb-2 mt-1 text-2xl font-bold'>{title}</h3>}
      {description && <div>{description}</div>}
      {links && (
        <div className='flex flex-col items-center justify-center gap-4'>
          {links.map(link => {
            return (
              <a
                key={link.href}
                href={link.href}
                title={link.title}
                className='block w-fit text-black underline hover:no-underline'
                target='_blank'
              >
                {link.title}
              </a>
            )
          })}
        </div>
      )}
    </div>
  )
}
export default Contact
