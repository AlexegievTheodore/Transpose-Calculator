// import type { Dispatch, SetStateAction } from "react";

type TuningFilterProps = {
  showDropTunings: boolean;
  onChange: (value: boolean) => void;
};

function TuningFilter(props: TuningFilterProps) {
  return (
    <label htmlFor="drop-tunings" className="tuning-filter">
      <span className="tuning-filter-label">Drop tunings</span>
      <input
        id="drop-tunings"
        className="tuning-toggle"
        type="checkbox"
        checked={props.showDropTunings}
        onChange={(e) => props.onChange(e.target.checked)}
      />
    </label>
  );
}

export default TuningFilter;
