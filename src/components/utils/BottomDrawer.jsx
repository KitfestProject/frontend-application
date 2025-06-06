import PropTypes from "prop-types";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { BiSolidXCircle } from "react-icons/bi";

function BottomDrawer({ isOpen, onClose, height, children, classes }) {
  return (
    <Drawer
      open={isOpen}
      direction="bottom"
      onClose={onClose}
      containerClassName="bg-white dark:bg-dark w-full"
      style={{ height: height ?? "100vh" }}
      lockBackgroundScroll={true}
    >
      <div
        className={`bg-white dark:bg-dark w-full h-full dark:border-t dark:border-slate-700 text-darken dark:text-slate-100 relative overflow-y-scroll ${classes}`}
      >
        <button onClick={onClose} className="absolute top-5 right-5">
          <BiSolidXCircle className="text-2xl" />
        </button>
        {children}
      </div>
    </Drawer>
  );
}

BottomDrawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  height: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default BottomDrawer;
