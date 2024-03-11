import ReviewSlider from "../component/ReviewSlider";
import Image from "next/image";
const Services = () => {
  return (
    <div className="bg-[#181818] rounded-3xl w-full mdl:w-[70%] mt-16 m-auto flex p-12 justify-center items-center">
      <div className="w-1/2">
        <div>
          <h1 className="text-white text-[40px] leading-sung font-bold  ">
            A Full-Service of <br />
            Design, Branding
            <br />
            and Animation Agency
          </h1>
        </div>
        <div>
          <div className="flex flex-col p-6 ">
            <div className="flex mt-7 ">
              <div>
                <Image src="/Services/1.png" width="70" height="70" />
              </div>
              <div className="ml-5 ">
                <h1 className="text-white text-2xl font-bold">
                  Visual Versatility
                </h1>
                <p className="text-white text-sm w-[70%]">
                  Tailored design and animation, bringing your vision to life
                  effortlessly.
                </p>
              </div>
            </div>
            <div className="flex mt-7">
              <div>
                <Image src="/Services/2.png" width="70" height="70" />
              </div>
              <div className="ml-5 ">
                <h1 className="text-white text-2xl font-bold">Relationships</h1>
                <p className="text-white text-sm w-[70%]">
                  Over Transactions Prioritizing your success, we believe in
                  forging lasting partnerships.
                </p>
              </div>
            </div>
            <div className="flex mt-7">
              <div>
                <Image src="/Services/3.png" width="70" height="70" />
              </div>
              <div className="ml-5 ">
                <h1 className="text-white text-2xl font-bold">
                  Visual VersatilitySocial Media Impact
                </h1>
                <p className="text-white text-sm w-[70%]">
                  Crafted visuals that authentically connect with your audience,
                  elevating your brand's narrative.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 p-4 justify-center items-center ">
<h1 className="text-white text-center text-2xl">What Our Clients Say About Us</h1>
             <ReviewSlider />
             <div className="w-full">
             <button className="text-center px-10 py-3 ml-[30%] bg-[#7700ff] text-white rounded-3xl" >About Us </button>
             </div>
      </div>
    </div>
  );
};
export default Services;
