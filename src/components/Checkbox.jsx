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
 * @param {Object} rest - Additional props to pass to the input element
 */
const Checkbox = ({
  checked = false,
  onChange,
  variant = "default",
  className = "",
  disabled = false,
  ...rest
}) => {
  const checkboxClass = `checkbox checkbox--${variant} ${className}`;

  return (
    <label className={checkboxClass}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className="checkbox__input"
        {...rest}
      />
      <span className="checkbox__checkmark"></span>
    </label>
  );
};

export default Checkbox;
