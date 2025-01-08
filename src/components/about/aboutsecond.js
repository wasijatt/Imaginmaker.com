import { clashGrotesk } from "@/lib/clashGroteskfont";
import { satoshi } from "@/lib/fonts";
import Image from "next/image";
import Link from "next/link";

export default function AboutSecondSection() {
  return (
    <section className="relative bg-black text-white py-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/contact/contactbg.svg"
          alt="Background pattern"
          layout="fill"
          className="object-cover opacity-10"
          priority
        />
      </div>

      <div className="container mx-auto px-12 relative z-10 md:mt-28">
        {/* First Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="space-y-4 md:p-10">
            <div>
              <h2 className={`${clashGrotesk.className} text-4xl font-bold mb-1`}>Who We Are</h2>
              <div className="w-20 h-1 bg-[#6D40FF]"></div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Welcome to our design agency!</h3>
            <p className={`${satoshi.className}text-gray-300 leading-relaxed `}>
              We&apos;re a team committed to empowering the next generation with
              design skills. Offering affordable services, we&apos;re on a mission to make
              quality design accessible to all. Trusted by businesses and individuals,
              we offer free consultations to guide you. Whether an agency seeking
              support or an individual in need, we&apos;re here to help.
            </p>
          </div>
          <div className="relative h-[400px] -mt-14 md:mt-10">
            <Image
              src="/about/about1.svg"
              alt="Design elements illustration"
              layout="fill"
              className="object-contain"
            />
          </div>
        </div>

        {/* Second Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mt-3">
          <div className="space-y-6 order-1 lg:order-2 md:p-4">
            <div>
              <h2 className={`${clashGrotesk.className} text-4xl font-bold -mt-28 mb-1`}>Our Founder</h2>
              <div className="w-20 h-1 bg-[#6D40FF] mb-0"></div>
            </div>
            <p className={`${satoshi.className} text-gray-300 leading-relaxed `}>
              Meet Javed Somroo, the creative force driving Imagin Maker.
              With 5 years of expertise in graphic design, branding, and
              professional digital marketing, Javed leads our team in
              Pakistan, spearheading innovative projects that captivate
              audiences worldwide. His diverse skill set encompasses
              graphic and motion designing, digital marketing, animation,
              UI/UX design, video editing, photography, and branding,
              ensuring every project exceeds expectations.
            </p>
            <Link
              href="https://linkedin.com/JAVEDSOMROO"
              className="text-purple-500 hover:text-purple-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn.com/JAVEDSOMROO
            </Link>
          </div>
          <div className="relative h-[352px] order-2 lg:order-1 md:-mt-16 md:-right-28">
            <div className="absolute inset-0 rounded-3xl">
              <Image
                src="/about/about2.svg"
                alt="Founder"
                width={350}
                height={350}
                className="object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
