export default function FormField({
  type = "input",
  inputType = "text",
  id,
  label,
  options = [],
  errors,
  additionalStyling = "",
  icon,
  ...props
}) {
  let field;

  switch (type) {
    case "textarea":
      field = <textarea id={id} className="form-input" {...props}></textarea>;
      break;
    case "select":
      field = (
        <select id={id} className="form-input" {...props}>
          <option value="">Select a project type</option>

          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      );
      break;
    default:
      field = (
        <input type={inputType} id={id} className="form-input" {...props} />
      );
  }

  return (
    <div className={`flex flex-col ${additionalStyling}`}>
      <label htmlFor={id} className="text-sm mb-1 font-bold">
        {label}
      </label>
      <div className="form-input-wrapper flex items-center">
        <div className="form-input-icon-wrapper">{icon}</div>
        {field}
      </div>
      {errors}
    </div>
  );
}
