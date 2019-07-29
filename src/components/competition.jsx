import React from "react";
import ResultTable from "./resultTable";
import ListGroup from "./common/listGroup";

const Competition = () => {
  return (
    <div className="row">
      <div className="col-2">
        <ListGroup />
      </div>
      <div className="col">
        <ResultTable />
      </div>
    </div>
  );
};

export default Competition;
