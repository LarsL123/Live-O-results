import React, { useState } from "react";
import ResultTable from "./resultTable";
import Classes from "./classes";

const Competition = props => {
  const [currentClass, setCurrentClass] = useState(null);
  const onClassChanged = c => {
    setCurrentClass(c.name);
  };
  console.log("rerendering competitions");
  const { compId } = props.match.params;
  console.log(compId);

  return (
    <div className="row">
      <div className="col-2">
        <Classes
          competitionId={compId}
          currentClass={currentClass}
          onClassChanged={onClassChanged}
        />
      </div>
      <div className="col">
        <ResultTable competitionId={compId} currentClass={currentClass} />
      </div>
    </div>
  );
};

export default Competition;
