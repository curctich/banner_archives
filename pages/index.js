import Link from 'next/link'
import Image from 'next/image'

import Layout from "../components/Layout"

import Masonry from 'react-masonry-css'
import layouts from '../styles/layouts/layouts.module.scss'
import gallery from '../styles/component/gallery.module.scss'
import post from '../styles/component/post.module.scss'
import tag from '../styles/component/tag.module.scss'


export default function Home({ banners }) {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };
  return (
      <Layout>
        <div className={layouts.l_inner}>
          <Masonry breakpointCols={breakpointColumnsObj}
                   className={gallery.c_gallery}
                   columnClassName={post.c_post}>
            {banners.map((archive) => (
                <div key={archive.id}>
                  <Link href={`/${archive.id}`}>
                    <a>
                      <div className={post.c_post__img}>
                        <Image src={`${archive.img}`} alt="" width={255} height={255} objectFit="contain" />
                      </div>
                    </a>
                  </Link>
                  <div className={post.c_post__content}>
                    <p className={post.c_post__ttl}>{archive.title}</p>
                    <p className={post.c_post__size}>{archive.size}</p>
                    <ul className={post.c_post__tag}>
                      <li className={tag.c_tag}>
                        <a href="#">
                          <span className={tag.c_tag__ttl}>イベント</span>
                        </a>
                      </li>
                      <li className={tag.c_tag}>
                        <a href="#">
                          <span className={tag.c_tag__ttl}>ネットサービス</span>
                        </a>
                      </li>
                      <li className={tag.c_tag}>
                        <a href="#">
                          <span className={tag.c_tag__ttl}>スポーツ・健康</span>
                        </a>
                      </li>
                      <li className={tag.c_tag}>
                        <a href="#">
                          <span className={tag.c_tag__ttl}>クリスマス</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
            ))}
          </Masonry>
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
          img: '/assets/bnr_01.png',
          title: 'サイト名/バナー名',
          size: '300×200'
        },
        {
          id: 2,
          img: '/assets/bnr_02.png',
          title: 'サイト名/バナー名',
          size: '300×200'
        },
        {
          id: 3,
          img: '/assets/bnr_03.jpeg',
          title: 'サイト名/バナー名',
          size: '500×250'
        },
        {
          id: 4,
          img: '/assets/bnr_04.jpg',
          title: 'サイト名/バナー名',
          size: '90×600'
        },{
          id: 5,
          img: '/assets/bnr_01.png',
          title: 'サイト名/バナー名',
          size: '300×200'
        },
        {
          id: 6,
          img: '/assets/bnr_02.png',
          title: 'サイト名/バナー名',
          size: '300×200'
        },
        {
          id: 7,
          img: '/assets/bnr_03.jpeg',
          title: 'サイト名/バナー名',
          size: '500×250'
        },
        {
          id: 8,
          img: '/assets/bnr_04.jpg',
          title: 'サイト名/バナー名',
          size: '90×600'
        },
      ]
    },
  };
};