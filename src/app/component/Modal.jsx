
import { motion } from 'framer-motion';
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";
import Image from 'next/image';
const Modal = ({ isOpen, onClose, images, selectedIndex, onPrevious, onNext }) => {

  return (
    <>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex justify-center items-center backdrop-blur-lg bg-[#000000e4] bg-opacity-50 w-full overlay"
          onClick={onClose}
        >
          <motion.div
            className="w-70%"
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="relative  w-[800px]">
              <Image
                src={images[selectedIndex]}
                alt={`Graphic ${selectedIndex}`}
                width={100}
            height={100}
                className="rounded-lg h-full w-full"
              />
            </div>
            <div className="flex justify-between mt-4">
              <button className="text-[#7700ff] bg-white rounded-full absolute -left-[10%] top-1/2 p-3" onClick={onPrevious}>
                <MdOutlineNavigateBefore className='text-xl' />
              </button>
              <button className="text-[#7700ff] bg-white  rounded-full absolute -right-[10%] top-1/2 p-3" onClick={onNext}>
                <MdOutlineNavigateNext className='text-xl' />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Modal;

