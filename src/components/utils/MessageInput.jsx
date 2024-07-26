import PropTypes from "prop-types";
import { useEffect, useRef } from "react";

const MessageInput = ({ value, onChange }) => {
  const input = useRef(null);

  const onInputKeyDown = (ev) => {
    if (ev.key === "Enter" && !ev.shiftKey) {
      ev.preventDefault();
    }
  };

  const onInputChange = () => {
    const htmlContent = input.current.innerHTML;
    onChange({ target: { value: htmlContent } });
    setTimeout(() => {
      adjustHeight();
    }, 10);
  };

  const adjustHeight = () => {
    setTimeout(() => {
      input.current.style.height = "auto";
      input.current.style.height = input.current.scrollHeight + 1 + "px";
    }, 100);
  };

  useEffect(() => {
    if (input.current && input.current.innerHTML !== value) {
      input.current.innerHTML = value;
      adjustHeight();
    }
  }, [value]);

  return (
    <div
      ref={input}
      contentEditable
      className="w-full bg-[#F5F5F5] text-[15px] text-primary dark:bg-gray dark:text-slate-100 p-2 rounded-md outline-none placeholder:font-light placeholder:italic"
      onInput={onInputChange}
      onKeyDown={onInputKeyDown}
      placeholder="Type a message..."
      data-placeholder="Type a message..."
      suppressContentEditableWarning
    />
  );
};

MessageInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default MessageInput;
