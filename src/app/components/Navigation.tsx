'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Refs for animation
  const menuWrapperRef = useRef<HTMLDivElement>(null);
  const menuBaseRef = useRef<HTMLDivElement>(null);
  const menuContainerRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLDivElement>(null);
  const flipItemRef = useRef<HTMLDivElement>(null);
  const menuLinksRef = useRef<HTMLDivElement>(null);
  const hamburgerLinesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  // Add lines to hamburgerLinesRef
  const addLineRef = (el: HTMLDivElement | null) => {
    if (el && !hamburgerLinesRef.current.includes(el)) {
      hamburgerLinesRef.current.push(el);
    }
  };

  return (
    <nav className="nav-wrapper fixed top-0 left-0 right-0 z-[100]">
      {/* Nav Container */}
      <div className="nav-container relative md:z-[2] z-auto px-[10%] mx-auto min-h-[5rem] flex items-center justify-between">
        {/* Logo */}
        <div className="nav-logo w-[10.5rem]">
          <svg width="168" height="20" viewBox="0 0 168 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.43915 16V3.40744H3.31004V14.345H9.44442V16H1.43915ZM12.523 16V3.40744H20.6002V5.06246H14.3939V8.67833H19.4129V10.3333H14.3939V14.345H20.7981V16H12.523ZM26.9552 16V5.06246H23.0156V3.40744H32.7658V5.06246H28.8261V16H26.9552ZM35.8326 16V3.40744H37.7035V16H35.8326ZM47.5018 16.1439C44.2637 16.1439 41.3674 14.0212 41.3674 9.70372C41.3674 5.38627 44.2997 3.26353 47.5018 3.26353C50.3621 3.26353 52.6287 4.99051 52.9705 7.45505H51.0097C50.7938 5.97992 49.3187 4.91855 47.5018 4.91855C45.0552 4.91855 43.2743 6.59156 43.2743 9.70372C43.2743 12.8159 45.0372 14.4889 47.5018 14.4889C49.3727 14.4889 50.8478 13.4275 51.0457 11.9524H52.9525C52.6827 14.4169 50.416 16.1439 47.5018 16.1439ZM56.4719 16V3.40744H58.3428V16H56.4719ZM67.2056 5.74606L65.1548 11.1609H69.2564L67.2056 5.74606ZM61.395 16L66.3421 3.40744H68.0691L73.0162 16H71.0733L69.868 12.7979H64.5432L63.3379 16H61.395Z" fill="white"/>
            <path d="M88.8276 5.74606L86.7768 11.1609H90.8784L88.8276 5.74606ZM83.0171 16L87.9641 3.40744H89.6911L94.6382 16H92.6953L91.49 12.7979H86.1652L84.9599 16H83.0171ZM97.6967 16V3.40744H99.5676V14.345H105.702V16H97.6967ZM108.78 16V3.40744H111.083L115.095 13.4455L119.106 3.40744H121.409V16H119.61V6.62754L115.85 16H114.339L110.561 6.62754V16H108.78ZM125.732 16V3.40744H133.809V5.06246H127.603V8.67833H132.622V10.3333H127.603V14.345H134.007V16H125.732ZM137.554 16V3.40744H139.425V16H137.554ZM143.736 16V3.40744H147.604C151.112 3.40744 153.954 5.60214 153.954 9.70372C153.954 13.8053 151.112 16 147.604 16H143.736ZM145.607 14.345H147.496C149.834 14.345 152.029 13.0318 152.029 9.70372C152.029 6.37569 149.834 5.06246 147.496 5.06246H145.607V14.345ZM161.637 5.74606L159.587 11.1609H163.688L161.637 5.74606ZM155.827 16L160.774 3.40744H162.501L167.448 16H165.505L164.3 12.7979H158.975L157.77 16H155.827Z" fill="white"/>
            <mask id="path-3-inside-1_3007_3" fill="white">
              <path d="M79.778 7.99274L75.2906 12.4802L74.5533 11.743L79.0403 7.25553H75.0857V6.21278H80.8207V11.9479H79.778V7.99274Z"/>
            </mask>
            <path d="M79.778 7.99274L75.2906 12.4802L74.5533 11.743L79.0403 7.25553H75.0857V6.21278H80.8207V11.9479H79.778V7.99274Z" fill="#FF76A2"/>
            <path d="M79.778 7.99274H81.8489V2.99308L78.3136 6.52838L79.778 7.99274ZM75.2906 12.4802L73.8262 13.9446L75.2906 15.4089L76.7549 13.9446L75.2906 12.4802ZM74.5533 11.743L73.0889 10.2787L71.6247 11.7431L73.089 13.2073L74.5533 11.743ZM79.0403 7.25553L80.5047 8.71981L84.0395 5.1846H79.0403V7.25553ZM75.0857 7.25553H73.0147V9.32645H75.0857V7.25553ZM75.0857 6.21278V4.14186H73.0147V6.21278H75.0857ZM80.8207 6.21278H82.8917V4.14186H80.8207V6.21278ZM80.8207 11.9479V14.0188H82.8917V11.9479H80.8207ZM79.778 11.9479H77.7071V14.0188H79.778V11.9479ZM79.778 7.99274L78.3136 6.52838L73.8262 11.0158L75.2906 12.4802L76.7549 13.9446L81.2424 9.45711L79.778 7.99274ZM75.2906 12.4802L76.7549 11.0158L76.0177 10.2786L74.5533 11.743L73.089 13.2073L73.8262 13.9446L75.2906 12.4802ZM74.5533 11.743L76.0178 13.2072L80.5047 8.71981L79.0403 7.25553L77.5758 5.79124L73.0889 10.2787L74.5533 11.743ZM79.0403 7.25553V5.1846H75.0857V7.25553V9.32645H79.0403V7.25553ZM75.0857 7.25553H77.1566V6.21278H75.0857H73.0147V7.25553H75.0857ZM75.0857 6.21278V8.28371H80.8207V6.21278V4.14186H75.0857V6.21278ZM80.8207 6.21278H78.7498V11.9479H80.8207H82.8917V6.21278H80.8207ZM80.8207 11.9479V9.87694H79.778V11.9479V14.0188H80.8207V11.9479ZM79.778 11.9479H81.8489V7.99274H79.778H77.7071V11.9479H79.778Z" fill="#FF76A2" mask="url(#path-3-inside-1_3007_3)"/>
          </svg>
        </div>

        {/* Hamburger Menu */}
        <div 
          ref={hamburgerRef}
          className="nav-hamburger-wrapper relative flex items-center justify-center w-[3.5rem] h-[3.5rem] z-[2] cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div ref={flipItemRef} className="nav-hamburger-base absolute inset-0 bg-[#FF76A2] rounded-[3rem]" />
          <div className="flex flex-col items-center justify-center gap-[6px]">
            <div ref={addLineRef} className="nav-hamburger-line w-[1.5rem] h-[2px] bg-[#080808] relative shrink-0" />
            <div ref={addLineRef} className="nav-hamburger-line w-[1.5rem] h-[2px] bg-[#080808] relative shrink-0" />
          </div>
        </div>
      </div>

      {/* Menu Overlay */}
      <div 
        ref={menuWrapperRef}
        className={`menu-wrapper absolute top-0 right-0 bottom-auto left-0 z-[1] items-start justify-end w-full h-screen p-[1.1rem] ${isMenuOpen ? 'flex' : 'hidden'}`}
      >
        {/* Background Overlay */}
        <div 
          ref={menuBaseRef}
          className="menu-base absolute inset-0 z-[1] bg-[#080808]/25" 
        />

        {/* Menu Content */}
        <div 
          ref={menuContainerRef}
          className="menu-container relative z-[2] w-[18rem] max-w-full flex flex-col items-start justify-start pt-[5rem] px-[1.25rem] pb-[1.25rem] md:w-[18rem] w-full"
        >
          <div 
            ref={menuLinksRef}
            className="menu-links z-[2] flex flex-col gap-4 text-[1.5rem]"
          >
            <Link href="#home">Home</Link>
            <Link href="#works">Works</Link>
            <Link href="#about">About</Link>
            <Link href="#contact">Contact</Link>
          </div>
        </div>
      </div>

      {/* CSS Pointer Events Control */}
      <style jsx>{`
        .nav-container {
          pointer-events: none;
        }
        .nav-container > * {
          pointer-events: auto;
        }
      `}</style>
    </nav>
  );
}