import { useTimer } from "react-timer-hook";
import { useEffect } from "react";
import FinalScreen from "./FinalScreen";

export default function Timer({
  expiryTimestamp,
  finished,
  handleFetchData,
  dispatch,
  setLevel,
}) {
  const { totalSeconds, pause } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  useEffect(() => {
    if (finished) {
      pause(); // Pausar el cronómetro cuando finished es true
    }
  }, [finished]);

  useEffect(() => {
    if (totalSeconds === 0) {
      setLevel(4);
      dispatch({ type: "CLEAR_BOARD" });
    }
  });

  return (
    <div>
      <div
        className={`${
          finished ? "hidden" : "flex"
        } justify-center items-center text-white text-[40px] mt-14 mb-14`}
      >
        <div className="overflow-hidden">
          <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="700">
            <span className={`${totalSeconds === 0 ? "hidden" : ""}`}>
              Te quedan {totalSeconds} segundos
            </span>
          </div>
        </div>
      </div>

      <div
        className={`${
          finished || totalSeconds === 0 ? "flex" : "hidden"
        } mt-14`}
      >
        <FinalScreen timeRemaining={totalSeconds} resetGame={handleFetchData} />
      </div>
    </div>
  );
}
