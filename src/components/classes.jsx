import React, { useState, useEffect } from "react";
import { getClasses } from "../services/resultService";
import ListGroup from "./common/listGroup";

const Classes = props => {
  const { competitionId, onClassChanged, currentClass } = props;
  const [classes, setClasses] = useState([{ name: "Classes" }]);

  useEffect(() => {
    async function fetchData() {
      const classes = await getClasses(competitionId);
      if (classes.length < 2) return;
      console.log(classes);

      setClasses(classes);
      onClassChanged(classes[1]);
    }
    fetchData();
  }, [competitionId]);

  return (
    <ListGroup
      items={classes}
      onItemSelected={onClassChanged}
      selectedItem={currentClass}
      valueProperty={"name"}
    />
  );
};

export default Classes;
