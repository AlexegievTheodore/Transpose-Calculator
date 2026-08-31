import "./TranspositionCalculator.css";
import { useState } from "react";
import TuningDropdown from "./components/TuningDropdown";
import TuningFilter from "./components/TuningFilter";
import TransposeResult from "./components/TransposeResult";

function TranspositionCalculator() {
  const [sourceTuning, setSourceTuning] = useState<string>("e-standard");
  const [targetTuning, setTargetTuning] = useState<string>("e-standard");
  const [showDropTunings, setShowDropTunings] = useState<boolean>(false);

  function handleToggleDropTunings(showDrop: boolean) {
    setShowDropTunings(showDrop);

    if (showDrop) {
      setSourceTuning("drop-d");
      setTargetTuning("drop-d");
    } else {
      setSourceTuning("e-standard");
      setTargetTuning("e-standard");
    }
  }

  return (
    <>
      <div>
        {/* <h3>Current Tuning</h3> */}
        <TuningDropdown
          type = "source"
          value={sourceTuning}
          onChange={setSourceTuning}
          showDropTunings={showDropTunings}
        />
      </div>
      <TransposeResult
        sourceTuningId={sourceTuning}
        targetTuningId={targetTuning}
      />
      <div>
        {/* <h3>Target Tuning</h3> */}
        <TuningDropdown
          type = "target"
          value={targetTuning}
          onChange={setTargetTuning}
          showDropTunings={showDropTunings}
        />
      </div>
      <div>
        {/* <p>Enable Drop Tunings</p> */}
        <TuningFilter
          showDropTunings={showDropTunings}
          onChange={handleToggleDropTunings}></TuningFilter>
      </div>
    </>
  );
}

export default TranspositionCalculator;
