import React from "react";
import "./Button.css";

/**
 * Button component with customizable properties
 *
 * @param {Object} props - Component props
 * @param {string} [props.variant='primary'] - Button variant (primary, secondary, etc.)
 * @param {string} props.children - Button label/content
 * @param {function} [props.onClick] - Click handler function
 * @param {string} [props.className] - Additional CSS classes
 * @param {boolean} [props.disabled] - Whether the button is disabled
 * @param {Object} rest - Additional props to pass to the button element
 */
const Button = ({
  variant = "primary",
  children,
  onClick,
  className = "",
  disabled = false,
  ...rest
}) => {
  const buttonClass = `button button--${variant} ${className}`;

  return (
    <button
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
