import Head from 'next/head';

import Layout from '@/components/Layout';

export default function Custom404() {
  return (
    <Layout>
      <Head>
        <title>404</title>
      </Head>
      <main>
        <section className=''>
          <h1>404 - Page Not Found</h1>
        </section>
      </main>
    </Layout>
  );
}
