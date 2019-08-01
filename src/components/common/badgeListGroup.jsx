// import React from "react";

//TODO: Add bages to the classes to show how many pople are in each class. Read about bages: https://getbootstrap.com/docs/4.3/components/list-group/
//It is a cool idea but would have to send a request to each class. Dont know if that is viable.

// const ListGroup = props => {
//   const {
//     items,
//     onItemSelected,
//     selectedItem,
//     textProperty,
//     valueProperty
//   } = props;

//   return (
//     <ul className="list-group ">
//       {items.map(item => (
//         <li
//           key={item[valueProperty]}
//           className={
//             item === selectedItem
//               ? "list-group-item active d-flex justify-content-between align-items-center"
//               : "list-group-item d-flex justify-content-between align-items-center"
//           }
//           onClick={() => onItemSelected(item)}
//         >
//           {item[textProperty]}

//           {item[badge] && <span class="badge badge-light badge-pill">14</span>}
//         </li>
//       ))}
//     </ul>
//   );
// };

// ListGroup.defaultProps = {
//   textProperty: "name",
//   valueProperty: "_id",
//   badgeProperty: "badge"
// };

// export default ListGroup;
