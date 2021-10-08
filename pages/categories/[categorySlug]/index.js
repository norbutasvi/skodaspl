import React from 'react'
import Head from 'next/head'
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Link from 'next/link';
import { useRouter } from 'next/router'
import { getUrl } from '../../../services/getUrl';

export async function getStaticProps(context) {

  const { locale, params } = context;

  let products;
  if (locale === undefined) {
    products = await fetch(`${getUrl()}/categories?slug=${params.categorySlug}`);
  } else {
    products = await fetch(`${getUrl()}/categories?_locale=${locale}&slug=${params.categorySlug}`);
  }
  const productsData = await products.json();

  let array = [];
  if (productsData.length > 0) {
    const otherLocales = productsData[0].localizations;

    otherLocales.forEach(async (locale) => {
      const category = await fetch(`${getUrl()}/categories/${locale._id}`);
      let categoryData = await category.json();
      array.push(categoryData);
    })
  }

    // const category = await fetch(`http://localhost:1337/categories/${otherLocales[0]._id}`);
    // let categoryData = await category.json();
    // console.log(categoryData);

  let categories;
  if (locale === undefined) {
    categories = await fetch(`${getUrl()}/categories`);
  } else {
    categories = await fetch(`${getUrl()}/categories?_locale=${locale}`);
  }
  const categoriesData = await categories.json();

  let header;
  if (locale === undefined) {
    header = await fetch(`${getUrl()}/header`);
  } else {
    header = await fetch(`${getUrl()}/header?_locale=${locale}`);
  }
  const headerData = await header.json();

  let footer;
  if (locale === undefined) {
    footer = await fetch(`${getUrl()}/footer`);
  } else {
    footer = await fetch(`${getUrl()}/footer?_locale=${locale}`);
  }
  const footerData = await footer.json();

  if (productsData.length === 0) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      categories: categoriesData,
      category: productsData[0],
      header: headerData,
      footer: footerData,
      locale,
      productsData,
      array
    },
    revalidate: 5
  }
}

  // This function gets called at build time
  export async function getStaticPaths({ locales }) {
    // Call an external API endpoint to get posts
    const res = await fetch(`${getUrl()}/categories?_locale=all`)
    const posts = await res.json()

    const paths = posts.map((post) => ({
      params: { categorySlug: post.slug },
    }))
  
    // const enres = await fetch(`${getUrl()}/categories?_locale=en`)
    // const enposts = await enres.json()
  
    // const rures = await fetch(`${getUrl()}/categories?_locale=ru`)
    // const ruposts = await rures.json()
  
    // const array = posts.concat(enposts, ruposts);
  
    // const paths = [];
    // array.forEach((post) => {
    //     for (const locale of locales) {
    //        paths.push({
    //           params: {
    //              categorySlug: post.slug
    //           },
    //           locale,
    //        });
    //     }
    //  });
  
    return {
        fallback: true,
        paths,
     };
  }


function Index({ header, footer, locale, category, productsData, array}) {

  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }

    return (
      <div>
    <Head>
        <title>{category.title}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap" rel="stylesheet" />
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      <Header header={header} locale={locale} asPath={router.asPath} type="category" otherLocales={array}/>
        <div className="products-content">
          <h1 className="title">{category.title}</h1>
          <div className="flex">
            <img src="https://res.cloudinary.com/skodas-lt/image/upload/v1633275407/372889_description_full_info_information_read_icon_1_hyoitn.svg" />
            <div className="description" dangerouslySetInnerHTML={{ __html: category.description }}/>
          </div>
            <div className="wrapper">
              {
                category.products.map(product => 
                  <Link key={product._id} href={`/categories/${category.slug}/${product.slug}`} passHref>
                    <a>
                  <div className="item">
                    <div className="background" style={{ backgroundImage: `url('${product.images[0].url}')`}}>
                    </div>
                    <h2 className="model">{product.title}</h2>
                    <p className="description" dangerouslySetInnerHTML={{ __html: product.short_description }} />
                  </div>
                  </a>
                  </Link>
                  )
              }
                                {/* <Link href={`/categories`} passHref>
                    <a>
                  <div className="item">
                    <div className="background" style={{ backgroundImage: `url('https://unsplash.it/700/700')`}}>
                    </div>
                    <h2 className="model">Test</h2>
                    <p className="description" dangerouslySetInnerHTML={{ __html: 'Test test' }} />
                  </div>
                  </a>
                  </Link>
                  <Link href={`/categories`} passHref>
                    <a>
                  <div className="item">
                    <div className="background" style={{ backgroundImage: `url('https://unsplash.it/700/700')`}}>
                    </div>
                    <h2 className="model">Test</h2>
                    <p className="description" dangerouslySetInnerHTML={{ __html: 'Test test' }} />
                  </div>
                  </a>
                  </Link> */}
                {/* <div className="item">
                    <div className="background" style={{ backgroundImage: `url('https://fibointercon.com/wp-content/uploads/2019/02/B1200-Batching-plant.jpg')`}}>
                    </div>
                    <h2 className="model">B1200</h2>
                    <p className="description">Compact, mobile batching plant assembled on a joint twin-axle bogie trailer.</p>
                </div>
                <div className="item">
                    <div className="background" style={{ backgroundImage: `url('https://fibointercon.com/wp-content/uploads/2019/02/B1200-Batching-plant.jpg')`}}>
                    </div>
                    <h2 className="model">B1200</h2>
                    <p className="description">Compact, mobile batching plant assembled on a joint twin-axle bogie trailer.</p>
                </div>
                <div className="item">
                    <div className="background" style={{ backgroundImage: `url('https://fibointercon.com/wp-content/uploads/2019/02/B1200-Batching-plant.jpg')`}}>
                    </div>
                    <h2 className="model">B1200</h2>
                    <p className="description">Compact, mobile batching plant assembled on a joint twin-axle bogie trailer.</p>
                </div>
                <div className="item">
                    <div className="background" style={{ backgroundImage: `url('https://fibointercon.com/wp-content/uploads/2019/02/B1200-Batching-plant.jpg')`}}>
                    </div>
                    <h2 className="model">B1200</h2>
                    <p className="description">Compact, mobile batching plant assembled on a joint twin-axle bogie trailer.Compact, mobile batching plant assembled on a joint twin-axle bogie trailer.</p>
                </div> */}
            </div>
        </div>
      </main>
      <Footer footer={footer} locale={locale} />
        </div>
    )
}

export default Index
