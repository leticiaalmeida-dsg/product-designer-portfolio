"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

declare global {
  interface Window {
    gsap: typeof import('gsap'); // eslint-disable-line @typescript-eslint/no-explicit-any
  }
}

interface HamburgerMenuProps {
  className?: string
}

export function HamburgerMenu({ className }: HamburgerMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [gsapLoaded, setGsapLoaded] = useState(false)
  const hamburgerRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const backdropRef = useRef<HTMLDivElement>(null)
  const line1Ref = useRef<HTMLDivElement>(null)
  const line3Ref = useRef<HTMLDivElement>(null)
  const menuItemsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"
    script.onload = () => setGsapLoaded(true)
    document.head.appendChild(script)

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
    }
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "hidden"
      document.documentElement.style.overflowX = "hidden"
    } else {
      document.body.style.overflow = "unset"
      document.documentElement.style.overflowX = "unset"
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "unset"
      document.documentElement.style.overflowX = "unset"
    }
  }, [isOpen])

  useEffect(() => {
    if (!gsapLoaded || !window.gsap) return

    const { gsap } = window
    const tl = gsap.timeline()

    if (isOpen) {
      // Hide hamburger button immediately when opening
      tl.to(hamburgerRef.current, {
        opacity: 0,
        duration: 0.2,
        ease: "power2.out",
      })
        .to(line1Ref.current, {
          rotation: 45,
          y: 3,
          transformOrigin: "center center",
          duration: 0.3,
          ease: "power2.out",
        }, 0)
        .to(
          line3Ref.current,
          {
            rotation: -45,
            y: -3,
            transformOrigin: "center center",
            duration: 0.3,
            ease: "power2.out",
          },
          0,
        )
        .to(
          backdropRef.current,
          {
            opacity: 1,
            duration: 0.3,
            ease: "power2.out",
          },
          0,
        )
        .to(
          menuRef.current,
          {
            scale: 1,
            opacity: 1,
            duration: 0.4,
            ease: "back.out(1.7)",
          },
          0.1,
        )
        .fromTo(
          menuItemsRef.current?.children || [],
          {
            y: 20,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.3,
            stagger: 0.1,
            ease: "power2.out",
          },
          0.3,
        )
    } else {
      tl.to(menuItemsRef.current?.children || [], {
        y: 20,
        opacity: 0,
        duration: 0.2,
        stagger: 0.05,
        ease: "power2.in",
      })
        .to(
          menuRef.current,
          {
            scale: 0.8,
            opacity: 0,
            duration: 0.3,
            ease: "back.in(1.7)",
          },
          0.1,
        )
        .to(
          backdropRef.current,
          {
            opacity: 0,
            duration: 0.3,
            ease: "power2.out",
          },
          0.1,
        )
        .to(
          [line1Ref.current, line3Ref.current],
          {
            rotation: 0,
            y: 0,
            duration: 0.3,
            ease: "power2.out",
          },
          0.2,
        )
        // Delayed hamburger button fade-in
        .to(hamburgerRef.current, {
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
        }, 0.4) // 0.4s delay before button appears
    }

    return () => {
      tl.kill()
    }
  }, [isOpen, gsapLoaded])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Work", href: "/work" },
    { label: "Contact", href: "/contact" },
  ]

  return (
    <>
      {/* Full-width Navigation Background */}
      <div
        className="fixed top-0 left-0 right-0 h-16 md:h-20 z-[1]"
        style={{ backgroundColor: "#080808" }}
      >
        {/* Responsive Navigation Bar with Flexbox */}
        <div className="flex items-center justify-between container h-full">
        {/* Logo */}
        <button
          onClick={() => {
            // Trigger loading animation for home page
            if (typeof window !== 'undefined') {
              const event = new CustomEvent('startLoadingAnimation', {
                detail: { destination: '/' }
              });
              window.dispatchEvent(event);

              // Small delay to allow animation to start, then navigate
              setTimeout(() => {
                window.location.href = '/';
              }, 100);
            }
          }}
          className="z-[2] cursor-pointer"
          style={{ width: "10.5rem" }}
        >
          <svg width="168" height="20" viewBox="0 0 168 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.43915 16.4146V3.82201H3.31004V14.7595H9.44442V16.4146H1.43915ZM12.523 16.4146V3.82201H20.6002V5.47703H14.3939V9.09289H19.4129V10.7479H14.3939V14.7595H20.7981V16.4146H12.523ZM26.9552 16.4146V5.47703H23.0156V3.82201H32.7658V5.47703H28.8261V16.4146H26.9552ZM35.8326 16.4146V3.82201H37.7035V16.4146H35.8326ZM47.5018 16.5585C44.2637 16.5585 41.3674 14.4357 41.3674 10.1183C41.3674 5.80084 44.2997 3.67809 47.5018 3.67809C50.3621 3.67809 52.6287 5.40507 52.9705 7.86962H51.0097C50.7938 6.39449 49.3187 5.33311 47.5018 5.33311C45.0552 5.33311 43.2743 7.00613 43.2743 10.1183C43.2743 13.2304 45.0372 14.9035 47.5018 14.9035C49.3727 14.9035 50.8478 13.8421 51.0457 12.367H52.9525C52.6827 14.8315 50.416 16.5585 47.5018 16.5585ZM56.4719 16.4146V3.82201H58.3428V16.4146H56.4719ZM67.2056 6.16063L65.1548 11.5754H69.2564L67.2056 6.16063ZM61.395 16.4146L66.3421 3.82201H68.0691L73.0162 16.4146H71.0733L69.868 13.2125H64.5432L63.3379 16.4146H61.395Z" fill="white"/>
            <path d="M88.8276 6.16063L86.7768 11.5754H90.8783L88.8276 6.16063ZM83.017 16.4146L87.9641 3.82201H89.691L94.6381 16.4146H92.6953L91.49 13.2125H86.1651L84.9598 16.4146H83.017ZM97.6966 16.4146V3.82201H99.5675V14.7595H105.702V16.4146H97.6966ZM108.78 16.4146V3.82201H111.083L115.095 13.8601L119.106 3.82201H121.409V16.4146H119.61V7.0421L115.85 16.4146H114.339L110.561 7.0421V16.4146H108.78ZM125.732 16.4146V3.82201H133.809V5.47703H127.603V9.09289H132.622V10.7479H127.603V14.7595H134.007V16.4146H125.732ZM137.554 16.4146V3.82201H139.424V16.4146H137.554ZM143.736 16.4146V3.82201H147.604C151.112 3.82201 153.954 6.01671 153.954 10.1183C153.954 14.2199 151.112 16.4146 147.604 16.4146H143.736ZM145.607 14.7595H147.496C149.834 14.7595 152.029 13.4463 152.029 10.1183C152.029 6.79025 149.834 5.47703 147.496 5.47703H145.607V14.7595ZM161.637 6.16063L159.587 11.5754H163.688L161.637 6.16063ZM155.827 16.4146L160.774 3.82201H162.501L167.448 16.4146H165.505L164.3 13.2125H158.975L157.77 16.4146H155.827Z" fill="white"/>
            <mask id="path-3-inside-1_3007_3" fill="white">
              <path d="M79.778 8.40731L75.2906 12.8947L74.5533 12.1575L79.0403 7.67009H75.0857V6.62735H80.8207V12.3624H79.778V8.40731Z"/>
            </mask>
                <path d="M79.778 8.40731L75.2906 12.8947L74.5533 12.1575L79.0403 7.67009H75.0857V6.62735H80.8207V12.3624H79.778V8.40731Z" fill="var(--pink-dark-bg)"/>
            <path d="M79.778 8.40731H81.8489V3.40765L78.3136 6.94294L79.778 8.40731ZM75.2906 12.8947L73.8262 14.3591L75.2906 15.8235L76.7549 14.3591L75.2906 12.8947ZM74.5533 12.1575L73.0889 10.6932L71.6247 12.1576L73.089 13.6219L74.5533 12.1575ZM79.0403 7.67009L80.5047 9.13437L84.0395 5.59916H79.0403V7.67009ZM75.0857 7.67009H73.0147V9.74102H75.0857V7.67009ZM75.0857 6.62735V4.55642H73.0147V6.62735H75.0857ZM80.8207 6.62735H82.8917V4.55642H80.8207V6.62735ZM80.8207 12.3624V14.4334H82.8917V12.3624H80.8207ZM79.778 12.3624H77.7071V14.4334H79.778V12.3624ZM79.778 8.40731L78.3136 6.94294L73.8262 11.4304L75.2906 12.8947L76.7549 14.3591L81.2424 9.87168L79.778 8.40731ZM75.2906 12.8947L76.7549 11.4304L76.0177 10.6932L74.5533 12.1575L73.089 13.6219L73.8262 14.3591L75.2906 12.8947ZM74.5533 12.1575L76.0178 13.6218L80.5047 9.13437L79.0403 7.67009L77.5758 6.20581L73.0889 10.6932L74.5533 12.1575ZM79.0403 7.67009V5.59916H75.0857V7.67009V9.74102H79.0403V7.67009ZM75.0857 7.67009H77.1566V6.62735H75.0857H73.0147V7.67009H75.0857ZM75.0857 6.62735V8.69828H80.8207V6.62735V4.55642H75.0857V6.62735ZM80.8207 6.62735H78.7498V12.3624H80.8207H82.8917V6.62735H80.8207ZM80.8207 12.3624V10.2915H79.778V12.3624V14.4334H80.8207V12.3624ZM79.778 12.3624H81.8489V8.40731H79.778H77.7071V12.3624H79.778Z" fill="var(--pink-dark-bg)" mask="url(#path-3-inside-1_3007_3)"/>
          </svg>
        </button>

        {/* Hamburger Button */}
        <button 
          ref={hamburgerRef}
          onClick={toggleMenu}
          className={cn(
            "z-50 flex flex-col justify-center items-center w-12 h-12 rounded-full cursor-pointer transition-colors gap-1 touch-manipulation",
            className,
          )}
        style={{
          backgroundColor: "var(--pink-dark-bg)",
        }}
          onMouseEnter={(e) => {
            if (!isOpen) {
              e.currentTarget.style.backgroundColor = "#FF5A94" /* Darker shade of pink-dark-bg */
            }
          }}
          onMouseLeave={(e) => {
            if (!isOpen) {
              e.currentTarget.style.backgroundColor = "#FF76A2"
            }
          }}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <div ref={line1Ref} className="w-5 h-0.5 bg-black origin-center" />
          <div ref={line3Ref} className="w-5 h-0.5 bg-black origin-center" />
        </button>
        </div>
      </div>

      <div
        ref={backdropRef}
        className="fixed inset-0 bg-black/20 z-30 opacity-0"
        style={{
          pointerEvents: isOpen ? "auto" : "none",
        }}
        onClick={closeMenu}
        aria-hidden="true"
      />

      <div
        ref={menuRef}
        className="fixed top-4 md:top-5 left-4 right-4 md:left-auto md:right-[10%] w-auto md:w-72 rounded-3xl z-40 p-8 transform scale-75 opacity-0"
        style={{
          backgroundColor: "#FF76A2",
          pointerEvents: isOpen ? "auto" : "none",
          transformOrigin: "top right",
        }}
      >
        <button
          onClick={closeMenu}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-black rounded-full transition-colors touch-manipulation"
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#FF5A94" /* Darker shade of pink-dark-bg */
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent"
          }}
          aria-label="Close menu"
        >
          ✕
        </button>

        <nav className="mt-8">
          <div ref={menuItemsRef} className="space-y-6">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.preventDefault();
                  closeMenu();

                  // Trigger loading animation with destination page
                  if (typeof window !== 'undefined') {
                    // Create and dispatch a custom event
                    const event = new CustomEvent('startLoadingAnimation', {
                      detail: { destination: item.href }
                    });
                    window.dispatchEvent(event);

                    // Small delay to allow animation to start, then navigate
                    setTimeout(() => {
                      window.location.href = item.href;
                    }, 100);
                  }
                }}
                className="group flex items-center text-2xl font-semibold text-black hover:text-gray-800 transition-colors duration-200 touch-manipulation py-2 font-roobert text-left cursor-pointer"
                style={{ fontFamily: "var(--font-roobert)" }}
              >
                <span>{item.label}</span>
                <span className="inline-flex w-0 h-0 ml-0 transition-all duration-200 ease-out group-hover:w-2.5 group-hover:h-2.5 group-hover:ml-4 text-transparent group-hover:text-gray-800">
                  <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <path d="M3.3345 1.13601L0.47051 4L0 3.52949L2.86365 0.665502H0.339739V0H4V3.66026H3.3345V1.13601Z" fill="currentColor"/>
                  </svg>
                </span>
              </button>
            ))}
          </div>
        </nav>
      </div>
    </>
  )
}