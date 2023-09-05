import "./style.css";

export const ToggleSwitch = () => {
  return (
    <label className="switch">
      <input className="switch-input" type="checkbox" role="switch" />
      <svg
        className="switch-letters"
        viewBox="0 0 24 24"
        width="24px"
        height="24px"
        aria-hidden="true"
      >
        {/* Restante do codigo do svg no link da bio */}
      </svg>
      <span className="switch-text">Power</span>
    </label>
  );
};
