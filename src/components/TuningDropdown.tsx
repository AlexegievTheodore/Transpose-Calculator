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
  const dropdownId =
    props.type === "source" ? "source-tunings-dropdown" : "target-tunings-dropdown";

  return (
    <div className="tuning-select">
      <span className="tuning-select-label">
        {props.type === "source" ? "Source" : "Target"} Tuning
      </span>
      <select
        id={dropdownId}
        className="tunings-dropdown"
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
      >
        {filteredTunings.map((tuning) => (
          <option key={tuning.id} value={tuning.id}>
            {tuning.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default TuningDropdown;