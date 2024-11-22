import React, { useEffect } from 'react';
import gsap from 'gsap';

const Cursor = () => {
  useEffect(() => {
    const cursor = document.getElementById('custom-cursor');
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

    const addEventListenersToViewElements = () => {
      const elementsWithViewClass = document.querySelectorAll('.view');
      elementsWithViewClass.forEach((element) => {
        if (!element.hasAttribute('data-cursor-bound')) {
          element.addEventListener(
            'mouseenter',
            onMouseEnterLink as EventListener
          );
          element.addEventListener(
            'mouseleave',
            onMouseLeaveLink as EventListener
          );
          element.setAttribute('data-cursor-bound', 'true'); // Mark as processed
        }
      });
    };

    // Set up MutationObserver to watch for changes in the DOM
    const observer = new MutationObserver(() => {
      addEventListenersToViewElements();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    document.addEventListener('mousemove', onMouseMove);

    // Initial setup
    addEventListenersToViewElements();

    // Clean up event listeners and observer on unmount
    return () => {
      observer.disconnect();
      document.removeEventListener('mousemove', onMouseMove);
      const elementsWithViewClass = document.querySelectorAll('.view');
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
