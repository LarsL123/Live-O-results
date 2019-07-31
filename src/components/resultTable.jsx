import React, { useState, useEffect } from "react";
import Table from "./common/table";
import { getClassResult } from "../services/resultService";
import _ from "lodash";

const ResultTable = props => {
  const { competitionId, currentClass } = props;
  const [competitors, setCompetitors] = useState([]);
  const [columns, setColumns] = useState();
  const [sortColumn, setSortColumn] = useState({ path: "place", order: "asc" });

  const onSort = newSortColumn => {
    setSortColumn({ ...newSortColumn });
  };

  useEffect(() => {
    let cols = [
      { path: "place", label: "Place" },
      {
        path: "name",
        label: "Name"
      },
      { path: "result", label: "Time" },
      { path: "timeplus", label: "After" }
    ];

    setColumns(cols);
  }, []);

  useEffect(() => {
    async function fetch() {
      console.log("sending http");
      setCompetitors(await getClassResult(competitionId, currentClass.name));
    }
    fetch();
  }, [competitionId, currentClass]);

  if (!competitors || !competitors.className || competitors.results.length < 1)
    return <h5>There are no people in this class</h5>;

  function sort() {
    if (sortColumn.path !== "place") {
      return _.orderBy(
        competitors.results,
        [sortColumn.path],
        [sortColumn.order]
      );
    }
    const results = [];
    competitors.results.forEach((element, index) => {
      element.place = parseInt(element.place);
      if (isNaN(element.place)) {
        element.place = "-";
      }
      results[index] = element;
    });
    return results;
  }

  return (
    <Table
      columns={columns}
      data={sort()}
      sortColumn={sortColumn}
      onSort={onSort}
    />
  );
};

export default ResultTable;
