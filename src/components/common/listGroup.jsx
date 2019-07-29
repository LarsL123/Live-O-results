import React from "react";

//TODO: Add bages to the classes to show how many pople are in each class. Read about bages: https://getbootstrap.com/docs/4.3/components/list-group/

const ListGroup = props => {
  // const {
  //   items,
  //   onItemSelected,
  //   selectedItem,
  //   textProperty,
  //   valueProperty
  // } = props;

  const items = [
    { _id: "1", name: "Select class" },
    { _id: "2", name: "H16" },
    { _id: "3", name: "D16" }
  ];
  const onItemSelected = null;
  const selectedItem = items[0];
  const textProperty = "name";
  const valueProperty = "_id";

  return (
    <ul className="list-group">
      {items.map(item => (
        <li
          key={item[valueProperty]}
          className={
            item === selectedItem ? "list-group-item active" : "list-group-item"
          }
          onClick={() => onItemSelected(item)}
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

// ListGroup.defaultProps = {
//   textProperty: "name",
//   valueProperty: "_id"
// };

export default ListGroup;
