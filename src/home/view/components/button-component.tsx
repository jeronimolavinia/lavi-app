import React from "react";

interface ButtonProps {
  type: "button" | "submit" | "reset";
  onClick?: () => void;
  children: React.ReactNode;
}

export default class ButtonComponent extends React.Component<ButtonProps> {
  render() {
    const { type, onClick, children } = this.props;

    return (
      <button className="btn btn-danger" type={type} onClick={onClick}>
        {children}
      </button>
    );
  }
}
