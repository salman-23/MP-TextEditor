import "./App.css";
import { useState } from "react";

const styles = {
  bold: { fontWeight: "bold" },
  italic: { fontStyle: "italic" },
  underline: { textDecorationLine: "underline" },
};

const stylings = ["bold", "italic", "underline"];

const colors = ["yellow", "blue", "red", "black", "purple"];

function App() {
  const [text, setText] = useState("black");
  const [style, setStyle] = useState("");
  const [color, setColor] = useState("");

  const stylingBoxes = stylings.map((style) => (
    <button
      className="btn btn-light"
      style={styles[style]}
      key={style}
      onClick={() => setStyle(style)}
    >
      {style}
    </button>
  ));

  const colorBoxes = colors.map((color) => (
    <button
      style={{ backgroundColor: color, height: 30, width: 30 }}
      key={color}
      onClick={() => setColor(color)}
    />
  ));

  return (
    <div className="App">
      <div className="my-3">{stylingBoxes}</div>
      <textarea
        style={{
          color: color,
          fontWeight: style,
          fontStyle: style,
          textDecorationLine: style,
        }}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="my-3">{colorBoxes}</div>
    </div>
  );
}

export default App;
