import { useDispatch, useSelector } from "react-redux";
import { setNumOfQuestion } from "../../../store/actions/main.js";

export const Inputrange = (props) => {
  const dispatch = useDispatch();
  const numOfQuestion = useSelector((state) => state.main)?.numOfQuestion;

  return (
    <div className="relative pt-1">
      <label for="customRange3" className="form-label">
        Number of questions: {numOfQuestion}
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
        min="1"
        max={props.length}
        step="1"
        onChange={(e) => dispatch(setNumOfQuestion(e.target.value))}
      />
    </div>
  );
};
