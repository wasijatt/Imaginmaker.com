import Image from 'next/image';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
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
      <div className="relative z-1o mx-auto max-w-7xl px-4 text-center">
        {/* Top Section */}
        <div className="mb-20 space-y-6">
          <p className="text-gray-300">Need help with a project?</p>
          <h2 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            Let's Talk!
          </h2>
          <div className="mx-auto h-1 w-24 bg-purple-600" />
          <div>
            <Button
              variant="secondary"
              className="bg-purple-600 px-8 py-6 text-lg hover:bg-purple-700"
            >
              Contact Us
            </Button>
          </div>
        </div>

        {/* Bottom Card */}
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl bg-black/60 backdrop-blur-sm">
          {/* Card Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/casestudy/bottomthirdcard.svg"
              alt="Card background"
              fill
              className="object-cover opacity-100"
            />
          </div>

          {/* Card Content */}
          <div className="relative flex flex-col items-center justify-between gap-8 p-8 md:flex-row md:p-12">
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
              className="w-full bg-purple-600 px-8 py-6 text-lg hover:bg-purple-700 md:w-auto"
            >
              Let's work together
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
