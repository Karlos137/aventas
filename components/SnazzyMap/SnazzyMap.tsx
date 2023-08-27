type SnazzyMapProps = {
  className?: string
}

const SnazzyMap = ({ className }: SnazzyMapProps) => {
  return (
    <div className={className}>
      <div className='hidden lg:block'>
        <iframe
          src='https://snazzymaps.com/embed/519160'
          width='100%'
          height={456}
          style={{
            border: 0,
          }}
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        />
      </div>
      <div className='lg:hidden'>
        <iframe
          src='https://snazzymaps.com/embed/519160'
          width='100%'
          height={375}
          style={{
            border: 0,
          }}
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        />
      </div>
    </div>
  )
}
export default SnazzyMap
