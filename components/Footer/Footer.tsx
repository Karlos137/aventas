// React components
import AventasLogo from '../svgs/AventasLogo'

const Footer = () => {
  return (
    <footer className='mx-auto max-w-[1296px] px-8 lg:px-12'>
      <div className='flex flex-col items-center gap-11'>
        <AventasLogo />
        <p className='text-center'>
          Informace pro spotřebitele
          <br /> Spotřebitel má dle zákona č. 634/1992 Sb., o ochraně
          spotřebitele, v platném znění, právo na mimosoudní řešení
          spotřebitelského sporu vyplývajícího ze smlouvy o poskytování právních
          služeb. Pověřeným subjektem pro mimosoudní řešení spotřebitelských
          sporů mezi advokátem a spotřebitelem ze smluv o poskytování právních
          služeb je Česká advokátní komora.
          <br /> Bližší informace o mimosoudním řešení spotřebitelských sporů
          spolu s formulářem návrhu na zahájení řízení o mimosoudním řešení
          spotřebitelských sporů naleznete na webových stránkách České advokátní
          komory -{' '}
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
            href='/'
            className='underline hover:no-underline'
            rel='noopener norefferer'
          >
            Zásady ochrany osobních údajů
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
