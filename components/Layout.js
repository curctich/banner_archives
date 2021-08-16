import Head from "next/head"
import Link from "next/link"
import Image from 'next/image'

const Layout = (props) => {
  const { title, children } = props
  const siteTitle = "Banner Archives"
  
  return (
      <div className="page">
        <Head>
          <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
          <link rel="icon" href="favicon.ico" />
        </Head>
        
        <header>
          <h1 className={styles.site_title}>
            <Link href="/">
              <a>{siteTitle}</a>
            </Link>
          </h1>
        </header>
        
        <main>
          {title ? <h1 className="page-title">{title}</h1> : ``}
          <div className="page_main">
            {children}
          </div>
        </main>
        
        <footer>
          &copy; {siteTitle}
          <span className="logo">
             <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </footer>
      </div>
  )
}

export default Layout