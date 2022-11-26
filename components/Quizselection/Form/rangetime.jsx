import { useDispatch, useSelector } from "react-redux";
import { setTime } from "../../../store/actions/main.js";

export const Inputtime = () => {
  const dispatch = useDispatch();
  const time = useSelector((state) => state.main)?.time;
  return (
    <div className="relative pt-1">
      <label for="customRange3" className="form-label">
        Time for this test: {time}
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
        max={60}
        step="1"
        onChange={(e) => dispatch(setTime(e.target.value))}
      />
    </div>
  );
};
