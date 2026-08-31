// import type { Dispatch, SetStateAction } from "react";

type TuningFilterProps = {
  showDropTunings: boolean;
  onChange: (value: boolean) => void;
};

function TuningFilter(props: TuningFilterProps) {
  return (
    <>
      <label htmlFor="drop-tunings">
        <input
          type="checkbox"
          checked={props.showDropTunings}
          onChange={(e) => props.onChange(e.target.checked)}></input>
        Drop tunings
      </label>
    </>
  );
}

export default TuningFilter;
