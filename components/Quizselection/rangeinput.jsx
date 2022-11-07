import { useState } from "react";
export const InputRange = (props) => {
  const [numberOfquestion, setNumberofquestion] = useState(10);
  return (
    <div className="relative pt-1">
      <label for="customRange3" className="form-label">
        Number of questions: {numberOfquestion}
      </label>
      <input
        type="range"
        className="
      form-range
      appearance-none
      w-full
      h-3
        rounded-lg
      p-0
      bg-gray-200
      focus:outline-none focus:ring-0 focus:shadow-none
    "
        min="0"
        max={props.length}
        step="1"
        value={numberOfquestion}
        onChange={(e) => setNumberofquestion(e.target.value)}
      />
    </div>
  );
};
