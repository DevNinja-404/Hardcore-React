import { useState } from "react";

const ToogleBackgroundColor = () => {
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");

  const [textColor, setTextColor] = useState("#000000");
  const [buttonStyle, setButtonStyle] = useState("#4052d6");

  const handleClick = () => {
    setBackgroundColor(backgroundColor === "#ffffff" ? "#21130d" : "#ffffff");
    setTextColor(textColor === "#000000" ? "#ffffff" : "#000000");
    setButtonStyle(buttonStyle === "#4052d6" ? "#b10790" : "#4052d6");
  };

  return (
    <div
      className={`min-h-[100vh] w-[100vw] flex justify-center items-center `}
      style={{ backgroundColor, color: textColor }}
    >
      <button
        onClick={handleClick}
        className={`px-5 py-2 rounded-md absolute top-5 right-10 `}
        style={{
          color: textColor,
          backgroundColor: buttonStyle,
          border: backgroundColor,
        }}
      >
        {backgroundColor === "#ffffff" ? "Dark Theme" : "Light Theme"}
      </button>
      <div className="text-6xl">Hello, Hi, Bye ,Bye</div>
    </div>
  );
};

export default ToogleBackgroundColor;
