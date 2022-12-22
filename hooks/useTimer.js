import { useState, useEffect } from "react";

const useTimer = (duration, setShowScore) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(
        () => setTimeLeft((timeLeft) => timeLeft - 1),
        1000
      );
      return () => {
        clearTimeout(timer);
      };
    }
    if (timeLeft === 0) setShowScore(true);
  }, [timeLeft]);
  const resetTimer = () => {
    setTimeLeft(duration);
  };

  return [timeLeft, resetTimer];
};
export default useTimer;
