import React from "react";
import Checkbox from "@/components/Checkbox";
import "./ItemList.css";

/**
 * List item component with checkbox
 *
 * @param {Object} props - Component props
 * @param {string} props.label - Item label
 * @param {boolean} [props.checked=false] - Whether the item is checked
 * @param {function} props.onChange - Change handler function
 * @param {string} [props.checkboxVariant='default'] - Checkbox variant (default, blue)
 * @param {boolean} [props.isHeader=false] - Whether the item is a header
 */
const ListItem = ({
  label,
  checked = false,
  onChange,
  checkboxVariant = "default",
  isHeader = false,
}) => {
  return (
    <>
      <div className={`list-item ${isHeader ? "list-item--header" : ""}`}>
        <span className="list-item__label">{label}</span>
        <Checkbox
          checked={checked}
          onChange={onChange}
          variant={checkboxVariant}
        />
      </div>
      {isHeader && <div className="divider--header"></div>}
    </>
  );
};

/**
 * Item list component
 *
 * @param {Object} props - Component props
 * @param {Array} props.items - List of items to display
 * @param {function} props.onItemChange - Handler for item changes
 * @param {string} [props.className] - Additional CSS classes
 */
const ItemList = ({ items = [], onItemChange, className = "" }) => {
  const listClass = `item-list ${className}`;

  return (
    <>
      <div className={listClass}>
        {items.map((item, index) => (
          <ListItem
            key={item.id || index}
            label={item.label}
            checked={item.checked}
            onChange={(e) => onItemChange(item.id || index, e.target.checked)}
            checkboxVariant={item.checkboxVariant || "default"}
            isHeader={item.isHeader}
          />
        ))}
      </div>
      <div className="divider--last"></div>
    </>
  );
};

export default ItemList;
