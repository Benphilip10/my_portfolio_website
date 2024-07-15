import {useState} from 'react';
import { Link } from 'react-router-dom';
import {styles} from "../styles";
import { navLinks } from '../constants';
import {menu, close, logo} from '../assets';

const Navbar = () => {

  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  
  return (
    <nav className= {`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>

      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        
        <Link to="/" className='flex gap-2 items-center'
          onClick={() => {setActive("");
          window.scrollTo(0,0);
          }}
        >
          <img src={logo} alt='logo'
          className='w-9 h-9 object-contain'
          />
          <p className='text-white font-bold cursor-pointer text-[18px]'>Benjamin <span className='sm:inline-block hidden'> Philip</span></p>
        </Link>
        
        {/* Desktop Nav */}

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
              <li key={link.id}
              className={`${active === link.title ? "text-white": "text-secondary"} hover:text-white text-[16px] font-medium cursor-pointer`}
              onClick={() => {setActive(link.title)}}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
          ))}
        </ul>

        {/* Mobile Nav */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
            <img
              src={menuOpen ? close : menu} 
              alt="menu"
              className='w-[25px] h-[25px] object-contain cursor-pointer'
              onClick={() => {setMenuOpen(!menuOpen)}}
            />

            <div className={`${!menuOpen ? 'hidden' : 'flex' } p-6 black-gradient absolute top-20 right-0 z-10 mx-4 my-2 min-w-[200px] min-h-[200px] rounded-xl`}>

              <ul className='list-none flex flex-col justify-center gap-8 items-left'>

              {navLinks.map((link) => (
                  <li 
                    key={link.id}
                    className={`${active === link.title ? "text-white": "text-secondary"} hover:text-white 
                    text-[16px] font-medium`}
                    onClick={() => 
                    {
                        setActive(link.title);
                        setMenuOpen(!menuOpen);
                    }}
                  >
                       <a href={`#${link.id}`}>{link.title}</a>
                  </li>
              ))}

             </ul>

            </div>

        </div>
      </div>
    </nav>
  )
}

export default Navbar