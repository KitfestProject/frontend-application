// src/TagsInput.js
import React, { useState } from "react";
import "./TagsInput.css";

const TagsInput = ({ tags, setTags }) => {
  const [input, setInput] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && input.trim() !== "") {
      e.preventDefault();
      if (!tags.includes(input.trim())) {
        setTags([...tags, input.trim()]);
        setInput("");
      }
    } else if (e.key === "Backspace" && input === "") {
      e.preventDefault();
      removeTag(tags.length - 1);
    }
  };

  const removeTag = (index) => {
    setTags(tags.filter((tag, i) => i !== index));
  };

  return (
    <div className="tags-input-container">
      {tags.map((tag, index) => (
        <div className="tag" key={index}>
          {tag}
          <button type="button" onClick={() => removeTag(index)}>
            &times;
          </button>
        </div>
      ))}
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Add a tag"
      />
    </div>
  );
};

export default TagsInput;
