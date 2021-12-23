import Head from 'next/head'
import SwiperCore, {Navigation, Pagination, Autoplay} from 'swiper';
import 'swiper/css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useRouter } from 'next/router'
import { getUrl } from '../../services/getUrl';

SwiperCore.use([Navigation, Pagination, Autoplay]);

export async function getStaticProps(context) {

  let page;
  page = await fetch(`${getUrl()}/partneriai?_locale=pl-PL`);
  const pageData = await page.json();

  let header;
  header = await fetch(`${getUrl()}/header?_locale=pl-PL`);
  const headerData = await header.json();

  let footer;
  footer = await fetch(`${getUrl()}/footer?_locale=pl-PL`);
  const footerData = await footer.json();

  return {
    props: {
      page: pageData,
      header: headerData,
      footer: footerData,
    },
    revalidate: 10
  }
}

export default function Index({ page, header, footer}) {

  const router = useRouter()

  return (
    <div>
      <Head>
        <title>SKODAS.LT</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap" rel="stylesheet" />
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header header={header} />
          <div className="partners-content">
            <h1>{page.title}</h1>
            <div className="wrapper">
              <div className="image">
                <img src={page.image.url} />
              </div>
              <div className="paragraph" dangerouslySetInnerHTML={{ __html: page.content }} />
            </div>
          </div>
      </main>
        <Footer footer={footer} />
    </div>
  )
}
