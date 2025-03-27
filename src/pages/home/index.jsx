import React, { useState, useEffect } from "react";
import Button from "@/components/Button";
import ItemList from "@/components/ItemList";
import "./index.css";

const Home = () => {
  // State for list items - limited to 5 items to avoid scroll
  const [items, setItems] = useState([
    {
      id: 1,
      label: "All pages",
      checked: false,
      checkboxVariant: "default",
      isHeader: true,
    },
    {
      id: 2,
      label: "Page 1",
      checked: false,
      checkboxVariant: "default",
    },
    {
      id: 3,
      label: "Page 2",
      checked: false,
      checkboxVariant: "default",
    },
    {
      id: 4,
      label: "Page 3",
      checked: false,
      checkboxVariant: "default",
    },
    {
      id: 5,
      label: "Page 4",
      checked: false,
      checkboxVariant: "default",
    },
  ]);

  // Effect to check if all items are checked or not
  useEffect(() => {
    // Skip the first item (All pages)
    const contentItems = items.slice(1);
    const allChecked = contentItems.every((item) => item.checked);
    const noneChecked = contentItems.every((item) => !item.checked);

    // Update "All pages" checkbox only if it's needed
    if (
      (allChecked && !items[0].checked) ||
      (!allChecked && items[0].checked && noneChecked)
    ) {
      setItems((prevItems) => [
        {
          ...prevItems[0],
          checked: allChecked,
          checkboxVariant: allChecked ? "blue" : "default",
        },
        ...prevItems.slice(1),
      ]);
    }
  }, [items]);

  // Handle item change in list
  const handleItemChange = (id, checked) => {
    // If "All pages" is clicked (id === 1)
    if (id === 1) {
      // Update all items
      setItems((prevItems) =>
        prevItems.map((item) => ({
          ...item,
          checked,
          checkboxVariant: checked ? "blue" : "default",
        }))
      );
    } else {
      // Update only the clicked item
      setItems((prevItems) =>
        prevItems.map((item) =>
          item.id === id
            ? {
                ...item,
                checked,
                checkboxVariant: checked ? "blue" : "default",
              }
            : item
        )
      );
    }
  };

  return (
    <div className="showcase">
      <div className="card-container">
        <div className="list-container">
          <ItemList items={items} onItemChange={handleItemChange} />
        </div>
        <div className="button-container">
          <Button>Done</Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
