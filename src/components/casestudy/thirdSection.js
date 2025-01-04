import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { clashGrotesk } from '@/lib/clashGroteskfont';
import { satoshi } from '@/lib/fonts';

const ContactSection = () => {
  return (
    <section className="relative min-h-[70vh] 2xl:h-[85vh] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/casestudy/secondbgsvg.svg"
          alt="Background pattern"
          fill
          className="object-cover opacity-100"
          priority
        />
      </div>

      {/* Content Container */}
      <div className="relative z-1o mx-auto max-w-7xl px-8 text-center mt-12 2xl:mt-24">
        {/* Top Section */}
        <div className="mb-20 space-y-6">
          <p className="text-gray-300">Need help with a project?</p>
          <h2 className={`${clashGrotesk.className} text-4xl font-bold text-white sm:text-5xl md:text-6xl tracking-wide`}>
            Let&apos;s Talk!
          </h2>
          <div className="mx-auto h-1 w-24 bg-[#6D40FF]" />
          <div>
            <Button
              variant="secondary"
              className={`${satoshi.className} bg-[#6D40FF] shadow-[0.5px_0.2px_7px_0.2px_rgba(125,64,255,55)] text-white px-9 py-3 text-lg hover:bg-purple-700 rounded-full font-bold`}
            >
              Contact Us
            </Button>
          </div>
        </div>

        {/* Bottom Card */}
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl py-16">
          {/* Card Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/casestudy/bottomthirdcard.svg"
              alt="Card background"
              fill
              className="object-cover opacity-100 "
            />
          </div>

          {/* Card Content */}
          <div className="relative flex flex-col items-center justify-between gap-8 p-10 md:flex-row md:p-12">
            <div className="flex items-start space-x-4">
              <Image
                src="/casestudy/third commas.svg"
                alt="Quote mark"
                width={40}
                height={40}
                className="mt-1"
              />
              <h3 className="text-left text-2xl font-semibold text-white md:text-3xl">
                Have an idea? We can help.<br />
                Start your project →
              </h3>
            </div>
            <Button
              variant="secondary"
              className={`${satoshi.className} w-full bg-[#6D40FF] shadow-[0.5px_0.2px_7px_0.2px_rgba(125,64,255,55)] text-white px-9 py-4 rounded-full text-lg hover:bg-purple-700 md:w-auto font-bold`}
            >
              Let&apos;s work together
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
