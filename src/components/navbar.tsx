import { useState } from 'react'
import LanguagePicker from './languagePicker'
import { motion } from 'framer-motion'
import { useTranslations } from '../i18n/utils'
import type { ui } from '@/i18n/ui.ts'

import logo from '../assets/logo.svg'

type Props = {
  lang: string
}

const Navbar = (props: Props) => {
  const [toggled, setToggled] = useState(false)
  const { lang } = props
  let objLang = lang as keyof typeof ui
  const t = useTranslations(objLang)
  // const matches = useMediaQuery('(min-width: 1280px)')

  const linkStyle = 'text-xl leading-6 font-jost text-primary-200'

  return (
    <div className="max-w-[1200px] px-12 xl:px-0 m-auto w-full py-11 flex justify-between items-center">
      <a href={`/${lang}`}>
        <img className="w-70" src={logo.src} alt="Logo" />
      </a>

      {/* Nav List for Desktop */}

      <nav className="flex flex-row gap-6">
        <a href={`${lang === 'en' ? '/en/booking' : '/nl/boeking'}`} className={linkStyle}>
          {t('nav.booking')}
        </a>
        <a href={`${lang === 'en' ? '/en/facilities' : '/nl/faciliteiten'}`} className={linkStyle}>
          {t('nav.facilities')}
        </a>
        <a href={`${lang === 'en' ? '/en/photos' : '/nl/fotos'}`} className={linkStyle}>
          {t('nav.photos')}
        </a>
        <a href={`${lang === 'en' ? '/en/' : '/nl/'}contact`} className={linkStyle}>
          Contact
        </a>
        <LanguagePicker lang={lang} />
      </nav>

      {/* {!matches && (
        <div onClick={() => setToggled(!toggled)} className="space-y-1 cursor-pointer">
          <motion.span
            animate={{ rotateZ: toggled ? 45 : 0, y: toggled ? 8 : 0 }}
            className="block h-0.5 w-8 bg-black"
          ></motion.span>
          <motion.span
            animate={{ width: toggled ? 0 : 24 }}
            className="block h-0.5 w-6 bg-black"
          ></motion.span>
          <motion.span
            animate={{
              rotateZ: toggled ? -45 : 0,
              y: toggled ? -8 : 0,
              width: toggled ? 32 : 16,
            }}
            className="block h-0.5 w-4 bg-black"
          ></motion.span>
        </div>
      )}

      {toggled && !matches && (
        <motion.nav
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col fixed h-screen bg-white w-[75%] md:w-[90%] text-black bottom-0 left-0 gap-6 items-center justify-center"
        >
          {lang === 'en' ? (
            <>
              <a href="/en" className={linkStyle}>
                Home
              </a>
              <a href="/en/booking" className={linkStyle}>
                Booking
              </a>
              <a href="/en/facilities" className={linkStyle}>
                Facilities
              </a>
              <a href="/en/photos" className={linkStyle}>
                Photos
              </a>
              <a href="/en/contact" className={linkStyle}>
                Contact
              </a>
            </>
          ) : (
            <>
              <a href="/nl" className={linkStyle}>
                Home
              </a>
              <a href="/nl/boeking" className={linkStyle}>
                Boeking
              </a>
              <a href="/nl/faciliteiten" className={linkStyle}>
                Faciliteiten
              </a>
              <a href="/nl/fotos" className={linkStyle}>
                Fotos
              </a>
              <a href="/nl/contact" className={linkStyle}>
                Contact
              </a>
            </>
          )}
        </motion.nav>
      )} */}
    </div>
  )
}

export default Navbar
