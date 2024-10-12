import { useRef } from "react";
import { BiX } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";

const QRModal = ({ onClose, classes = "", children }) => {
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
        className="fixed inset-0 bg-black bg-opacity-50 z-[999999] flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className={`relative bg-white dark:text-white dark:bg-darkGray w-full max-w-lg p-5 sm:p-8 rounded-lg shadow-lg ${classes}`}
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
        >
          <button onClick={onClose} className="absolute top-3 right-3">
            <BiX className="text-3xl text-gray-700 dark:text-white" />
          </button>
          <div className="overflow-y-auto max-h-[80vh]">{children}</div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default QRModal;
