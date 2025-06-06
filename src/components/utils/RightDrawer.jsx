import PropTypes from "prop-types";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { BiSolidXCircle } from "react-icons/bi";

function RightDrawer({ isOpen, onClose, drawerWidth, children }) {
  return (
    <Drawer
      open={isOpen}
      direction="right"
      onClose={onClose}
      containerClassName="bg-white dark:bg-dark w-full"
      lockBackgroundScroll={true}
      style={{ width: drawerWidth ?? "100vw" }}
    >
      <div className="bg-white dark:bg-dark w-full h-full dark:border-l dark:border-gray/30 text-darken dark:text-slate-100 relative">
        <button onClick={onClose} className="absolute top-5 right-5 z-[999999]">
          <BiSolidXCircle className="text-2xl" />
        </button>
        {children}
      </div>
    </Drawer>
  );
}

RightDrawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  drawerWidth: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default RightDrawer;
