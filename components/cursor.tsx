import React, { useEffect } from 'react';
import gsap from 'gsap';

const Cursor = () => {
  useEffect(() => {
    const cursor = document.getElementById('custom-cursor');
    const elementsWithViewClass = document.querySelectorAll('.view'); // Select elements with class 'view'
    const cursorText = document.getElementById('cursor-text');

    const onMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      gsap.to(cursor, { x: clientX, y: clientY });
    };

    const onMouseEnterLink = (event: Event) => {
      const element = event.target as HTMLElement;
      if (element.classList.contains('view')) {
        gsap.to(cursor, { scale: 6 });
        if (cursorText) {
          cursorText.style.display = 'block';
        }
      }
    };

    const onMouseLeaveLink = (): void => {
      gsap.to(cursor, { scale: 1 });
      if (cursorText) {
        cursorText.style.display = 'none';
      }
    };

    // Add event listeners to elements with the class 'view'
    elementsWithViewClass.forEach((element) => {
      element.addEventListener('mouseenter', onMouseEnterLink as EventListener);
      element.addEventListener('mouseleave', onMouseLeaveLink as EventListener);
    });

    document.addEventListener('mousemove', onMouseMove);

    // Clean up event listeners on component unmount
    return () => {
      elementsWithViewClass.forEach((element) => {
        element.removeEventListener(
          'mouseenter',
          onMouseEnterLink as EventListener
        );
        element.removeEventListener(
          'mouseleave',
          onMouseLeaveLink as EventListener
        );
      });
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed left-0 top-0 z-50 flex h-5 w-5 items-center justify-center rounded-full bg-white p-[10px] mix-blend-difference"
      id="custom-cursor"
    >
      <span
        className="hidden text-[5px] font-black tracking-wide text-red-100"
        id="cursor-text"
      >
        view
      </span>
    </div>
  );
};

export default Cursor;
