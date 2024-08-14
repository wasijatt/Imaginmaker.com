// import { useEffect } from 'react';
// import { useAnimation } from 'framer-motion';

// export const useScrollAnimation = (ref) => {
//   const controls = useAnimation();

//   useEffect(() => {
//     if (!ref || !ref.current) {
//       return; // Exit early if ref is not defined
//     }

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             controls.start("visible");
//           }
//         });
//       },
//       { threshold: 0.5 }
//     );

//     observer.observe(ref.current);

//     return () => {
//       if (ref.current) {
//         observer.unobserve(ref.current);
//       }
//     };
//   }, [controls, ref]);

//   return controls;
// };
