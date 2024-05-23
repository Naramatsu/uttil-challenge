import React, { useContext } from "react";
import { ThemeContext } from "../../context/Theme";
import { IoMdClose } from "react-icons/io";
import "./ModalPreferences.style.scss";
import {
  cardThemeLabel,
  fontColorLabel,
  preferencesConfigLabel,
  themeLabel,
} from "../../constants";

const ModalPreferences = ({ onClose }) => {
  const { setTheme, setCardTheme, setFontTheme } = useContext(ThemeContext);
  return (
    <section className="modal modal-preferences">
      <section className="modal-container">
        <IoMdClose className="btn-close-modal" onClick={onClose} />
        <h3>{preferencesConfigLabel}</h3>
        <section className="input-group">
          <label>{themeLabel}</label>
          <input
            type="color"
            onChange={(event) => setTheme(event.target.value)}
          />
        </section>
        <section className="input-group">
          <label>{cardThemeLabel}</label>
          <input
            type="color"
            onChange={(event) => setCardTheme(event.target.value)}
          />
        </section>
        <section className="input-group">
          <label>{fontColorLabel}</label>
          <input
            type="color"
            onChange={(event) => setFontTheme(event.target.value)}
          />
        </section>
      </section>
    </section>
  );
};

export default ModalPreferences;
