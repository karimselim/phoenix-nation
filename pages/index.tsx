import Loader from '@/components/loader/Loader';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Phoenix Nation</title>
      </Head>
      <Loader />
    </>
  );
}
