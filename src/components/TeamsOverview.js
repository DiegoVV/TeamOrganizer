import React, { useState } from "react";

function TeamsOverview(props) {
  // ----------------------------------------------------------------------------------------------------------
  // VARIABLES

  
  // ----------------------------------------------------------------------------------------------------------
  // RUN ON LOAD
  React.useEffect(() => {
  }, [])


  // ----------------------------------------------------------------------------------------------------------
  // RENDER
  return (
        <div className="teamGrid">
        {props.teamsData.map((team, index)=> <div data-testid={"teamButton"+index} key={team.id}>{team.name}</div>)}
        </div>
  );
}

export default TeamsOverview;
