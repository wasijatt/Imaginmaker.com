"use client";
import { useState } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

const Faqs = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "Why should I choose Imagin Maker's design services over hiring a full-time designer?",
      answer: "Choosing Imagin Maker's design services offers you flexibility and cost-effectiveness. With our services, you get access to a team of skilled designers without the overhead costs associated with hiring a full-time designer. Additionally, you benefit from diverse perspectives and expertise from our team, ensuring high-quality designs tailored to your needs.",
    },
    {
      question: "What is the limit on the number of design requests I can make with Imagin Maker?",
      answer: "At Imagin Maker, we offer flexible design packages tailored to your needs. There's no strict limit on the number of design requests you can make. We work with you to accommodate your design needs within your chosen package, ensuring you receive the designs you need to succeed.",
    },
    {
      question: "What is the turnaround time for receiving designs from Imagin Maker?",
      answer: "We understand the importance of timely delivery. At Imagin Maker, our turnaround time varies based on the complexity of your project and your chosen package. However, we strive to deliver your designs promptly, ensuring you receive them in a timely manner to meet your deadlines.",
    },
    {
      question: "Who are the talented designers behind Imagin Maker's design services?",
      answer: "At Imagin Maker, we have a team of experienced and creative designers who are passionate about bringing your vision to life. Our designers are carefully selected for their expertise, creativity, and dedication to delivering exceptional designs that resonate with your audience.",
    },
    {
      question: "Can you explain how the pause feature works with Imagin Maker's design services?",
      answer: "The pause feature offers flexibility and control over your design requests. With this feature, you can temporarily pause your subscription while retaining your unused design requests. This allows you to manage your design projects according to your schedule and priorities, ensuring you get the most out of our services.",
    },
    {
      question: "In which design programs does Imagin Maker specialize?",
      answer: "At Imagin Maker, our designers are proficient in a wide range of industry-standard design and animation software, including Adobe Photoshop, Illustrator, Premiere Pro, Blender, and After Effects, among others. We leverage the latest tools and technologies to ensure your designs are created with precision and creativity. Also, our expertise is in UI/UX Design and making websites through CMS platforms and code.",
    },
    {
      question: "What is the process for requesting designs with Imagin Maker?",
      answer: "Requesting designs with Imagin Maker is simple and hassle-free. You can submit your design requests through our website, (LINK) where you'll provide details about your project, such as your preferences, specifications, and any reference materials. Our team will then review your request and begin working on your designs promptly. Also, you can contact us directly. We respond very fast.",
    },
    {
      question: "Are there any specific types of design work that Imagin Maker does not cover?",
      answer: "At Imagin Maker, we offer a comprehensive range of design services to meet your needs. While we specialize in graphic design, motion design, and more, there may be certain niche or highly specialized design work that we may not cover. However, we're always open to discussing your specific requirements and exploring how we can assist you.",
    },
    {
      question: "Can I use Imagin Maker's design services for a single design request?",
      answer: "Absolutely! At Imagin Maker, we cater to clients with varying design needs, whether it's a single request or ongoing design projects. Our flexible packages allow you to utilize our services based on your specific requirements, ensuring you receive high-quality designs tailored to your needs, no matter the scope.",
    },
    {
      question: "What is the refund policy if I'm not satisfied with Imagin Maker's design services?",
      answer: "At Imagin Maker, we strive for 100% client satisfaction. If for any reason you're not satisfied with our services, we encourage you to reach out to our customer support team to discuss your concerns. While we don't offer refunds as per our policy, we're committed to addressing any issues and ensuring you're delighted with the final outcome of your design projects.",
    },
  ]);

  const FaqItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
      setIsOpen(!isOpen);
    };

    return (
      <div className="mb-4">
        <div
          className="flex items-center justify-between relative cursor-pointer"
          onClick={toggle}
        >
          <h3 className="text-white text-base md:text-lg lg:text-xl mxl:text-2xl py-4 w-full border-b border-white">
            {question}
          </h3>
          {isOpen ? (
            <FaAngleUp className="absolute right-4 text-gray-400 w-5 h-5" />
          ) : (
            <FaAngleDown className="absolute right-4 text-gray-400 w-5 h-5" />
          )}
        </div>
        <div
          className={`transition-opacity duration-500 ${
            isOpen ? "opacity-100 max-h-full" : "opacity-0 max-h-0 overflow-hidden"
          }`}
        >
          {isOpen && (
            <p className="text-gray-400 text-sm md:text-base lg:text-lg mxl:text-xl py-2 px-4 md:px-6">
              {answer}
            </p>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-black">
      <div className="w-full lg:w-[80%] mx-auto px-4 md:px-6 lg:px-8 py-8 lg:py-16">
        <h1 className="text-white text-center text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
        You’ve  Got Questions, We’ve Got <br /> Answers.
        </h1>
        {faqs.map((faq, index) => (
          <FaqItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default Faqs;
