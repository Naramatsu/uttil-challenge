import React, { useReducer } from "react";
import Reducer from "./reducer";
import { ThemeContext } from ".";
import { SET_CARD_THEME, SET_FONT_THEME, SET_THEME } from "./types";

const ThemeState = ({ children }) => {
  const initialState = {
    theme: "#f4f6f6",
    cardTheme: "#fff",
    fontTheme: "#000",
  };
  const [globalState, dispatch] = useReducer(Reducer, initialState);

  const setTheme = (theme) => {
    dispatch({
      type: SET_THEME,
      payload: theme,
    });
  };

  const setCardTheme = (cardTheme) => {
    dispatch({
      type: SET_CARD_THEME,
      payload: cardTheme,
    });
  };

  const setFontTheme = (fontTheme) => {
    dispatch({
      type: SET_FONT_THEME,
      payload: fontTheme,
    });
  };

  const combineFunctions = {
    setTheme,
    setCardTheme,
    setFontTheme,
  };

  return (
    <ThemeContext.Provider value={{ ...globalState, ...combineFunctions }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeState;
