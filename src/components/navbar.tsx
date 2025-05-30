import { useState } from 'react'
import { motion } from 'framer-motion'
import logo from '../assets/logo.svg'

type Props = {
  lang: string
}

const Navbar = (props: Props) => {
  const [toggled, setToggled] = useState(false)
  const { lang } = props
  const matches = true

  const linkStyle = 'text-xl leading-6 font-jost text-primary-200'

  return (
    <div className="max-w-[1200px] px-12 xl:px-0 m-auto w-full py-11 flex justify-between items-center">
      <a href={`/${lang}`}>
        <img className="w-70" src={logo.src} alt="Logo" />
      </a>

      {/* Nav List for Desktop */}
      {matches && (
        <nav className="flex flex-row gap-6">
          {lang === 'en' ? (
            <>
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
        </nav>
      )}

      {!matches && (
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
          <a href="/" className={linkStyle}>
            Home
          </a>
          <a href="/about" className={linkStyle}>
            About Us
          </a>
          <a href="/services" className={linkStyle}>
            Services
          </a>
          <a href="/contact" className={linkStyle}>
            Contact Us
          </a>
        </motion.nav>
      )}
    </div>
  )
}

export default Navbar
