import React, { useState } from 'react'
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

function Header({ header }) {

  const [showMenu, setShowMenu] = useState(false);

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
              </div>
            </div>
          <div className="wrapper flex">
            <div className="logo">
              <Link href={`/`}>
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
                  <Link href="/">
                  <a>
                      <li>{header.apie_mus}</li>
                  </a>
                  </Link>
                  <Link href="/categories">
                  <a>
                      <li>{header.parduodama_iranga}</li>
                  </a>
                  </Link>
                  <Link href="/services">
                  <a>
                      <li>{header.paslaugos}</li>
                  </a>
                  </Link>
                  <Link href="/partners">
                  <a>
                      <li>{header.partneriai}</li>
                  </a>
                  </Link>
                  <Link href="/contacts">
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
                  <Link href="/">
                  <a>
                      <li>{header.apie_mus}</li>
                  </a>
                  </Link>
                  <Link href="/categories">
                  <a>
                      <li>{header.parduodama_iranga}</li>
                  </a>
                  </Link>
                  <Link href="/services">
                  <a>
                      <li>{header.paslaugos}</li>
                  </a>
                  </Link>
                  <Link href="/partners">
                  <a>
                      <li>{header.partneriai}</li>
                  </a>
                  </Link>
                  <Link href="/contacts">
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
