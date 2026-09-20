export default function ToggleButton({ isToggled, onChange, disabled }) {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          className="peer hidden"
          checked={isToggled}
          onChange={onChange}
          disabled={disabled}
        />
        <div className={`toggle ${disabled ? "cursor-not-allowed" : ""}`}></div>
      </label>
    </div>
  );
}
