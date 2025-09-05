"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

declare global {
  interface Window {
    gsap: any // eslint-disable-line @typescript-eslint/no-explicit-any
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
      document.body.style.overflow = "hidden" // Prevent background scroll
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  useEffect(() => {
    if (!gsapLoaded || !window.gsap) return

    const { gsap } = window
    const tl = gsap.timeline()

    if (isOpen) {
      tl.to(line1Ref.current, {
        rotation: 45,
        y: 3,
        transformOrigin: "center center",
        duration: 0.3,
        ease: "power2.out",
      })
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
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <>
      <button
        ref={hamburgerRef}
        onClick={toggleMenu}
        className={cn(
          "relative z-50 flex flex-col justify-center items-center w-12 h-12 rounded-full cursor-pointer transition-colors gap-1 touch-manipulation",
          className,
        )}
        style={{
          backgroundColor: "#FF76A2",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#FF5A94"
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "#FF76A2"
        }}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <div ref={line1Ref} className="w-5 h-0.5 bg-black origin-center" />
        <div ref={line3Ref} className="w-5 h-0.5 bg-black origin-center" />
      </button>

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
        className="fixed top-4 right-4 w-full max-w-80 sm:w-80 rounded-3xl z-40 p-8 transform scale-75 opacity-0 safe-area-inset-top safe-area-inset-right"
        style={{
          backgroundColor: "#FF76A2",
          pointerEvents: isOpen ? "auto" : "none",
        }}
      >
        <button
          onClick={closeMenu}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-black rounded-full transition-colors touch-manipulation"
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#FF5A94"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent"
          }}
          aria-label="Close menu"
        >
          ✕
        </button>

        {/* Menu Items */}
        <nav className="mt-8">
          <div ref={menuItemsRef} className="space-y-6">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={closeMenu}
                className="block text-2xl font-semibold text-black hover:text-gray-800 transition-colors duration-200 touch-manipulation py-2 font-roobert"
                style={{ fontFamily: "var(--font-roobert)" }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </>
  )
}
