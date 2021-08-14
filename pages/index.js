import Layout from "../components/Layout"
import Link from 'next/link'

export default function Home({ banners }) {
  return (
      <Layout>
        <div>
          <ul>
            {banners.map((archive) => (
                <li key={archive.id}>
                  <Link href={`/${archive.id}`}>
                    <a>{archive.title}</a>
                  </Link>
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
          title: 'test1',
          url: 'https://placehold.jp/150x150.png'
        },
        {
          id: 2,
          title: 'test2',
          url: 'https://placehold.jp/150x150.png'
        },
        {
          id: 3,
          title: 'test3',
          url: 'https://placehold.jp/150x150.png'
        },
        {
          id: 4,
          title: 'test4',
          url: 'https://placehold.jp/150x150.png'
        },
        {
          id: 5,
          title: 'test5',
          url: 'https://placehold.jp/150x150.png'
        },
        {
          id: 6,
          title: 'test6',
          url: 'https://placehold.jp/150x150.png'
        },
      ]
    },
  };
};