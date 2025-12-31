import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { logo, menu, close } from "../assets";
import { useLanguage } from "../context/LanguageContext";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  const navLinks = [
    { id: "about", title: t("nav.about") },
    { id: "work", title: t("nav.work") },
    { id: "contact", title: t("nav.contact") },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>
            Ali Fannane&nbsp;
            <span className='sm:block hidden'> | {t("nav.subtitle")}</span>
          </p>
        </Link>

        <div className='hidden sm:flex items-center gap-6'>
          {/* Language Toggle Button */}
          <button
            onClick={toggleLanguage}
            className='flex items-center gap-2 px-3 py-1.5 rounded-full bg-tertiary hover:bg-[#915EFF]/20 transition-all duration-300 text-white text-[14px] font-medium border border-secondary/30 hover:border-[#915EFF]'
          >
            <span className={`transition-all ${language === 'fr' ? 'text-[#915EFF]' : 'text-secondary'}`}>FR</span>
            <div className='w-8 h-4 bg-black-100 rounded-full relative'>
              <div 
                className={`absolute top-0.5 w-3 h-3 bg-[#915EFF] rounded-full transition-all duration-300 ${
                  language === 'en' ? 'left-4' : 'left-0.5'
                }`}
              />
            </div>
            <span className={`transition-all ${language === 'en' ? 'text-[#915EFF]' : 'text-secondary'}`}>EN</span>
          </button>

          <ul className='list-none flex flex-row gap-10'>
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className='sm:hidden flex flex-1 justify-end items-center gap-3'>
          {/* Mobile Language Toggle */}
          <button
            onClick={toggleLanguage}
            className='px-2 py-1 rounded-full bg-tertiary text-white text-[14px] font-bold border border-secondary/30'
          >
            {language === 'fr' ? '🇫🇷 FR' : '🇬🇧 EN'}
          </button>

          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
};

export default Navbar;
