import React from "react";
import "./Button.css";

/**
 * Button component with customizable properties
 *
 * @param {Object} props - Component props
 * @param {string} [props.variant='primary'] - Button variant (primary, secondary, etc.)
 * @param {string} [props.size='medium'] - Button size (small, medium, large)
 * @param {string} [props.width='default'] - Button width (default, auto, full)
 * @param {string} props.children - Button label/content
 * @param {function} [props.onClick] - Click handler function
 * @param {string} [props.className] - Additional CSS classes
 * @param {boolean} [props.disabled] - Whether the button is disabled
 * @param {Object} rest - Additional props to pass to the button element
 */
const Button = ({
  variant = "primary",
  size = "medium",
  width = "default",
  children,
  onClick,
  className = "",
  disabled = false,
  ...rest
}) => {
  const buttonClass = `button button--${variant} ${
    size !== "medium" ? `button--${size}` : ""
  } ${width !== "default" ? `button--${width}` : ""} ${className}`;

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
