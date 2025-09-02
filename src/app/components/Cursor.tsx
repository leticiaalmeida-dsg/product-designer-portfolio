'use client';

import { useEffect, useState } from 'react';

export default function Cursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHoveringCard, setIsHoveringCard] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      const mappedX = (x - 50);
      const mappedY = (y - 50);
      setMousePosition({ x: mappedX, y: mappedY });
    };

    const handleCardHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isCard = target.closest('.work-card');
      setIsHoveringCard(!!isCard);
    };

    window.addEventListener('mousemove', (e) => {
      updateMousePosition(e);
      handleCardHover(e);
    });

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <>
      <style>
        {`
          .cursor {
            pointer-events: none;
          }
          .cursor-dot {
            transition: all 0.3s ease;
          }
          .cursor-view {
            transition: all 0.3s ease;
            background-color: #FF76A2;
            color: #080808;
            font-size: 14px;
            font-weight: 500;
            letter-spacing: 0.05em;
          }
        `}
      </style>
      <div className="cursor fixed top-0 left-0 w-full h-[100svh] flex items-center justify-center z-[9999]">
        <div 
          className={`cursor-dot absolute flex items-center justify-center rounded-[100%] ${
            isHoveringCard 
              ? 'cursor-view w-[4.5rem] h-[4.5rem]' 
              : 'w-[1rem] h-[1rem] opacity-0'
          }`}
          style={{
            transform: `translate(${mousePosition.x}vw, ${mousePosition.y}vh)`,
          }}
        >
          {isHoveringCard && 'VIEW'}
        </div>
      </div>
    </>
  );
}
