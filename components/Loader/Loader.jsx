/* eslint-disable react/no-unescaped-entities */
import { useRef } from 'react';
import styles from './styles.module.css';
import gsap from 'gsap';
import { useEffect } from 'react';

function Loader() {
  const loading = useRef(null);
  const counter = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power2.inOut' } });

    tl.to('.counter3', { y: -2600, duration: 5 })
      .to(
        '.counter2',
        { y: -1300, duration: 3, delay: 2 },
        '<' // Position argument
      )
      .to('.counter1', { y: -130, duration: 1 }, '-=1');

    gsap.from('.loader1', { width: 0, duration: 6 });
    gsap.from('.loader2', { width: 0, ease: 'power2.inOut', duration: 7 }, '<');

    gsap.to('.digit', {
      top: -150,
      duration: 1,
      stagger: 0.15,
      delay: 5,
      ease: 'expo.inOut',
    });
    gsap.to('.loader', {
      background: 'none',
      delay: 6,
      duration: 0.1,
    });
    gsap.to('.loader1', {
      rotate: 90,
      y: -50,
      duration: 0.5,
      delay: 6,
    });
    gsap.to('.loader2', { x: -68, y: 53, duration: 0.5 }, '<');
    gsap.to('.loader', { scale: 50, duration: 1, ease: 'power3.inOut' }, '>');
    gsap.to(
      '.loader',
      {
        rotate: 45,
        y: 500,
        x: 2000,
        duration: 1,
        ease: 'power2.inOut',
      },
      '<'
    );
  }, []);

  useEffect(() => {
    gsap.to('.loadings', {
      opacity: 0,
      delay: 7,
      duration: 0.2,
      ease: 'power3.inOut',
    });
  }, []);

  return (
    <div className={`${styles.LoaderContainer}`}>
      <div className={`${styles.contain} contain`}>
        <div className={`${styles.loadings} loadings`} ref={loading}>
          <div className={`${styles.loader} loader`}>
            <div
              className={`${styles.bar} ${styles.loader1} bar loader1`}
            ></div>
            <div
              className={`${styles.bar} ${styles.loader2} bar loader2`}
            ></div>
          </div>

          <div className={styles.counter} ref={counter}>
            <div
              className={`${styles.counter1} ${styles.digit} counter1 digit`}
            >
              <span className={styles.number}>0</span>
              <span className={styles.number}>1</span>
            </div>
            <div
              className={`${styles.digit} ${styles.counter2} counter2 digit`}
            >
              <span className={styles.number}>0</span>
              <span className={styles.number}>1</span>
              <span className={styles.number}>2</span>
              <span className={styles.number}>3</span>
              <span className={styles.number}>4</span>
              <span className={styles.number}>5</span>
              <span className={styles.number}>6</span>
              <span className={styles.number}>7</span>
              <span className={styles.number}>8</span>
              <span className={styles.number}>9</span>
              <span className={styles.number}>0</span>
            </div>
            <div
              className={`${styles.counter3} ${styles.digit} counter3 digit`}
            >
              <span className={styles.number}>0</span>
              <span className={styles.number}>1</span>
              <span className={styles.number}>2</span>
              <span className={styles.number}>3</span>
              <span className={styles.number}>4</span>
              <span className={styles.number}>5</span>
              <span className={styles.number}>6</span>
              <span className={styles.number}>7</span>
              <span className={styles.number}>8</span>
              <span className={styles.number}>9</span>
              <span className={styles.number}>0</span>
              <span className={styles.number}>1</span>
              <span className={styles.number}>2</span>
              <span className={styles.number}>3</span>
              <span className={styles.number}>4</span>
              <span className={styles.number}>5</span>
              <span className={styles.number}>6</span>
              <span className={styles.number}>7</span>
              <span className={styles.number}>8</span>
              <span className={styles.number}>9</span>
              <span className={styles.number}>0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loader;
