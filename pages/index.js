import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>

      
      <p>Hi Im Christian Dean I'm a Future Software Engineer.</p>
        <hr></hr>
        <p>I like Playing Badminton and Playing Video Games.</p>
        <p>My favorite Food is Lenggwa.
</p>
<p>I took It Course because it is one of my choice.</p>
<p>I expect to Learn on How to Code the Basics of Programming.</p>
<hr></hr>
        
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
