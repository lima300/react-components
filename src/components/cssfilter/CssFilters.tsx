import { useState } from "react";
import "./styles.scss";
export const CssFilters = () => {
  const [filter, setFilter] = useState<string>("");
  return (
    <div className="selectors-container">
      <div className="title">CSS Filter Property</div>
      <div className="image" onMouseEnter={() => setFilter("")}>
        <img
          style={{ filter: filter }}
          src="https://images.unsplash.com/photo-1695531333363-e1d7464c40f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80"
        />
      </div>
      <div
        className="unit"
        onMouseEnter={() => setFilter("grayscale(100%)")}
        onMouseLeave={() => setFilter("")}
      >
        <div className="unit-title">filter: grayscale(100%)</div>
      </div>
      <div
        className="unit u2"
        onMouseEnter={() => setFilter("brightness(75%)")}
        onMouseLeave={() => setFilter("")}
      >
        <div className="unit-title">filter: brightness(75%)</div>
      </div>
      <div
        className="unit u3"
        onMouseEnter={() => setFilter("sepia(50%)")}
        onMouseLeave={() => setFilter("")}
      >
        <div className="unit-title">filter: sepia(50%)</div>
      </div>
      <div
        className="unit u4"
        onMouseEnter={() => setFilter("saturate(300%)")}
        onMouseLeave={() => setFilter("")}
      >
        <div className="unit-title">filter: saturate(300%)</div>
      </div>
      <div
        className="unit u5"
        onMouseEnter={() => setFilter("hue-rotate(90deg)")}
        onMouseLeave={() => setFilter("")}
      >
        <div className="unit-title">filter: hue-rotate(90deg)</div>
      </div>
      <div
        className="unit u6"
        onMouseEnter={() => setFilter("blur(8px)")}
        onMouseLeave={() => setFilter("")}
      >
        <div className="unit-title">filter: blur(8px)</div>
      </div>
    </div>
  );
};
