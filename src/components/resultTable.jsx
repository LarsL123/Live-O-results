import React, { useState, useEffect } from "react";
import Table from "./common/table";
import { getClassResult } from "../services/resultService";

const ResultTable = props => {
  const { competitionId, currentClass } = props;
  const [competitors, setCompetitors] = useState([
    { name: "Lars", time: "42 min" }
  ]);
  const [columns, setColumns] = useState();
  const [sortColumn, setSortColumn] = useState({ path: "name", order: "asc" });

  const onSort = newSortColumn => {
    setSortColumn({ ...newSortColumn });
  };

  useEffect(() => {
    async function fetch() {
      setCompetitors(await getClassResult(competitionId, currentClass));
    }
    fetch();
  }, [currentClass]);

  useEffect(() => {
    let cols = [
      {
        path: "name",
        label: "Name"
      },
      { path: "place", label: "Place" },
      { path: "result", label: "Time" },
      { path: "timeplus", label: "After" }
    ];

    setColumns(cols);
  }, []);

  if (!competitors || !competitors.className)
    return <h5>Ther are no people in this class</h5>;
  return (
    <Table
      columns={columns}
      data={competitors.results}
      sortColumn={sortColumn}
      onSort={onSort}
    />
  );
};

export default ResultTable;
