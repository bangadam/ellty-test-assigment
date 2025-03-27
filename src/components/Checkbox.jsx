import React from "react";
import "./Checkbox.css";

/**
 * Checkbox component with customizable properties
 *
 * @param {Object} props - Component props
 * @param {boolean} [props.checked=false] - Whether the checkbox is checked
 * @param {function} props.onChange - Change handler function
 * @param {string} [props.variant='default'] - Checkbox variant (default, blue)
 * @param {string} [props.className] - Additional CSS classes
 * @param {boolean} [props.disabled] - Whether the checkbox is disabled
 * @param {string} [props.label] - Optional text label
 * @param {string} [props.id] - ID for the input (required for accessibility if using label)
 * @param {Object} rest - Additional props to pass to the input element
 */
const Checkbox = ({
  checked = false,
  onChange,
  variant = "default",
  className = "",
  disabled = false,
  label,
  id,
  ...rest
}) => {
  const checkboxClass = `checkbox checkbox--${variant} ${className}`;
  const checkboxContainerClass = label ? "checkbox-container" : "";

  const renderCheckbox = () => (
    <label className={checkboxClass}>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className="checkbox__input"
        aria-checked={checked}
        {...rest}
      />
      <span className="checkbox__checkmark"></span>
    </label>
  );

  if (label) {
    return (
      <div className={checkboxContainerClass}>
        {renderCheckbox()}
        <label htmlFor={id} className="checkbox-label">
          {label}
        </label>
      </div>
    );
  }

  return renderCheckbox();
};

export default Checkbox;
