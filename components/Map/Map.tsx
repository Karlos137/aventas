type MapProps = {
  className?: string
}

const Map = ({ className }: MapProps) => {
  return (
    <div className={className}>
      <div className='hidden lg:block'>
        <iframe
          title='Aventas mapa'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2562.3210732114585!2d14.448800700000003!3d50.04281640000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b93f25c844b4f%3A0x564f9e86006e42fc!2sA.%20Sta%C5%A1ka%202027%2F79%2C%20140%2000%20Praha%204!5e0!3m2!1scs!2scz!4v1692962589032!5m2!1scs!2scz'
          width='100%'
          height={456}
          style={{
            border: 0,
            filter: 'invert(100%)',
          }}
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        />
      </div>
      <div className='lg:hidden'>
        <iframe
          title='Aventas mapa'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2562.3210732114585!2d14.448800700000003!3d50.04281640000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b93f25c844b4f%3A0x564f9e86006e42fc!2sA.%20Sta%C5%A1ka%202027%2F79%2C%20140%2000%20Praha%204!5e0!3m2!1scs!2scz!4v1692962589032!5m2!1scs!2scz'
          width='100%'
          height={375}
          style={{
            border: 0,
            filter: 'invert(100%)',
          }}
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        />
      </div>
    </div>
  )
}
export default Map
