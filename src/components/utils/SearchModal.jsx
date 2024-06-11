import PropTypes from "prop-types";
import { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SearchModal = ({ onClose, classes, children }) => {
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
        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-[999999]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className={`bg-transparent bg-white dark:bg-darkGray dark:text-white w-auto fixed top-[400px] left-1/2 ${classes} rounded-lg`}
          initial={{ y: "-50%", x: "-50%", scale: 0.5 }}
          animate={{ y: "-50%", x: "-50%", scale: 1 }}
          exit={{ y: "-50%", x: "-50%", scale: 0.5, opacity: 0 }}
        >
          <div className="overflow-y-scroll h-auto">{children}</div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

SearchModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  classes: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default SearchModal;
