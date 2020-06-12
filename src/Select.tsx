import React, {
  FunctionComponent, MouseEvent, KeyboardEvent, ReactElement, useState, ReactNode,
} from "react";
import "./Select.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";

interface Props {
  children: Array<ReactElement<ItemProps>>;
  onChange: (value: string) => void;
  mode?: "dropdown" | "sidebar";
  label: string;
  value?: string;
}

export interface ItemProps {
  value: string;
  className?: string;
  onClick?: () => void;
  selected?: boolean;
  children: ReactNode;
}

export const SelectItem: FunctionComponent<ItemProps> = ({
  selected,
  children,
  onClick,
  className,
}) => (
  <li
    className={className}
    role="option"
    aria-selected={selected}
    onClick={onClick}
  >
    {children}
  </li>
);

const Select: FunctionComponent<Props> = ({
  label, value, children, onChange,
}) => {
  const [open, setOpen] = useState(false);

  const handleTogglePopup = (event: MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();

    setOpen(!open);
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.keyCode === 32) {
      setOpen(!open);
    } else if (open) {
      if (event.keyCode === 27 || event.keyCode === 9) {
        setOpen(false);
      } else {
        return;
      }
    } else if (event.keyCode === 40) {
      setOpen(true);
    } else {
      return;
    }

    event.preventDefault();
  };

  let content = null;
  const items = React.Children.map(children, (item: ReactElement<ItemProps>) => {
    const isSelected = item.props.value === value;
    if (isSelected) {
      content = item.props.children;
    }

    return React.cloneElement(item, {
      selected: isSelected,
      onClick: () => onChange(item.props.value),
    });
  });

  const className = classNames("hbwSelect", {
    open,
  });

  return (
    <div
      className={className}
      role="listbox"
      aria-label={label}
      tabIndex={0}
      onClick={handleTogglePopup}
      onKeyDown={handleKeyDown}
    >
      <div className="hbwSelectContent">
        {content}
      </div>
      <div className="hbwSelectIndicator">
        <FontAwesomeIcon icon={faAngleDown} />
      </div>
      <ul className="hbwSelectPopup">
        {items}
      </ul>
    </div>
  );
};

Select.defaultProps = {
  mode: "dropdown",
};

export default Select;
