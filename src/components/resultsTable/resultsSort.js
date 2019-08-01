import _ from "lodash";

export default function sort(array, sortColumn) {
  if (sortColumn.path !== "place") {
    return _.orderBy(array, [sortColumn.path], [sortColumn.order]);
  }

  return orderByPlace(array);
}

//Ordering and formatting the "place" column.
function orderByPlace(array) {
  const results = [];
  array.forEach((element, index) => {
    element.place = parseInt(element.place);
    if (isNaN(element.place)) {
      element.place = "-";
    }
    results[index] = element;
  });
  return results;
}
