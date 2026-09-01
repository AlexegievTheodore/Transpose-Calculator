import { tunings } from "../types/tuning";
import type { Tuning } from "../types/tuning";

type TransposeResultProps = {
  sourceTuningId: string;
  targetTuningId: string;
};

function TransposeResult(props: TransposeResultProps) {
  const sourceTuning = tunings.find(
    (tuning) => tuning.id === props.sourceTuningId,
  );

  const targetTuning = tunings.find(
    (tuning) => tuning.id === props.targetTuningId,
  );

  function calculateTransposition(sourceTuning: Tuning, targetTuning: Tuning) {
    return targetTuning.pitches[0] - sourceTuning.pitches[0];
  }

  if (!sourceTuning || !targetTuning) {
    return null;
  }

  const result = calculateTransposition(
    sourceTuning as Tuning,
    targetTuning as Tuning,
  );

  return <div className="result">{result}</div>;
}

export default TransposeResult;
