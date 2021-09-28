import { Title } from '../components/DesignSystem';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout browserTitle='Home' description='Home'>
      <Title name='Home' />
    </Layout>
  );
}
