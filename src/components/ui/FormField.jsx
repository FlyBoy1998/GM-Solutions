export default function FormField({
  type = "input",
  inputType = "text",
  id,
  label,
  options = [],
  optionsPlaceholder,
  errors,
  additionalStyling = "",
  icon = null,
  required = false,
  ...props
}) {
  let field;

  switch (type) {
    case "textarea":
      field = <textarea id={id} className="form-input" {...props}></textarea>;
      break;
    case "select":
      field = (
        <select
          id={id}
          className={`form-input ps-2 ${icon ? "ps-10" : ""}`}
          {...props}
        >
          {optionsPlaceholder && <option value="">{optionsPlaceholder}</option>}

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
        <input
          type={inputType}
          id={id}
          className={`form-input ${icon ? "ps-10" : ""}`}
          {...props}
        />
      );
  }

  return (
    <div className={`flex flex-col ${additionalStyling}`}>
      {label && (
        <label htmlFor={id} className="text-sm mb-1 font-bold">
          {label} {required ? <span className="text-red-500">*</span> : ""}
        </label>
      )}

      <div className="form-input-wrapper flex items-center">
        {icon && <div className="form-input-icon-wrapper">{icon}</div>}
        {field}
      </div>
      {errors}
    </div>
  );
}
