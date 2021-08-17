import Head from "next/head"
import Link from "next/link"
import Image from 'next/image'

import header from '../styles/layouts/header.module.scss'
import layouts from '../styles/layouts/layouts.module.scss'
import footer from '../styles/layouts/footer.module.scss'

const Layout = (props) => {
  const { title, children } = props
  const siteTitle = "Banner Archives"
  
  return (
      <div className="page">
        <Head>
          <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
          <link rel="icon" href="favicon.ico" />
        </Head>
        
        <header className={header.l_header}>
          <div className={layouts.l_inner}>
            <h1 className={header.l_header__ttl}>
              <Link href="/">
                <a>{siteTitle}</a>
              </Link>
            </h1>
          </div>
        </header>
        
        <main>
          <div className={layouts.l_page_main}>
            {children}
          </div>
        </main>
        
        <footer className={footer.l_footer}>
          &copy; {siteTitle}
          <span className="logo">
             <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </footer>
      </div>
  )
}

export default Layout