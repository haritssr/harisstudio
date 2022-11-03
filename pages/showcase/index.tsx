import { Title, Topic } from '@/components/DesignSystem';
import Layout from '@/components/Layout';
import Image from 'next/image';
import Link from 'next/link';

const OnboardedWebsites = [
  {
    url: 'www.aka-tradingindo.com',
    to: 'https://www.aka-tradingindo.com',
    src: '/aka.png',
    name: 'AKA Trading Indonesia',
  },
  {
    url: 'www.harislab.com',
    to: 'https://www.harislab.com',
    src: '/harislab.jpg',
    name: 'Haris Laboratory',
  },
  {
    url: 'www.haritssr.vercel.app',
    to: 'https://www.haritssr.vercel.app',
    src: '/blog.jpg',
    name: 'haritssr (Personal Website)',
  },
  {
    url: 'www.harisstudio.vercel.app',
    to: 'https://www.harisstudio.vercel.app',
    src: '/studio.jpg',
    name: 'Haris Studio (Website Studio)',
  },
];

const AnotherExample = [
  { url: 'showcase/space', to: '/space', src: '/space.jpg', name: 'Space' },
  { url: 'showcase/beauty', to: '/beauty', src: '/beauty.jpg', name: 'Beauty' },
  {
    url: 'showcase/minimalist',
    to: '/minimalist',
    src: '/minimalist.jpg',
    name: 'Minimalist',
  },
  { url: 'showcase/forest', to: '/forest', src: '/forest.jpg', name: 'Forest' },
  {
    url: 'showcase/geometry',
    to: '/geometry',
    src: '/geometry.jpg',
    name: 'Geometry',
  },
];

export default function Showcase() {
  return (
    <Layout browserTitle='Showcase' description='Showcase'>
      <Title name='Showcase' />
      <Topic name='Onboarded Websites' />
      <div className='grid grid-cols-1 mb-20 gap-7 xs:grid-cols-2 md:grid-cols-3'>
        {OnboardedWebsites.map(a => (
          <ExternalLink to={a.to} src={a.src} name={a.name} key={a.src} url={a.url} />
        ))}
      </div>
      <Topic name='Another Example' />
      <div className='grid grid-cols-1 mb-10 gap-7 xs:grid-cols-2 md:grid-cols-3'>
        {AnotherExample.map(a => (
          <InternalLink
            to={`/showcase/${a.to}`}
            src={a.src}
            name={a.name}
            key={a.src}
            url={a.url}
          />
        ))}
      </div>
    </Layout>
  );
}

const InternalLink = ({
  to,
  src,
  name,
  url,
}: {
  to: string;
  src: string;
  name: string;
  url: string;
}) => {
  return (
    <Link
      passHref
      href={to}
      className='flex-col overflow-hidden duration-300 ease-out rounded-lg shadow-lg hover:shadow-xl hover:scale-102'
    >
      <Image
        src={src}
        className='object-cover duration-300 h-60 hover:scale-105'
        height={400}
        width={500}
        // layout='responsive'
        alt={name}
      />
      <div className='px-4 py-2 font-semibold text-gray-800 truncate duration-300 bg-white group hover:bg-gray-50'>
        <div className='truncate'>{name}</div>
        <div className='text-sm font-normal text-gray-600 truncate duration-300 bg-white group-hover:bg-gray-50 '>
          {url}
        </div>
      </div>
    </Link>
  );
};

const ExternalLink = ({
  to,
  src,
  name,
  url,
}: {
  to: string;
  src: string;
  name: string;
  url: string;
}) => {
  return (
    <a
      href={to}
      target='_blank'
      rel='noreferrer'
      className='flex-col overflow-hidden duration-300 ease-out rounded-lg shadow-lg hover:shadow-xl hover:scale-102'
    >
      <Image
        src={src}
        className='object-cover duration-300 h-60 hover:scale-105'
        height={400}
        width={500}
        // layout='responsive'
        alt={name}
      />
      <div className='px-4 py-2 font-semibold text-gray-800 duration-300 bg-white group hover:bg-gray-50'>
        <div className='truncate'>{name}</div>
        <div className='text-sm font-normal text-gray-600 truncate duration-300 bg-white group-hover:bg-gray-50 '>
          {url}
        </div>
      </div>
    </a>
  );
};
