"use client";
import Image from "next/image";

const Brands = () => {
 

  return (
<div className="w-full  bg-[#181818] flex overflow-x-scroll justify-between p-10 items-center">
<div>
  <Image src="/brands/1.png" width= "153" height="22"/>
</div>
<div>
  <Image src="/brands/2.png" width= "179" height="26"/>
</div>
<div>
  <Image src="/brands/3.png" width= "137" height="23"/>
</div>
<div>
  <Image src="/brands/4.png" width= "134" height="55"/>
</div>
<div>
  <Image src="/brands/5.png" width= "128" height="32"/>
</div>
<div>
  <Image src="/brands/6.png" width= "142" height="31"/>
</div>
<div>
  <Image src="/brands/7.png" width= "112" height="39"/>
</div>
<div>
  <Image src="/brands/8.png" width= "118" height="22"/>
</div>

</div>
  );
};

export default Brands;
