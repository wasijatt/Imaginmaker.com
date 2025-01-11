import { Button } from "@/components/ui/button";
import { PriceBadge } from "@/components/ui/price-badge";
import { clashGrotesk } from "@/lib/clashGroteskfont";
import { satoshi } from "@/lib/fonts";
import Image from "next/image";

export default function MembershipSection() {
    return (
        <section
            className="relative min-h-screen w-full overflow-hidden bg-cover bg-start"
            style={{ backgroundImage: "url('/membership/bg.webp')" }}
        >
            {/* Content */}
            <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
                {/* Header */}
                <div className={`${clashGrotesk.className} text-center mb-20`}>
                    <h2 className="text-5xl font-bold text-white mb-4">Memberships Levels</h2>
                    <div className="w-32 h-[6px] bg-[#7D40FF] mx-auto"></div>
                    <p className={`${satoshi.className} text-lg text-[#F9F9F9] mt-6 font-medium`}>Choose a plan that&apos;s right for you.</p>
                </div>

                {/* Pricing Grid */}
                <div className="grid gap-8 lg:grid-cols-3 lg:gap-12 max-w-5xl mx-auto relative top-10">
                    {/* Standard Plan */}
                    <div
                        className="relative pt-16 px-6 pb-6 bg-[#070707] backdrop-blur-sm rounded-2xl border-[#7D40FF] border-[1px] xl:w-[20rem] xl:h-[33rem] xl:right-[3.5rem]"
                        style={{
                            backgroundImage: "url('/membership/standard-bg.svg')",
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            backgroundSize: 'cover'
                        }}
                    >
                        <PriceBadge price="1000" period="Mo" icon="/membership/pen 1.svg" />
                        <div className="text-center mb-6">
                            <div className={`${satoshi.className} text-[10px] font-black text-white mb-3 border-[1.5px] rounded-[25px] border-[#9e9a9a] py-[2px] ml-[95px] mr-[95px] mx-auto`}>STANDARD</div>
                            <div className="text-[2.5rem] font-bold text-white mb-8">
                                $999<span className="text-[12px] font-medium text-white relative top-[-1.5rem] right-[1px]">/Mo</span>
                            </div>
                            <div className={`${satoshi.className} mb-5`}>
                                <p className="text-[11px] mb-6 mt-[-2rem] text-[#F9F9F9] font-normal">One request at a time, pause or cancel any time&apos;s</p>



                            </div>
                            <div className="w-[17rem] h-[2px] bg-[#2a2828] mx-auto my-4"></div>
                        </div>
                        <div className="space-y-4">
                            {["One request at a time ", "Unlimited Brand Media Design", "Animated Banners and Posts", "Flying Design", "Website Design", "Revise as much as you like"].map((feature) => (
                                <div key={feature} className="flex items-center gap-3">
                                    <Image
                                        src="/membership/check.svg"
                                        alt="Feature included"
                                        width={20}
                                        height={20}
                                        className="text-purple-400 flex-shrink-0"
                                    />
                                    <span className="text-[#F9F9F9] text-sm">{feature}</span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-9 mx-auto mr-[80px] ml-[80px]">
                            <Button className={`${satoshi.className} w-full bg-[#7D40FF] hover:bg-[#8D40FF] py-[6px] text-white rounded-full shadow-[0.5px_0.2px_7px_0.2px_rgba(125,64,255,55)] font-bold text-[14px]`}>
                                <span className="">Get Started</span>
                            </Button>
                        </div>
                    </div>

                    {/* Pro Plan */}
                    <div
                        className="relative pt-16 px-6 pb-6 bg-[#070707] backdrop-blur-sm rounded-2xl border border-[#7D40FF] xl:right-[2.5rem]"
                        style={{
                            backgroundImage: "url('/membership/pro-bg.svg')",
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            backgroundSize: 'cover'
                        }}
                    >
                        <PriceBadge price="1800" period="project" icon="/membership/lcd 1.svg" />
                        <div className="text-center mb-6">
                            <div className={`${satoshi.className} text-[10px] font-semibold text-white mb-2 border-[1.5px] rounded-[25px] border-[#9e9a9a] py-[2px] ml-[104px] mr-[105px] mx-auto`}>PRO</div>
                            <div className="text-[2.5rem] font-bold text-white mb-4">
                                $1799<span className="text-[12px] font-medium text-white relative top-[-1.5rem] right-[1px]">/Mo</span>
                            </div>
                            <div className={`${satoshi.className} mb-6`}>
                                <p className="text-[11px] mb-6 mt-[-1rem] text-[#F9F9F9] font-normal">Double the requests. pause or cancel any time</p>

                            </div>
                            <div className="w-[17rem] h-[2px] bg-[#2a2828] mx-auto my-4"></div>
                        </div>
                        <div className="space-y-4">
                            {["Two requests at a time", "Unlimited Brand Media Design", "Animated Banners and Posts", "3 Flying Design", "2 Website Design", "Revise as much as you like"].map((feature) => (
                                <div key={feature} className="flex items-center gap-3">
                                    <Image
                                        src="/membership/check.svg"
                                        alt="Feature included"
                                        width={20}
                                        height={20}
                                        className="text-purple-400 flex-shrink-0"
                                    />
                                    <span className="text-[#F9F9F9] text-sm">{feature}</span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 mx-auto mr-[80px] ml-[80px]">
                            <Button className={`${satoshi.className} w-full bg-[#7D40FF] hover:bg-[#8D40FF] py-[6px] text-white rounded-full shadow-[0.5px_0.2px_7px_0.2px_rgba(125,64,255,55)] font-bold text-[14px]`}>
                                <span className="">Get Started</span>
                            </Button>
                        </div>
                    </div>

                    {/* Book a Call Section */}
                    <div className="flex flex-col space-y-12 text-white ">
                        <div className="space-y-6 ">
                            <Image
                                src="/membership/book call 1.svg"
                                alt="Book a call"
                                width={150}
                                height={150}
                                className="text-purple-400 relative left-[6rem]"
                            />
                            <h3 className={`${satoshi.className} text-xl font-Bold`}>Book a call</h3>
                            <div className={`${satoshi.className} w-[28rem]`}>

                                <p className="text-[#F9F9F9] font-Medium text-[15px] tracking-wide px-[-1rem]">
                                    if You Need Something Defferent, Let&apos;s Call. We
                                    <span className="flex">would love to help you.</span>
                                </p>

                            </div>
                            <Button className={`${satoshi.className}text-white font-Bold text-[14px] tracking-wider hover:underline`}>
                                Book a call
                            </Button>
                        </div>
                        <div className={`${satoshi.className}`}>
                            <Image
                                src="/membership/book call 2.svg"
                                alt="Design illustration"
                                width={200}
                                height={200}
                                className="text-purple-400 mb-[-6px] relative left-[6rem] top-[-3rem]"
                            />
                            <p className="text-[1.2rem] font-bold tracking-wider">Book A Call And Get Your First Design Free</p>
                            <p className="text-[#ffff] mt-2 font-Medium text-[15px]">How It Works</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Quote */}
                <div className="mt-[15rem]">
                    <div
                        className="relative w-full max-w-4xl mx-auto px-8 py-16 rounded-[25px] overflow-hidden border-t-[0.5px] border-[#262424]"
                        style={{
                            background: 'linear-gradient(180deg, rgba(7, 7, 7, 0.80) 0%, rgba(7, 7, 7, 0.80) 100%)',
                            backdropFilter: 'blur(20px)',
                        }}
                    >
                        {/* Background SVG */}
                        <div
                            className="absolute inset-0 z-0 border-l-[0.2px] border-[#191616] border-r-[0.2px] border-b-[0.1px] border-b-[#0f0d0d]"
                            style={{
                                backgroundImage: "url('/membership/botton quote bg.svg')",
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                opacity: 100
                            }}
                        />

                        {/* Content */}
                        <div className="relative z-10 flex flex-col items-center md:items-start gap-8 mt-10">
                            <div className="flex flex-col text-center md:text-left w-full">
                                <div className="flex flex-col gap-6">
                                    <div className="flex flex-col gap-2 px-10">
                                        <div className="flex flex-col items-center md:items-start">
                                            <div className="flex items-center gap-2">
                                                <p className={`${satoshi.className} xl:text-[26px] md:text-[32px] text-white font-medium`}>
                                                    Simplicity Speaks Louder:
                                                </p>
                                                <Image
                                                    src="/membership/colon.svg"
                                                    alt="colon"
                                                    width={20}
                                                    height={32}
                                                    className="relative top-[-1.5rem] xl:right-[20rem] right-[19rem]  md:block"
                                                />
                                            </div>
                                            <div className="w-24 h-0.5 bg-[#F9F9F9] mt-2" />
                                        </div>

                                        <div className="relative">
                                            <p className={`${satoshi.className} text-3xl md:text-[40px] font-bold leading-tight`}>

                                                {/* <Image
                                                    src="/membership/logo.svg"
                                                    alt="Imagin Maker"
                                                    width={200}
                                                    height={40}
                                                    className="inline-block mr-2"
                                                /> */}
                                                <span className="text-white"> </span>
                                            </p>
                                            <h2 className={`${satoshi.className} text-white text-[30px] font-normal`}>
                                                <span className="text-purple-700 font-bold tracking-wider">Imagin Maker&apos;s</span> Approach
                                            </h2>
                                            <p className="text-[31px] text-white mt-1 font-normal tracking-wider">
                                                to More Impactful Designs.
                                            </p>

                                            {/* Button - Absolute positioned for desktop */}
                                            <div className="static md:absolute top-0 right-0 mt-8 md:mt-0">
                                                <Button
                                                    className={`${satoshi.className} bg-[#7D40FF] shadow-[0.5px_0.2px_7px_0.2px_rgba(125,64,255,55)]  hover:bg-[#6930D9] text-white px-8 py-4 rounded-full text-base font-bold transition-all duration-200 hover:scale-105`}
                                                >
                                                    Let&apos;s work together
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

