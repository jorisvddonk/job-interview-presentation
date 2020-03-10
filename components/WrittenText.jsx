import { React } from "react";

export const WrittenText = ({ children }) => {
  return <div style={{ background: "#ddd", fontFamily: "cursive", color: "#115", fontSize: "0.8em", padding: "1em" }}>
    {children}
  </div>
}
