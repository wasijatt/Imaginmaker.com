"use client"
import Image from "next/image";



const Brands = () => {
  return (
    <div className=" mdl:w-full bg-gray-900 flex overflow-hidden mdl:p-10  py-5 px-3 justify-between brandlogo ">
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
