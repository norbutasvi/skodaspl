import React from 'react'
import Link from 'next/link';

function Footer({ footer }) {
    return (
        <footer>
        <div className="wrapper">
          <div className="col logo">
            <img src={`${footer.logo.url}`} />
            <p className="bolded">{footer.imones_pavadinimas}</p>
            <p>{footer.imones_kodas}</p>
            <p>{footer.adresas}</p>
          </div>
          <div className="col">
            <ul>
            <Link passHref href={`/`}>
            <a>
              <li>
                <img className="arrow-icon" src="https://res.cloudinary.com/skodas-lt/image/upload/v1632993580/216279_location_arrow_icon_1_sji12i.svg" />
                <div className="text">
                {footer.apie_mus}
                </div>
              </li>
            </a>
            </Link>
            <Link passHref href={`/categories`}>
            <a>
              <li>
                <img className="arrow-icon" src="https://res.cloudinary.com/skodas-lt/image/upload/v1632993580/216279_location_arrow_icon_1_sji12i.svg" />
                <div className="text">
                {footer.parduodama_iranga}
                </div>
              </li>
            </a>
            </Link>
            <Link passHref href={`/services`}>
            <a>
              <li>
                <img className="arrow-icon" src="https://res.cloudinary.com/skodas-lt/image/upload/v1632993580/216279_location_arrow_icon_1_sji12i.svg" />
                <div className="text">
                {footer.paslaugos}
                </div>
              </li>
            </a>
            </Link>
            <Link passHref href={`/contact`}>
            <a>
              <li>
                <img className="arrow-icon" src="https://res.cloudinary.com/skodas-lt/image/upload/v1632993580/216279_location_arrow_icon_1_sji12i.svg" />
                <div className="text">
                {footer.kontaktai}
                </div>
              </li>
            </a>
            </Link>
            </ul>
          </div>
          <div className="col">
            <h3>{footer.kontaktai}</h3>
            <p>{footer.telefonas}</p>
            <p>{footer.el_pastas}</p>
          </div>
        </div>
        <div className="copyright">
          Copyright © 2021. Made by <a href="https://northweb.lt">northweb.lt</a>
        </div>
      </footer>
    )
}

export default Footer
