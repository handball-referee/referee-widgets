import React, {
  FunctionComponent, MouseEvent, ReactElement, ReactNode, useState,
} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import { Props as MenuProps } from "./Menu";
import "./AppShell.css";

interface Props {
  logo: string;
  title: string;
  toggleText: string;
  menu: ReactElement<MenuProps>;
  children: ReactNode;
  headerContent?: ReactNode;
}


const AppShell: FunctionComponent<Props> = ({
  menu,
  children,
  title,
  toggleText,
  headerContent,
  logo,
}) => {
  const [open, setOpen] = useState(false);

  const handleToggleOpen = (event: MouseEvent) => {
    event.preventDefault();

    setOpen(!open);
  };

  const menuClassName = classNames("hbwPageMenu", {
    open,
  });
  const rotation = open ? 180 : undefined;

  return (
    <div className="hbwPageWrapper">
      <section className={menuClassName}>
        <div className="hbwPageLogo">
          <img src={logo} alt={title} />
        </div>
        {menu}
        <div className="hbwSpacer" />
        <div className="hbwPageMenuFooter">
          <button type="button" onClick={handleToggleOpen} aria-pressed={open} aria-label={toggleText}>
            <FontAwesomeIcon icon={faArrowAltCircleRight} size="lg" rotation={rotation} />
          </button>
        </div>
      </section>
      <section className="hbwPageBody">
        <header>
          <h1>{title}</h1>
          <div className="hbwHeaderContent">
            {headerContent}
          </div>
        </header>
        <main>
          {children}
        </main>
      </section>
    </div>
  );
};

export default AppShell;
