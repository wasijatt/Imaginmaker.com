

// 'use client'
// import { useEffect } from 'react';

// const CustomCursor = () => {
//   useEffect(() => {
    
//     const cursor = document.createElement('div');
//     cursor.classList.add('custom-cursor');
//     document.body.appendChild(cursor);

//     const cursorStyle = cursor.style;
//     cursorStyle.position = 'fixed';
//     cursorStyle.top = '-30px';
//     cursorStyle.left = '-30px';
//     cursorStyle.width = '10px';
//     cursorStyle.height = '10px';
//     cursorStyle.backgroundColor = '#7700ff';
//     cursorStyle.borderRadius = '50%';
//     cursorStyle.pointerEvents = 'none';
//     cursorStyle.mixBlendMode = 'difference';
//     cursorStyle.transition = 'transform 0.2s ease-out, width 0.6s ease-out, height 0.3s ease-out, background-color 0.3s ease-out';
//     cursorStyle.transform = 'translate(-50%, -50%)';
    
   
//     const updateCursorPosition = (event) => {
//       const { clientX, clientY } = event;
//       cursorStyle.transform = `translate(${clientX}px, ${clientY}px)`;
      
   
//       const element = document.elementFromPoint(clientX, clientY);
//       if (element) {
//         const tagName = element.tagName.toLowerCase();
//         switch (tagName) {
//           case 'h1':
//             cursorStyle.width = '90px';
//             cursorStyle.height = '90px';
//             cursorStyle.backgroundColor = '#ffffff';
//             break;
//           case 'img':
//             cursorStyle.width = '100px';
//             cursorStyle.height = '100px';
//             cursorStyle.backgroundColor = '#ffffffce';
//             break;
//           case 'a':
//             cursorStyle.width = '100px';
//             cursorStyle.height = '100px';
//             cursorStyle.backgroundColor = '#ffffffce';
//             break;
//           case 'p':
//             cursorStyle.width = '40px';
//             cursorStyle.height = '40px';
//             cursorStyle.backgroundColor = '#01236b92';
//             break;
//           case 'button':
//             cursorStyle.width = '80px';
//             cursorStyle.height = '80px';
//             cursorStyle.backgroundColor = '#ffffffce';
//             break;
//           default:
//             cursorStyle.width = '10px';
//             cursorStyle.height = '10px';
//             cursorStyle.backgroundColor = '#01236b';
//         }
//       }
//     };

   
//     document.addEventListener('mousemove', updateCursorPosition);

    
//     return () => {
//       document.removeEventListener('mousemove', updateCursorPosition);
//       document.body.removeChild(cursor);
//     };
//   }, []);

//   return null; 
// };

// export default CustomCursor;



'use client'
import { useEffect } from 'react';

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);

    const cursorStyle = cursor.style;
    cursorStyle.position = 'fixed';
    cursorStyle.top = '-30px';
    cursorStyle.left = '-30px';
    cursorStyle.width = '10px';
    cursorStyle.height = '10px';
    cursorStyle.backgroundColor = '#7700ff';
    cursorStyle.borderRadius = '50%';
    cursorStyle.pointerEvents = 'none';
    cursorStyle.mixBlendMode = 'difference';
    cursorStyle.transition = 'transform 0.2s ease-out, width 0.6s ease-out, height 0.3s ease-out, background-color 0.3s ease-out';
    cursorStyle.transform = 'translate(-50%, -50%)';

    const updateCursorPosition = (event) => {
      const { clientX, clientY } = event;
      cursorStyle.transform = `translate(${clientX}px, ${clientY}px)`;

      const element = document.elementFromPoint(clientX, clientY);
      if (element) {
        const tagName = element.tagName.toLowerCase();
        switch (tagName) {
          case 'h1':
            cursorStyle.width = '90px';
            cursorStyle.height = '90px';
            cursorStyle.backgroundColor = '#ffffff';
            break;
          case 'img':
            cursorStyle.width = '100px';
            cursorStyle.height = '100px';
            cursorStyle.backgroundColor = '#ffffffce';
            break;
          case 'a':
            cursorStyle.width = '100px';
            cursorStyle.height = '100px';
            cursorStyle.backgroundColor = '#ffffffce';
            break;
          case 'p':
            cursorStyle.width = '40px';
            cursorStyle.height = '40px';
            cursorStyle.backgroundColor = '#01236b92';
            break;
          case 'button':
            cursorStyle.width = '80px';
            cursorStyle.height = '80px';
            cursorStyle.backgroundColor = '#ffffffce';
            break;
          default:
            cursorStyle.width = '10px';
            cursorStyle.height = '10px';
            cursorStyle.backgroundColor = '#01236b';
        }
      }
    };

    document.addEventListener('mousemove', updateCursorPosition);

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
      if (cursor.parentNode === document.body) {
        document.body.removeChild(cursor);
      }
    };
  }, []);

  return null; 
};

export default CustomCursor;
