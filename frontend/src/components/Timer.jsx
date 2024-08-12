
import { useEffect } from "react";
import FinalScreen from "./FinalScreen";

export default function Timer({
  totalSeconds,
  finish,
  handleFetchData,
  dispatch,
  setLevel,
  finalScore
}) {

  useEffect(() => {
    if (finish) {
      
     
      dispatch({type:'FINAL_SCORE',payload:totalSeconds})
    }
  }, [finish]);

  useEffect(() => {
    if (totalSeconds === 0) {
      setLevel(4);
      dispatch({type:"FINAL_SCORE", payload: 5})
      dispatch({ type: "CLEAR_BOARD" });
    }
  }, [totalSeconds, setLevel, dispatch]);
  return (
    <div>
      <div
        className={`${
          finish ? "hidden" : "flex"
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
          totalSeconds === 0 ? "flex" : "hidden"
        } mt-14`}
      >
        <FinalScreen finalScore = {finalScore} resetGame={handleFetchData} />
      </div>
    </div>
  );
}
