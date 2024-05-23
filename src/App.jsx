import React, { useContext, useState } from "react";
import Board from "./components/Boad";
import ModalPreferences from "./components/ModalPreferences";
import { ThemeContext } from "./context/Theme";
import { FaGear } from "react-icons/fa6";
import "./App.scss";

const App = () => {
  const [showModalPreferences, setShowModalPreferences] = useState(false);
  const { theme, cardTheme, fontTheme } = useContext(ThemeContext);

  return (
    <main
      className="App"
      style={{
        "--bg": theme,
        "--bgCard": cardTheme,
        "--fontColor": fontTheme,
      }}
    >
      <h1>UTTIL Frontend (ReactJs) Challenge por Jonathan Narvaez</h1>
      <Board />
      <FaGear
        onClick={() => setShowModalPreferences(true)}
        className="btn-float-preferences"
      />
      {showModalPreferences && (
        <ModalPreferences onClose={() => setShowModalPreferences(false)} />
      )}
    </main>
  );
};

export default App;
