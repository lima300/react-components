import "./styles.scss";
export const ChildSelectors = () => {
  return (
    <div className="selectors-container">
      <div className="title">CSS Child Selctors</div>
      <div className="unit u1">
        <div className="unit-title">:first-child</div>
        <div className="children">
          <div className="child"></div>
          <div className="child"></div>
          <div className="child"></div>
          <div className="child"></div>
          <div className="child"></div>
          <div className="child"></div>
        </div>
      </div>
      <div className="unit u2">
        <div className="unit-title">:last-child</div>
        <div className="children">
          <div className="child"></div>
          <div className="child"></div>
          <div className="child"></div>
          <div className="child"></div>
          <div className="child"></div>
          <div className="child"></div>
        </div>
      </div>
      <div className="unit u3">
        <div className="unit-title">:nth-child(2)</div>
        <div className="children">
          <div className="child"></div>
          <div className="child"></div>
          <div className="child"></div>
          <div className="child"></div>
          <div className="child"></div>
          <div className="child"></div>
        </div>
      </div>
      <div className="unit u4">
        <div className="unit-title">:nth-last-child(2)</div>
        <div className="children">
          <div className="child"></div>
          <div className="child"></div>
          <div className="child"></div>
          <div className="child"></div>
          <div className="child"></div>
          <div className="child"></div>
        </div>
      </div>
      <div className="unit u5">
        <div className="unit-title">:nth-child(odd)</div>
        <div className="children">
          <div className="child"></div>
          <div className="child"></div>
          <div className="child"></div>
          <div className="child"></div>
          <div className="child"></div>
          <div className="child"></div>
        </div>
      </div>
      <div className="unit u6">
        <div className="unit-title">:nth-child(even)</div>
        <div className="children">
          <div className="child"></div>
          <div className="child"></div>
          <div className="child"></div>
          <div className="child"></div>
          <div className="child"></div>
          <div className="child"></div>
        </div>
      </div>
      <div className="unit u7">
        <div className="unit-title">:nth-child(3n)</div>
        <div className="children">
          <div className="child"></div>
          <div className="child"></div>
          <div className="child"></div>
          <div className="child"></div>
          <div className="child"></div>
          <div className="child"></div>
        </div>
      </div>
      <div className="unit u8">
        <div className="unit-title">:nth-child(n+3)</div>
        <div className="children">
          <div className="child"></div>
          <div className="child"></div>
          <div className="child"></div>
          <div className="child"></div>
          <div className="child"></div>
          <div className="child"></div>
        </div>
      </div>
    </div>
  );
};
