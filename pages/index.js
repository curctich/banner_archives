import Link from 'next/link'
import Image from 'next/image'

import Layout from "../components/Layout"

import styles from '../styles/layouts/layouts.module.scss'
import gallery from '../styles/component/gallery.module.scss'
import card from '../styles/component/card.module.scss'


export default function Home({ banners }) {
  return (
      <Layout>
        <div className={styles.l_inner}>
          <ul className={gallery.c_gallery}>
            {banners.map((archive) => (
                <li key={archive.id} className={card.c_card}>
                  <Link href={`/${archive.id}`}>
                    <a>
                      <div className={card.c_card__img}>
                        <Image src={`${archive.img}`} alt="" width={255} height={255} objectFit="contain" />
                      </div>
                    </a>
                  </Link>
                  <p className={card.c_card__ttl}>{archive.title}</p>
                </li>
            ))}
          </ul>
        </div>
      </Layout>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  //const data = await client.get({ endpoint: 'archive'});
  
  return {
    props: {
      //blog: data.contents,
      banners: [
        {
          id: 1,
          title: 'サイト名/バナー名',
          img: '/assets/bnr_01.png'
        },
        {
          id: 2,
          title: 'サイト名/バナー名',
          img: '/assets/bnr_02.png'
        },
        {
          id: 3,
          title: 'サイト名/バナー名',
          img: '/assets/bnr_03.jpeg'
        },
        {
          id: 4,
          title: 'サイト名/バナー名',
          img: '/assets/bnr_04.jpg'
        },
      ]
    },
  };
};