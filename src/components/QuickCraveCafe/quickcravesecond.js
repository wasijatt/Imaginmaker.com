// import Image from "next/image"

// export default function DiagonalSection() {
//   return (
//     <section className="relative min-h-screen overflow-hidden">
//       {/* Background Image */}
//       <div className="absolute inset-0">
//         <Image
//           src='/QuickCraveCafe/secondSectionQuickCrave.svg'  // Replace with your actual background image path
//           alt="Background"
//           fill
//           style={{ objectFit: "cover" }}
//           quality={100}
//           priority
//         />
//       </div>

//       {/* Diagonal overlay */}
//       <div className="absolute inset-0 bg-gradient-to-br from-[#9fff00]/70 to-[#ffee00]/70 transform -skew-y-6 origin-top-left"></div>

//       {/* Content container */}
//       <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-32">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
//           {/* Text content */}
//           <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl">
//             <p className="text-gray-800 text-lg md:text-xl leading-relaxed">
//               We were approached by Quickcrave cafe.com to rebuild their brand identity, take their design to the next
//               level, and produce a delightful experience. The result? A brand beloved by our client and their customers,
//               with a 30% uplift in sign-ups and nearly+50% in cart conversion rate to prove it.
//             </p>
//           </div>

//           {/* Device mockups */}
//           <div className="relative h-[600px]">
//             {/* Tablet mockup */}
//             <div className="absolute top-0 left-0 w-[80%] transform -rotate-12 hover:rotate-0 transition-transform duration-500">
//               <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
//                 <Image
//                   src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dfgjhjhk.PNG-8UujiuyrS4bCfE9mKDAwlHjf6v6PqZ.png"
//                   alt="About section on tablet"
//                   fill
//                   className="object-cover"
//                   sizes="(max-width: 768px) 100vw, 50vw"
//                 />
//               </div>
//             </div>

//             {/* Phone mockup */}
//             <div className="absolute bottom-0 right-0 w-[40%] transform rotate-12 translate-y-12 hover:rotate-0 transition-transform duration-500">
//               <div className="relative w-full aspect-[9/19.5] rounded-[2.5rem] overflow-hidden shadow-2xl">
//                 <Image
//                   src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dfgjhjhk.PNG-8UujiuyrS4bCfE9mKDAwlHjf6v6PqZ.png"
//                   alt="Mobile app interface"
//                   fill
//                   className="object-cover"
//                   sizes="(max-width: 768px) 50vw, 25vw"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

