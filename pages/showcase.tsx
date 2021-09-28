import { Title, Topic } from '@/components/DesignSystem';
import Layout from '@/components/Layout';
import Image from 'next/image';
// import aka from '/public/aka.png';
// import harislab from '/public/harislab.jpg';
// import space from '/public/space.jpg';
// import beauty from '/public/beauty.jpg';
// import minimalist from '/public/minimalist.jpg';
// import blog from '/public/blog.jpg';
// import forest from '/public/forest.jpg';

const OnboardedWebsites = [
  { src: '/aka.png', name: 'AKA Trading Indonesia' },
  { src: '/harislab.jpg', name: 'Haris Laboratory' },
  { src: '/blog.jpg', name: 'haritssr (Personal Website)' },
];

const AnotherExample = [
  { src: '/space.jpg', name: 'Space' },
  { src: '/beauty.jpg', name: 'Beauty' },
  { src: '/minimalist.jpg', name: 'Minimalist' },
  { src: '/forest.jpg', name: 'Forest' },
];

export default function Showcase() {
  return (
    <Layout browserTitle='Showcase' description='Showcase'>
      <Title name='Showcase' />
      <Topic name='Onboarded Websites' />
      <div className='grid xs:grid-cols-2 grid-cols-1 sm:grid-cols-3 gap-5 mb-10'>
        {OnboardedWebsites.map(a => (
          <div
            className='rounded-lg overflow-hidden flex-col drop-shadow-lg sm:drop-shadow-md '
            key={a.src}
          >
            <Image
              src={a.src}
              className='object-cover h-60'
              height={400}
              width={500}
              layout='responsive'
              alt={a.name}
            />
            <div className='bg-gradient-to-b from-gray-100 bg-opacity-95 to-white px-4 py-2 font-semibold text-gray-700 truncate'>
              {a.name}
            </div>
          </div>
        ))}
      </div>
      <Topic name='Another Example' />
      <div className='grid xs:grid-cols-2 grid-cols-1 sm:grid-cols-3 gap-5 mb-10'>
        {AnotherExample.map(a => (
          <div
            className='rounded-lg overflow-hidden flex-col drop-shadow-lg sm:drop-shadow-md '
            key={a.src}
          >
            <Image
              src={a.src}
              className='object-cover h-60'
              height={400}
              width={500}
              layout='responsive'
              alt={a.name}
            />
            <div className='bg-gradient-to-b from-gray-100 bg-opacity-95 to-white px-4 py-2 font-semibold text-gray-700 truncate'>
              {a.name}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
