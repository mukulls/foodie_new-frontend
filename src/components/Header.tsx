import { Link } from 'react-router-dom';
import MobileNav from './MobileNav';
import MainNav from './MainNav';

export const Header = () => {
  return (
    <div className="bg-black p-5 font-lato text-white">
      <div className="container flex justify-between items-center">
        <Link to="/" className='text-4xl font-bold tracking-tight text-white'>
          foodie
        </Link>
        <div className="md:hidden">
            <MobileNav/>
        </div>
        <div className='hidden md:block'> 
            <MainNav/>
        </div>
      </div>
    </div>
  );
};

export default Header;
