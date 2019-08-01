import React, { useState, useEffect } from "react";
import { TableRespnsive } from "../common/table";
import { getClassResult } from "../../services/resultService";
import sort from "./resultsSort";

const columns = [
  { path: "place", label: "Place" },
  {
    path: "name",
    label: "Name"
  },
  { path: "result", label: "Time" },
  { path: "timeplus", label: "After" }
];

const ResultTable = props => {
  const { competitionId, currentClass } = props;
  const [competitors, setCompetitors] = useState([]);
  const [sortColumn, setSortColumn] = useState({ path: "place", order: "asc" });

  const onSort = newSortColumn => {
    setSortColumn({ ...newSortColumn });
  };

  useEffect(() => {
    async function fetch() {
      setCompetitors(await getClassResult(competitionId, currentClass.name));
    }
    fetch();
  }, [competitionId, currentClass]);

  if (!competitors || !competitors.className || competitors.results.length < 1)
    return <h5>There are no people in this class</h5>;

  return (
    <TableRespnsive
      columns={columns}
      data={sort(competitors.results, sortColumn)}
      sortColumn={sortColumn}
      onSort={onSort}
    />
  );
};

export default ResultTable;
