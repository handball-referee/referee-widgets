import React, { FunctionComponent, KeyboardEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import "./CheckBox.css";

interface Props {
  checked: boolean;
  onChange?: (selected: boolean) => void;
  label?: string;
  labelledBy?: string;
  readOnly?: boolean;
}

const CheckBox: FunctionComponent<Props> = ({
  checked,
  onChange,
  label,
  labelledBy,
  readOnly,
}) => {
  const handleChange = () => onChange && onChange(!checked);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.keyCode === 32 && onChange) {
      handleChange();
    }
  };

  return (
    <div
      className="hbwCheckbox"
      role="checkbox"
      aria-checked={checked}
      tabIndex={0}
      onClick={handleChange}
      onKeyDown={handleKeyDown}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        readOnly={readOnly}
        aria-label={label}
        aria-labelledby={labelledBy}
      />
      <FontAwesomeIcon className="checkmark" icon={faCheck} />
    </div>
  );
};

export default CheckBox;
