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
            <div className="relative z-10 mx-auto max-w-7xl px-8 py-24 sm:px-6 lg:px-8">
                {/* Header */}
                <div className={`${clashGrotesk.className} text-center mb-10 sm:mb-20`}>
                    <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Memberships Levels</h2>
                    <div className="w-24 sm:w-32 h-[4px] sm:h-[6px] bg-[#7D40FF] mx-auto"></div>
                    <p className={`${satoshi.className} text-base sm:text-lg text-[#F9F9F9] mt-6 font-medium`}>Choose a plan that&apos;s right for you.</p>
                </div>

                {/* Membership Plans */}
                <div className="space-y-10 lg:grid lg:grid-cols-3 lg:gap-12 lg:space-y-0 max-w-5xl mx-auto relative">
                    {/* Standard Plan */}
                    <div
                        className="relative pt-12 px-12 pb-6 bg-[#070707] backdrop-blur-sm rounded-2xl border-[#7D40FF] border-[1px] mx-auto lg:w-auto"
                        style={{
                            backgroundImage: "url('/membership/standard-bg.svg')",
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                        }}
                    >
                        <PriceBadge price="1000" period="Mo" icon="/membership/pen 1.svg" />
                        <div className="text-center mb-6">
                            <div className={`${satoshi.className} text-xs font-black text-white mb-3 mt-5 border-[1.5px] rounded-full py-1 px-6 mx-auto w-fit`}>STANDARD</div>
                            <div className="text-3xl sm:text-4xl font-bold text-white mb-4">
                                $999<span className="text-sm font-medium text-white relative">/Mo</span>
                            </div>
                            <p className="text-xs sm:text-sm text-[#F9F9F9]">One request at a time, pause or cancel any time.</p>
                        </div>
                        <div className="space-y-4">
                            {["One request at a time", "Unlimited Brand Media Design", "Animated Banners and Posts", "Flying Design", "Website Design", "Revise as much as you like"].map((feature) => (
                                <div key={feature} className="flex items-center gap-3">
                                    <Image src="/membership/check.svg" alt="Feature included" width={20} height={20} />
                                    <span className="text-sm text-[#F9F9F9]">{feature}</span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-6">
                            <Button className={`${satoshi.className} w-full bg-[#7D40FF] hover:bg-[#8D40FF] py-2 text-white rounded-full font-bold text-sm tracking-wider`}>Get Started</Button>
                        </div>
                    </div>

                    {/* Pro Plan */}
                    <div
                        className="relative pt-12 px-12 pb-6 bg-[#070707] backdrop-blur-sm rounded-2xl border-[#7D40FF] border-[1px] mx-auto lg:w-auto"
                        style={{
                            backgroundImage: "url('/membership/pro-bg.svg')",
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                        }}
                    >
                        <PriceBadge price="1800" period="project" icon="/membership/lcd 1.svg" />
                        <div className="text-center mb-6">
                            <div className={`${satoshi.className} text-xs font-black text-white mb-3 border-[1.5px] rounded-full py-1 px-6 mx-auto w-fit mt-5`}>PRO</div>
                            <div className="text-3xl sm:text-4xl font-bold text-white mb-4">
                                $1799<span className="text-sm font-medium text-white relative">/Mo</span>
                            </div>
                            <p className="text-xs sm:text-sm text-[#F9F9F9]">Double the requests, pause or cancel any time.</p>
                        </div>
                        <div className="space-y-4">
                            {["Two requests at a time", "Unlimited Brand Media Design", "Animated Banners and Posts", "3 Flying Designs", "2 Website Designs", "Revise as much as you like"].map((feature) => (
                                <div key={feature} className="flex items-center gap-3">
                                    <Image src="/membership/check.svg" alt="Feature included" width={20} height={20} />
                                    <span className="text-sm text-[#F9F9F9]">{feature}</span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-6">
                            <Button className={`${satoshi.className} w-full bg-[#7D40FF] hover:bg-[#8D40FF] py-2 text-white rounded-full font-bold text-sm tracking-wide`}>Get Started</Button>
                        </div>
                    </div>

                    {/* Book a Call Section */}
                    <div className={`${satoshi.className} text-center sm:text-left mb-10 mt-10 relative md:left-20 space-y-8`}>
                        <Image src="/membership/book call 1.svg" alt="Book a call" width={120} height={120} className="mx-auto sm:mx-0 mt-20 tracking-wider relative md:left-36" />
                        <h3 className="text-xl sm:text-2xl font-bold mt-4 text-white">Book a Call</h3>
                        <p className="md:text-lg text-sm text-white mt-2 px-12 tracking-wider">If you need something different, lets call. We&apos;d love to help you.</p>
                        <Button className="bg-transparent text-white hover:underline font-bold mt-8 tracking-wider">Book a Call</Button>
                        <div className="mt-6">
                            <Image src="/membership/book call 2.svg" alt="Design illustration" width={200} height={200} className="mx-auto" />
                            <p className="md:text-lg font-bold mt-8 text-white tracking-wider text-sm">Book A Call And Get Your First Design Free</p>
                            <p className="text-lg text-[#F9F9F9] mt-10 md:text-left hover:underline cursor-pointer">How It Works</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Quote */}
                <div className="mt-[2rem] md:mt-48">
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
                        <div className="relative z-10 md:flex flex-col items-center md:items-start gap-8 mt-10 hidden">
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
                                                    className="relative top-[-1.5rem] xl:right-[20rem] md:-right-[5rem] md:-top-[1.8rem] md:block"
                                                />
                                            </div>
                                            <div className="w-24 h-0.5 bg-[#F9F9F9] mt-2" />
                                        </div>

                                        <div className="relative">
                                            <p className={`${satoshi.className} text-3xl md:text-[40px] font-bold leading-tight`}>
                                                <span className="text-white"> </span>
                                            </p>
                                            <h2 className={`${satoshi.className} text-white text-[30px] font-normal`}>
                                            <span className={`${clashGrotesk.className} text-purple-700 font-bold tracking-wider`}>Imagin Maker&apos;s</span> Approach
                                            </h2>
                                            <p className="text-[25px] text-white mt-1 font-normal tracking-wider leading-tight">
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

{/* mobile bottom */}

                        <div className="relative z-10 flex flex-col items-center md:items-start gap-8 mt-10 md:hidden">
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
                                                    className="relative top-[-1.5rem] xl:right-[20rem] -left-[14rem]  md:block"
                                                />
                                            </div>
                                            <div className="w-24 h-0.5 bg-[#F9F9F9] mt-2" />
                                        </div>

                                        <div className="relative">
                                            <p className={`${satoshi.className} text-3xl md:text-[40px] font-bold leading-tight`}>
                                                <span className="text-white"> </span>
                                            </p>
                                            <h2 className={`${clashGrotesk.className} text-[#7D40FF] text-[30px] font-bold tracking-wide`}>
                                           Imagin Maker&apos;s
                                            </h2>
                                            <p className="text-[20px] text-white mt-1 font-normal tracking-wider leading-tight p-1">
                                            Approach to More Impactful Designs.
                                            </p>

                                            {/* Button - Absolute positioned for desktop */}
                                            <div className="static md:absolute top-0 right-0 mt-8 md:mt-0">
                                                <Button
                                                    className={`${satoshi.className} bg-[#7D40FF] shadow-[0.5px_0.2px_7px_0.2px_rgba(125,64,255,55)]  hover:bg-[#6930D9] text-white px-8 py-3 rounded-full text-base font-bold transition-all duration-200 hover:scale-105`}
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