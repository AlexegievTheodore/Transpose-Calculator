import { tunings } from "../types/tuning";
import type { Dispatch, SetStateAction } from "react";

type TuningDropdownProps = {
  type: string;
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
  showDropTunings: boolean;
};

function TuningDropdown(props: TuningDropdownProps) {
  const filteredTunings = tunings.filter(
    (tuning) => tuning.type === (props.showDropTunings ? "drop" : "standard"),
  );

  return (
    <>
      <label htmlFor="tunings-dropdown">
        <select
          value={props.value}
          onChange={(e) => props.onChange(e.target.value)}>
          {filteredTunings.map((tuning) => (
            <option key={tuning.id} value={tuning.id}>
              {tuning.name}
            </option>
          ))}
        </select>
        {props.type === "source" ? "Source" : "Target"} Tuning
      </label>
    </>
  );
}

export default TuningDropdown;
