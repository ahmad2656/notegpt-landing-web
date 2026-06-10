"use client";
import "./Button.css";

const Button = ({ link, ailinks }) => {
  return (
    <button onClick={ailinks}>
      <span className="text">{link}</span>
    </button>
  );
};

export default Button;
