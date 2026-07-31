export default function ToggleButton({ isToggled, onChange }) {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          className="peer hidden"
          checked={isToggled}
          onChange={onChange}
        />
        <div className="toggle"></div>
      </label>
    </div>
  );
}
