import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { logo, menu, close } from "../assets";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();
  const { theme, toggleTheme, isDark } = useTheme();

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

        <div className='hidden sm:flex items-center gap-4'>
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className='p-2 rounded-full bg-tertiary hover:bg-[#915EFF]/20 transition-all duration-300 border border-secondary/30 hover:border-[#915EFF]'
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? (
              // Sun icon for dark mode (click to switch to light)
              <svg className='w-5 h-5 text-yellow-400' fill='currentColor' viewBox='0 0 20 20'>
                <path fillRule='evenodd' d='M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z' clipRule='evenodd' />
              </svg>
            ) : (
              // Moon icon for light mode (click to switch to dark)
              <svg className='w-5 h-5 text-[#915EFF]' fill='currentColor' viewBox='0 0 20 20'>
                <path d='M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z' />
              </svg>
            )}
          </button>

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

        <div className='sm:hidden flex flex-1 justify-end items-center gap-2'>
          {/* Mobile Theme Toggle */}
          <button
            onClick={toggleTheme}
            className='p-2 rounded-full bg-tertiary border border-secondary/30'
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? (
              <svg className='w-4 h-4 text-yellow-400' fill='currentColor' viewBox='0 0 20 20'>
                <path fillRule='evenodd' d='M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z' clipRule='evenodd' />
              </svg>
            ) : (
              <svg className='w-4 h-4 text-[#915EFF]' fill='currentColor' viewBox='0 0 20 20'>
                <path d='M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z' />
              </svg>
            )}
          </button>

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
