import React, { useEffect, useRef } from "react";

const MessageInput = ({ value, onChange }) => {
  const input = useRef(null);

  const onInputKeyDown = (ev) => {
    if (ev.key === "Enter" && !ev.shiftKey) {
      ev.preventDefault();
    }
  };

  const onChangeEvent = (ev) => {
    onChange(ev);
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
    adjustHeight();
  }, [value]);

  return (
    <textarea
      ref={input}
      rows="1"
      className="w-full bg-[#F5F5F5] text-[15px] text-primary dark:bg-gray dark:text-slate-100 p-2 rounded-md outline-none placeholder:font-light placeholder:italic"
      value={value}
      onChange={onChangeEvent}
      onKeyDown={onInputKeyDown}
      placeholder="Type a message..."
    />
  );
};

export default MessageInput;
