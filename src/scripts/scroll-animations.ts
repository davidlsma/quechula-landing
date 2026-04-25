import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray<Element>('.fade-in').forEach(el => {
    gsap.from(el, {
      opacity: 0,
      y: 50,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 88%',
      },
    });
  });
}
