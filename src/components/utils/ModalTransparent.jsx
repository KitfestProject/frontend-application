import PropTypes from "prop-types";
import { useRef } from "react";
import { BiX } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";

const ModalTransparent = ({ onClose, classes, children }) => {
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
          className={`bg-transparent dark:text-white w-auto fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${classes} rounded-lg`}
          initial={{ y: "-50%", x: "-50%", scale: 0.5 }}
          animate={{ y: "-50%", x: "-50%", scale: 1 }}
          exit={{ y: "-50%", x: "-50%", scale: 0.5, opacity: 0 }}
        >
          <button onClick={onClose} className="absolute top-4 right-0">
            <BiX className="text-3xl text-slate-100" />
          </button>
          <div className="overflow-y-scroll h-full">{children}</div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

ModalTransparent.propTypes = {
  onClose: PropTypes.func.isRequired,
  classes: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default ModalTransparent;
