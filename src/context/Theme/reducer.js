import { SET_CARD_THEME, SET_FONT_THEME, SET_THEME } from "./types";

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_THEME:
      return {
        ...state,
        theme: payload,
      };

    case SET_CARD_THEME:
      return {
        ...state,
        cardTheme: payload,
      };

    case SET_FONT_THEME:
      return {
        ...state,
        fontTheme: payload,
      };

    default:
      return state;
  }
};

export default reducer;
