"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: '/' },
  { name: "Services", href: "#services" },
  { name: "Booking", href: "/bookings" }, 
  { name: "Contact", href: "#footer" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 12 }}
      className="fixed top-0 left-0 w-full z-50 bg-white text-[#47405D] shadow-lg"
    >
      <div className="flex items-center justify-between px-4 md:px-10 py-4">
        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            <img
              src={isMenuOpen ? "/icons/close-menu.png" : "/icons/open-menu.gif"}
              alt="Menu Icon"
              className="w-8 h-8 md:w-10 md:h-10 object-contain"
            />
          </button>
        </div>

        {/* Logo with Icon and Subtext */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center space-x-2">
            <img
              src="/icons/spa.png"
              alt="Logo Icon"
              className="w-8 h-8 object-contain"
            />
            <Link href="/" scroll={true} passHref>
              <h1 className="text-3xl md:text-2xl font-bold tracking-wide font-rouge-script text-[#47405D] cursor-pointer">
                Vérité Grace Studio
              </h1>
            </Link>
          </div>
          <p className="text-sm text-[#47405D] mt-1 font-inter ">
            Where true, natural beauty meets elegance and grace.
          </p>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-[#DDAF72] transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Side Drawer */}
            <motion.div
              ref={menuRef}
              className="fixed top-0 left-0 h-full w-3/4 max-w-sm bg-[#2F4B71] text-white z-50 p-6 space-y-6"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Close Button */}
              <button
                onClick={toggleMenu}
                className="absolute top-4 right-4"
                aria-label="Close Menu"
              >
                <img
                  src="/icons/close-menu.png"
                  alt="Close Icon"
                  className="w-8 h-8 md:w-10 md:h-10 object-contain"
                />
              </button>

              {/* Mobile Nav Links */}
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-lg font-medium hover:text-[#DDAF72] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
