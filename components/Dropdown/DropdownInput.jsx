import React, { useState } from "react";

const DropdownInput = ({ options, handleChange }) => {
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState(options);

  const handleInputChange = (e) => {
    setSearch(e.target.value);
    setSuggestions(
      options.filter((option) =>
        option.label.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
    handleChange(e)
  };

  return (
    <div className="m-20">
      <label className="text-black">Subject:</label>
      <input
        type="text"
        value={search}
        onChange={handleInputChange}
        placeholder="Search..."
      />
      {suggestions.map((suggestion) => (
        <p
          key={suggestion.value}
          onClick={() => {
            setSearch(suggestion.label);
            handleChange({ target: { value: suggestion.value } });
          }}
          className="text-black"
        >
          {suggestion.label}
        </p>
      ))}
    </div>
  );
};

export default DropdownInput;
