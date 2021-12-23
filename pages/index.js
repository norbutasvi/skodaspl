import Head from 'next/head'
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Navigation, Pagination, Autoplay} from 'swiper';
import 'swiper/css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useRouter } from 'next/router'
import { getUrl } from '../services/getUrl';

SwiperCore.use([Navigation, Pagination, Autoplay]);

export async function getStaticProps(context) {


  const page = await fetch(`${getUrl()}/pagrindinis?_locale=pl-PL`);
  const pageData = await page.json();

  const header = await fetch(`${getUrl()}/header?_locale=pl-PL`);
  const headerData = await header.json();

  const footer = await fetch(`${getUrl()}/footer?_locale=pl-PL`);
  const footerData = await footer.json();

  return {
    props: {
      page: pageData,
      header: headerData,
      footer: footerData,
    },
    revalidate: 2
  }
}

export default function Home({ page, header, footer }) {

  const router = useRouter()

  return (
    <div>
      <Head>
        <title>SKODAS.PL</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap" rel="stylesheet" />
        <meta name="description" content="skodas.lt" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header header={header}/>
        <Swiper
            // spaceBetween={50}
            // modules={[Navigation, Pagination]}
            slidesPerView={1}
            onSwiper={(swiper) => console.log(swiper)}
            navigation
            pagination={{ clickable: true }}
            autoplay
          >
            {
              page.Slideshow.images.map(image =>
                <SwiperSlide key={image._id}>
                  <div className="slide-item" style={{ backgroundImage: `url('${image.url}')`}}>
                    
                  </div>
                </SwiperSlide>
                )
            }
          </Swiper>
          <div className="about-content">
            <div className="wrapper">
              <div className="text">
                <h2>{page.title}</h2>
                <div className="paragraph" dangerouslySetInnerHTML={{ __html: page.content }} />
              </div>
            </div>
          </div>
      </main>
        <Footer footer={footer}/>
    </div>
  )
}
