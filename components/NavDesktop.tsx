import Link from 'next/link';

export default function NavDesktop() {
  return (
    <nav className='hidden bg-white border-b border-gray-300 md:block bg-opacity-90 backdrop-blur-sm'>
      <div className='flex flex-row justify-between max-w-5xl px-5 py-2.5 mx-auto xl:px-0'>
        <Link href='/'>
          <a className='text-2xl font-bold group'>
            <span className='text-gray-500 group-hover:text-opacity-70'>haris</span>
            <span className='text-gray-700 underline group-hover:text-opacity-70'>studio</span>
          </a>
        </Link>
        <div className='flex flex-row items-center space-x-10'>
          <DesktopLink to='/about' title='About' />
          <DesktopLink to='/pricing' title='Pricing' />
          <DesktopLink to='/casestudy' title='Case Study' />
          <DesktopLink to='/showcase' title='Showcase' />
        </div>
      </div>
    </nav>
  );
}

const DesktopLink = ({ to, title }: { to: string; title: string }) => {
  return (
    <Link href={to}>
      <a className='text-gray-700 hover:text-gray-500'>{title}</a>
    </Link>
  );
};
