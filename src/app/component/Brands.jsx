import Image from "next/image";

const images = [
  { src: "/brands/1.png", width: 153, height: 22 },
  { src: "/brands/2.png", width: 179, height: 26 },
  { src: "/brands/3.png", width: 137, height: 23 },
  { src: "/brands/4.png", width: 134, height: 55 },
  { src: "/brands/5.png", width: 128, height: 32 },
  { src: "/brands/6.png", width: 142, height: 31 },
  { src: "/brands/7.png", width: 112, height: 39 },
  { src: "/brands/8.png", width: 118, height: 22 },
];

const Brands = () => {
  return (
    <div className="w-full bg-gray-900 flex overflow-hidden mdl:p-10 p-3 justify-between brandlogo ">
      <div className="flex brandslide items-center justify-between">
      <Image className="brandimg" src= {"/brands/1.png"} width={153} height= {22} alt="brands" />
  <Image className="brandimg " src={ "/brands/2.png"} width= {179} height= {26 } alt="brands"/>
  <Image className="brandimg" src={ "/brands/3.png"} width= {137} height= {23 } alt="brands"/>
  <Image className="brandimg" src={ "/brands/4.png"} width= {134} height= {55 } alt="brands"/>
  <Image className="brandimg" src={ "/brands/5.png"} width= {128} height= {32 } alt="brands"/>
  <Image className="brandimg" src={ "/brands/6.png"} width= {142} height= {31 } alt="brands"/>
  <Image className="brandimg" src={ "/brands/7.png"} width= {112} height= {39 } alt="brands"/>
  <Image className="brandimg" src={ "/brands/8.png"} width= {118} height= {22 } alt="brands"/>
     
      <Image className="brandimg" src= {"/brands/1.png"} width={153} height= {22} alt="brands" />
  <Image className="brandimg " src={ "/brands/2.png"} width= {179} height= {26 } alt="brands"/>
  <Image className="brandimg" src={ "/brands/3.png"} width= {137} height= {23 } alt="brands"/>
  <Image className="brandimg" src={ "/brands/4.png"} width= {134} height= {55 } alt="brands"/>
  <Image className="brandimg" src={ "/brands/5.png"} width= {128} height= {32 } alt="brands"/>
  <Image className="brandimg" src={ "/brands/6.png"} width= {142} height= {31 } alt="brands"/>
  <Image className="brandimg" src={ "/brands/7.png"} width= {112} height= {39 } alt="brands"/>
  <Image className="brandimg" src={ "/brands/8.png"} width= {118} height= {22 } alt="brands"/>
      </div>
    </div>
  );
};

export default Brands;
