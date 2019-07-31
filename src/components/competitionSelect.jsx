import React, { useEffect, useState } from "react";
import { getCompetitions } from "../services/resultService";
import Link from "react-router-dom/Link";
import Table from "./common/table";
const CompetitionSelect = () => {
  const [competitions, setCompetitions] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const c = await getCompetitions();
      setCompetitions(c);
    }
    fetchData();
  }, []);
  const columns = [
    { path: "date", label: "Date" },
    {
      path: "name",
      label: "Name",
      content: comeptition => (
        <Link to={`/comp/${comeptition.id}`}>{comeptition.name}</Link>
      )
    },

    { path: "organizer", label: "Organizer" }
  ];
  console.log(competitions);
  return (
    <Table
      columns={columns}
      data={competitions}
      sortColumn={{ path: "date", order: "asc" }}
      onSort={() => {}}
    />
  );
};

export default CompetitionSelect;
