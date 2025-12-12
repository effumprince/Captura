import { useState } from "react";
import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import { Menu,  X } from "lucide-react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // const [isSticky, setIsSticky] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const triggerPoint = 64;
  //     setIsSticky(window.scrollY > triggerPoint);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header
    className={`w-full h-full px-4  justify-between z-40  sticky top-0 bg-white backdrop-blur-md  border-gray-200`}
    >
      <div className="max-w-7xl mx-auto  flex items-center justify-between h-20">
        
        {/*  Logo */}
        <Link to="/" onClick={closeMenu}>
          <img
            src="public/CAPTURA LOGO PNG.png"
            alt="Skillitgh logo"
            className="w-40"
          />
        </Link>

        {/*  Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-semi-bold text-1xl">
          <li><Link to="/" className="hover:text-[#df0312]">Home</Link></li>
          <li><Link to="/AboutPage" className="hover:text-[#df0312]">About</Link></li>
          {/* <li><Link to="/CoursesPage" className="hover:text-[#098A9D]">Courses</Link></li> */}
          <li><Link to="/GalleryPage" className="hover:text-[#df0312]">Gallery</Link></li>
          <li><Link to="/ContactPage" className="hover:text-[#df0312]">Contact</Link></li>
        </ul>

        {/*  Login Button */}
        <Link to="" className="hidden md:block">
          <button className="border-2 border-[#df0312] text-[#df0312] px-4 py-2 rounded-md font-medium hover:bg-[#098A9D] hover:text-white transition-colors duration-300 flex items-center gap-1 "
          
          >
            Book Now <MdArrowOutward className="mt-1" />
          </button>
        </Link>

        {/*  Mobile Menu Toggle */}
        <button onClick={toggleMenu} className="md:hidden">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/*  Sliding Left Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-md transform 
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          transition-transform duration-300 ease-in-out md:hidden`}
      >
        <ul className="flex flex-col gap-6 px-6 pt-24 py-100 bg-white ">
             <img
            src="public/CAPTURA LOGO PNG.png"
            alt="CAPTURA logo"
            className="w-40"
          />
          <li><Link to="/" className="hover:text-[#098A9D]" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/AboutPage" className="hover:text-[#098A9D]" onClick={closeMenu}>About</Link></li>
          <li><Link to="/GalleryPage" className="hover:text-[#098A9D]" onClick={closeMenu}>Gallery</Link></li>
          <li><Link to="/ContactPage" className="hover:text-[#098A9D]" onClick={closeMenu}>Contact</Link></li>
          <li>
            <Link to="https://hub.skillitgh.com/" onClick={closeMenu}>
              <button className="border-2 border-[#df0312] text-[#df0312] px-4 py-2 rounded-md font-medium hover:bg-[#098A9D] hover:text-white transition-colors duration-300 flex items-center gap-1 ">
                Register <MdArrowOutward className="mt-1" />
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;