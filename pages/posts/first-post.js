import Link from 'next/link';
import HEAD from 'next/head';
import Layout from '../../components/layout';

export default function FirstPost() {
  return (
    <Layout>
      <HEAD>
        <title>NextApp</title>
      </HEAD>
      <h1>FirstPost</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
}
