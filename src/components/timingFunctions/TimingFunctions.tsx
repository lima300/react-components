import "./styles.scss";
export const TimingFunctions = () => {
  return (
    <div className="container">
      <div className="title">CSS Timing Function Units</div>
      <div className="unit u1">
        <div className="unit-title">linear</div>
        <div className="line l1"></div>
      </div>
      <div className="unit u2">
        <div className="unit-title">ease</div>
        <div className="line l2"></div>
      </div>
      <div className="unit u3">
        <div className="unit-title">ease-in</div>
        <div className="line l3"></div>
      </div>
      <div className="unit u4">
        <div className="unit-title">ease-out</div>
        <div className="line l4"></div>
      </div>
      <div className="unit u5">
        <div className="unit-title">ease-in-out</div>
        <div className="line l5"></div>
      </div>
      <div className="unit u6">
        <div className="unit-title">cubic-bezier(0.3,0.9,0.8,0)</div>
        <div className="line l6"></div>
      </div>
      <div className="unit u7">
        <div className="unit-title">steps(5)</div>
        <div className="line l7"></div>
      </div>
    </div>
  );
};
