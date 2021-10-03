import React, { useState } from 'react'
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

function Header({ header, locale, asPath, type, otherLocales }) {

  const [showMenu, setShowMenu] = useState(false);

  const generateFlagUrl = (locale) => {
    if (locale == 'lt-LT') {
      return 'https://res.cloudinary.com/skodas-lt/image/upload/v1632903643/220px-Flag_of_Lithuania__1918_1940_.svg_bwoakt.png';
    }
    if (locale == 'en') {
      return 'https://res.cloudinary.com/skodas-lt/image/upload/v1632903643/Flag_of_Great_Britain__1707_1800_.svg_nnf3in.png';
    }
    if (locale == 'ru') {
      return 'https://res.cloudinary.com/skodas-lt/image/upload/v1632903643/1200px-Flag_of_Russia.svg_a6qkmq.png';
    }
  }

    return (
        <div className="header">
            <div className="contacts">
              <div className="wrapper">
                <div className="item">
                  <img src="https://res.cloudinary.com/skodas-lt/image/upload/v1632667549/phone_xahu9r.svg" />
                  <p>{header.phone}</p>
                </div>
                <div className="item">
                  <img src="https://res.cloudinary.com/skodas-lt/image/upload/v1632667648/email_r2ewsk.svg" />
                  <p>{header.email}</p>
                </div>

                {
                  (type == 'categories' || type == 'home' || type == 'services')  &&

                  <div className="item flags">
                  <Link href={`${asPath}`} locale="lt-LT" passHref>
                    <a>
                  <img className="flag" src="https://res.cloudinary.com/skodas-lt/image/upload/v1632903643/220px-Flag_of_Lithuania__1918_1940_.svg_bwoakt.png" />
                  </a>
                  </Link>
                  <Link href={`${asPath}`} locale="ru" passHref>
                    <a>
                  <img className="flag" src="https://res.cloudinary.com/skodas-lt/image/upload/v1632903643/1200px-Flag_of_Russia.svg_a6qkmq.png" />
                  </a>
                  </Link>
                  <Link href={`${asPath}`} locale="en" passHref>
                    <a>
                  <img className="flag" src="https://res.cloudinary.com/skodas-lt/image/upload/v1632903643/Flag_of_Great_Britain__1707_1800_.svg_nnf3in.png" />
                  </a>
                  </Link>
                </div>
                }

                {
                  type == 'category' && 

                  <div className="item flags">
                    {
                      otherLocales.map(otherLocale => 
                        <Link key={otherLocale._id} href={`/categories/${otherLocale.slug}`} locale={otherLocale.locale} passHref>
                            <a>
                          <img className="flag" src={generateFlagUrl(otherLocale.locale)} />
                          </a>
                        </Link>
                        )
                    }
                </div>
                }

                {
                  type == 'product' && 

                  <div className="item flags">
                    {
                      otherLocales.map(otherLocale => 
                        <Link key={otherLocale._id}href={`/categories/${otherLocale.category.slug}/${otherLocale.slug}`} locale={otherLocale.locale} passHref>
                            <a>
                          <img className="flag" src={generateFlagUrl(otherLocale.locale)} />
                          </a>
                        </Link>
                        )
                    }
                </div>
                }

              </div>
            </div>
          <div className="wrapper flex">
            <div className="logo">
              <Link href={`/${locale}`}>
                <img src={`${header.logo.url}`} />
              </Link>
            </div>
            <div className="menu-button" onClick={() => setShowMenu(!showMenu)}><img src="https://res.cloudinary.com/skodas-lt/image/upload/v1632992007/326672_menu_icon_1_zcziqr.svg" /></div>
            <div className="navigation desktop"
                animate={{ height: 'auto'}}
                initial={{ height: 0 }}
                exit={{ height: 0 }}
                transition={{ type: "tween", duration: 1}}
              >
                <ul>
                  <Link href="/" locale={locale}>
                  <a>
                      <li>{header.apie_mus}</li>
                  </a>
                  </Link>
                  <Link href="/categories" locale={locale}>
                  <a>
                      <li>{header.parduodama_iranga}</li>
                  </a>
                  </Link>
                  <Link href="/services" locale={locale}>
                  <a>
                      <li>{header.paslaugos}</li>
                  </a>
                  </Link>
                  <Link href="/partners" locale={locale}>
                  <a>
                      <li>{header.partneriai}</li>
                  </a>
                  </Link>
                  <Link href="/contacts" locale={locale}>
                  <a>
                      <li>{header.kontaktai}</li>
                  </a>
                  </Link>
                </ul>
              </div>
            <AnimatePresence>
              {
                showMenu && 

                <motion.div className="navigation"
                animate={{ height: 'auto'}}
                initial={{ height: 0 }}
                exit={{ height: 0 }}
                transition={{ type: "tween", duration: 1}}
              >
                <ul>
                  <Link href="/" locale={locale}>
                  <a>
                      <li>{header.apie_mus}</li>
                  </a>
                  </Link>
                  <Link href="/categories" locale={locale}>
                  <a>
                      <li>{header.parduodama_iranga}</li>
                  </a>
                  </Link>
                  <Link href="/services" locale={locale}>
                  <a>
                      <li>{header.paslaugos}</li>
                  </a>
                  </Link>
                  <Link href="/partners" locale={locale}>
                  <a>
                      <li>{header.partneriai}</li>
                  </a>
                  </Link>
                  <Link href="/contacts" locale={locale}>
                  <a>
                      <li>{header.kontaktai}</li>
                  </a>
                  </Link>
                </ul>
              </motion.div>
              }
            </AnimatePresence>
          </div>
        </div>
    )
}

export default Header
