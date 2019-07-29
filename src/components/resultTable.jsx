import React, { useState, useEffect } from "react";
import Table from "./common/table";

const ResultTable = props => {
  const [columns, setColumns] = useState(null);
  //Create columns:
  useEffect(() => {
    let cols = [
      {
        path: "name",
        label: "Name"
      },
      { path: "time", label: "Time" }
    ];

    setColumns(cols);
  }, []);
  //Pull out the data , sort column and onSort
  //const { competitors, sortColumn, onSort } = props;
  const competitors = [{ name: "Lars", time: "42 min" }];
  const sortColumn = { path: "name", order: "asc" };
  const onSort = null;

  return (
    <Table
      columns={columns}
      data={competitors}
      sortColumn={sortColumn}
      onSort={onSort}
    />
  );
};

export default ResultTable;
