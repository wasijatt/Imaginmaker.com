"use client";
import { useState } from "react";
import { FaAngleUp ,FaAngleDown} from "react-icons/fa";

const Faqs = () => {
  const [faqs, setFaqs] = useState([
    {
     question:" Why should I choose Imagin Maker's design services over hiring a full-time designer?",
            
     answer:" Choosing Imagin Maker's design services offers you flexibility and cost-effectiveness. With our services, you get access to a team of skilled designers without the overhead costs associated with hiring a full-time designer. Additionally, you benefit from diverse perspectives and expertise from our team, ensuring high-quality designs tailored to your needs."
    },
    {
     question:"What is the limit on the number of design requests I can make with Imagin Maker?",
    
     answer:" At Imagin Maker, we offer flexible design packages tailored to your needs. There's no strict limit on the number of design requests you can make. We work with you to accommodate your design needs within your chosen package, ensuring you receive the designs you need to succeed."
    },
  {
      question:"What is the turnaround time for receiving designs from Imagin Maker?",
    
      answer: "We understand the importance of timely delivery. At Imagin Maker, our turnaround time varies based on the complexity of your project and your chosen package. However, we strive to deliver your designs promptly, ensuring you receive them in a timely manner to meet your deadlines."
    },
  {
      question: "Who are the talented designers behind Imagin Maker's design services?",
    
      answer:" At Imagin Maker, we have a team of experienced and creative designers who are passionate about bringing your vision to life. Our designers are carefully selected for their expertise, creativity, and dedication to delivering exceptional designs that resonate with your audience."
    },
  {
      question: "Can you explain how the pause feature works with Imagin Maker's design services?",
    
      answer: "The pause feature offers flexibility and control over your design requests. With this feature, you can temporarily pause your subscription while retaining your unused design requests. This allows you to manage your design projects according to your schedule and priorities, ensuring you get the most out of our services."
    },
  {
      question: "In which design programs does Imagin Maker specialize?",
    
      answer :" At Imagin Maker, our designers are proficient in a wide range of industry-standard design and animation software's, including Adobe Photoshop, Illustrator, Premiere Pro, blender and After Effects, among others. We leverage the latest tools and technologies to ensure your designs are created with precision and creativity. Also our expertise are in UI/UX Design and making website through CMS platforms and code."
    },
  {
      question:" What is the process for requesting designs with Imagin Maker?",
    
      answer:" Requesting designs with Imagin Maker is simple and hassle-free. You can submit your design requests through our website, (LINK) where you'll provide details about your project, such as your preferences, specifications, and any reference materials. Our team will then review your request and begin working on your designs promptly. Also you can contact us directly. We response very fast."
    },
  {
      question: "Are there any specific types of design work that Imagin Maker does not cover?",
    
      answer:" At Imagin Maker, we offer a comprehensive range of design services to meet your needs. While we specialize in graphic design, motion design, and more, there may be certain niche or highly specialized design work that we may not cover. However, we're always open to discussing your specific requirements and exploring how we can assist you."
    },
  {
      question:" Can I use Imagin Maker's design services for a single design request?",
     
      answer:" Absolutely! At Imagin Maker, we cater to clients with varying design needs, whether it's a single request or ongoing design projects. Our flexible packages allow you to utilize our services based on your specific requirements, ensuring you receive high-quality designs tailored to your needs, no matter the scope."
    },
  {
      question:" What is the refund policy if I'm not satisfied with Imagin Maker's design services?",
    
      answer: "At Imagin Maker, we strive for 100% client satisfaction. If for any reason you're not satisfied with our services, we encourage you to reach out to our customer support team to discuss your concerns. While we don't offer refunds as per our policy, we're committed to addressing any issues and ensuring you're delighted with the final outcome of your design projects"
    },
  
   
    
  ]);

  const FaqItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
      setIsOpen(!isOpen);
    };

    return (
      <div className="lg:h-full">
        <div className="flex items-center justify-between relative " onClick={toggle} style={{ cursor: "pointer" }}>
          <h3 className="text-white text-sm lg:text-xl py-5 mx-4 w-full bottomBorder ">{question} </h3>
          {isOpen ? <FaAngleUp className="absolute right-4 text-[#838282] w-5 h-5 " /> : <FaAngleDown className="absolute right-4 text-[#e1e1e1] w-6 h-6" />}
           
        </div>
        <div className={`transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
        {isOpen && <p className="text-[#8c8c8c] text-sm lg:text-xl py-2 px-8">{answer}</p>}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-[#191919] border-b- border-white">
      <div className="w-full  lg:w-[47%] m-auto p-4 mld:px-7 py-12 ">
        <h1 className="text-white text-center text-[40px]">FAQs</h1>
        {faqs.map((faq, index) => (
          <FaqItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default Faqs;
