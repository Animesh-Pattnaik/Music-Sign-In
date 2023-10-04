import React from "react";

const CustomButton = ({ onClick, label }) => {
  const buttonStyle = {
    backgroundColor: "#0F1B4C",
    color: "white",
    border: "2px solid #0F1B4C",
    padding: "10px 20px",
    borderRadius: "7px",
    cursor: "pointer",
    fontWeight: "700",
    fontSize: "16px",
    transition: "background-color 0.3s, border-color 0.3s, color 0.3s",
  };

  const hoverStyle = {
    backgroundColor: "white",
    color: "darkblue",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: "2px solid #0F1B4C",
  };

  const buttonContainerStyle = {
    display: "flex",
    justifyContent: "center",
  };

  return (
    <div style={buttonContainerStyle}>
    <button
      type="submit"
      onClick={onClick}
      style={buttonStyle}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = hoverStyle.backgroundColor;
        e.currentTarget.style.color = hoverStyle.color;
        e.currentTarget.style.borderColor = hoverStyle.border;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor;
        e.currentTarget.style.color = buttonStyle.color;
        e.currentTarget.style.borderColor = buttonStyle.border;
      }}
    >
      {label}
    </button>
    </div>
  );
};

export default CustomButton;
