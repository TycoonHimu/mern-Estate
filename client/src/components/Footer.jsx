import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-slate-300 text-slate-700 py-6'>
      <div className='max-w-6xl mx-auto px-3 flex flex-col gap-6'>
        {/* Footer Links */}
        <div className='flex flex-wrap justify-between gap-6'>
          <div className='flex-1'>
            <h2 className='text-xl font-bold mb-2'>NestFinder Estate</h2>
            <p className='text-sm'>
              Discover your next perfect place to live with ease. We offer a wide range of properties to suit your needs.
            </p>
          </div>
          <div className='flex-1'>
            <h3 className='text-lg font-semibold mb-2'>Quick Links</h3>
            <ul className='space-y-2'>
              <li>
                <Link to='/' className='text-blue-800 hover:underline'>Home</Link>
              </li>
              <li>
                <Link to='/about' className='text-blue-800 hover:underline'>About</Link>
              </li>
              <li>
                <Link to='/search' className='text-blue-800 hover:underline'>Search</Link>
              </li>
              <li>
                <Link to='/contact' className='text-blue-800 hover:underline'>Contact</Link>
              </li>
            </ul>
          </div>
          <div className='flex-1'>
            <h3 className='text-lg font-semibold mb-2'>Follow Us</h3>
            <div className='flex space-x-4'>
              <a href='https://facebook.com' target='_blank' rel='noopener noreferrer'>
                <FaFacebook className='text-blue-600 text-2xl hover:text-blue-800' />
              </a>
              <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
                <FaTwitter className='text-blue-400 text-2xl hover:text-blue-600' />
              </a>
              <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'>
                <FaInstagram className='text-pink-500 text-2xl hover:text-pink-700' />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className='border-t border-slate-400 pt-4'>
          <p className='text-center text-xs text-gray-500'>
            &copy; {new Date().getFullYear()} NestFinder Estate. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
