import Layout from '../components/Layout';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout browserTitle='Home' description='Home'>
      <div className='my-16 space-y-10 sm:space-y-3 '>
        <div className='text-xl font-semibold text-center text-gray-600 sm:text-left'>
          Hello, we are haris<span className='text-gray-700 underline'>studio</span>
        </div>
        <div className='-mx-4 text-5xl font-bold tracking-tight text-center text-zinc-800 sm:text-6xl md:text-8xl sm:w-3/4 sm:text-left sm:-mx-0'>
          We make a fast and beautiful website
        </div>
        <div className='flex justify-center sm:justify-start'>
          <Link
            passHref
            href='/showcase'
            className='flex items-center space-x-2 text-2xl text-blue-600 cursor-pointer sm:text-xl hover:underline'
          >
            Showcase
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-5 h-5 pt-0.5 text-blue-600'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2.5}
                d='M9 5l7 7-7 7'
              />
            </svg>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
