
// "use client"
// import { useEffect, useRef, useState } from 'react';
// import Image from 'next/image';
// import gsap from 'gsap';

// const Slider = () => {
//   const [index, setIndex] = useState(0);
//   const images = ['/Reviews/one.jpg', '/Reviews/two.jpg', '/Reviews/three.jpg', '/Reviews/four.jpg', '/Reviews/five.jpg'];
//   const totalImages = images.length;
//   const imageRef = useRef(null);

//   useEffect(() => {
//     const tl = gsap.timeline({ repeat: -1 });

//     tl.fromTo(
//       imageRef.current,
//       { x: "-50%", opacity: 0, scale: 0.8, rotation: -10, filter: "blur(5px)" },
//       { x: "0%", opacity: 1, scale: 1, rotation: 0, filter: "blur(0px)", duration: 1, ease: "power4.out" }
//     )
//     .to(imageRef.current, { x: "50%", opacity: 0, scale: 0.8, rotation: 10, filter: "blur(5px)", duration: 1, delay: 2, ease: "power4.in" })
//     .set(imageRef.current, { x: "-50%", scale: 0.8, rotation: -10, filter: "blur(5px)" })
//     .call(() => {
//       setIndex(prevIndex => (prevIndex === totalImages - 1 ? 0 : prevIndex + 1));
//     });

//     return () => tl.kill();
//   }, [index]);

//   return (
//     <div className="relative w-full justify-center my-6">
//       <div className="transition-opacity duration-1000" ref={imageRef}>
//         <Image
//           className="m-auto rounded md:rounded-3xl w-[400px] md:w-[520px]"
//           src={images[index]}
//           alt={`Slide ${index + 1}`}
//           width={400}
//           height={400}
//         />
//       </div>
//     </div>
//   );
// };

// export default Slider;



"use client"
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

const Slider = () => {
  const [index, setIndex] = useState(0);
  const images = ['/Reviews/one.jpg', '/Reviews/two.jpg', '/Reviews/three.jpg', '/Reviews/four.jpg', '/Reviews/five.jpg'];
  const totalImages = images.length;
  const imageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });

    tl.fromTo(
      imageRef.current,
      { x: "-50%", opacity: 0, scale: 0.8, rotation: -10, filter: "blur(5px)" },
      { x: "0%", opacity: 1, scale: 1, rotation: 0, filter: "blur(0px)", duration: 1, ease: "power4.out" }
    )
    .to(imageRef.current, { x: "50%", opacity: 0, scale: 0.8, rotation: 10, filter: "blur(5px)", duration: 1, delay: 2, ease: "power4.in" })
    .set(imageRef.current, { x: "-50%", scale: 0.8, rotation: -10, filter: "blur(5px)" })
    .call(() => {
      setIndex(prevIndex => (prevIndex === totalImages - 1 ? 0 : prevIndex + 1));
    });

    return () => tl.kill();
  }, [index, totalImages]);

  return (
    <div className="relative w-full justify-center my-6">
      <div className="transition-opacity duration-1000" ref={imageRef}>
        <Image
          className="m-auto rounded md:rounded-3xl w-[400px] md:w-[520px]"
          src={images[index]}
          alt={`Slide ${index + 1}`}
          width={400}
          height={400}
        />
      </div>
    </div>
  );
};

export default Slider;
