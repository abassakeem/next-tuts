import React from "react";

export default function Card({ children }: { children?: React.ReactNode }) {
  const cardStyle = {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
  };
  return <div style={cardStyle}>{children}</div>;
}
