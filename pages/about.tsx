import { Title, Topic } from '@/components/DesignSystem';
import Layout from '@/components/Layout';

export default function About() {
  return (
    <Layout browserTitle='About' description='About'>
      <Title name='About' />
      <p className='text-xl text-gray-700 sm:w-2/3'>
        <span className='font-semibold text-gray-600'>haris</span>
        <span className='font-semibold text-gray-800 underline'>studio</span> is a website design
        studio founded in 2021 by{' '}
        <a href='www.twitter.com/haritssr' className='text-harislab hover:underline'>
          Harits Syah
        </a>
        . We provide service on website layout design, web architecture, and web animation.
      </p>
    </Layout>
  );
}
