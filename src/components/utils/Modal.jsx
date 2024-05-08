import React, { useRef } from "react";
import { BiX } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";

const Modal = ({ onClose, classes, children }) => {
  const modalRef = useRef();

  const closeModel = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        ref={modalRef}
        onClick={closeModel}
        className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-[999999]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className={`bg-[#fbfafa] dark:text-white dark:bg-primary w-[95%] md:w-[50%] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${classes} rounded-lg`}
          initial={{ y: "-50%", x: "-50%", scale: 0.5 }}
          animate={{ y: "-50%", x: "-50%", scale: 1 }}
          exit={{ y: "-50%", x: "-50%", scale: 0.5, opacity: 0 }}
        >
          <button onClick={onClose} className="absolute top-5 right-5">
            <BiX className="text-3xl dark:text-slate-100" />
          </button>
          <div className="overflow-y-scroll h-full">{children}</div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Modal;
