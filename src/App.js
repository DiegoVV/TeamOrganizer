import React, { useState } from "react";
import axios from "axios";

function App() {
  // ----------------------------------------------------------------------------------------------------------
  // VARIABLES
  
  const [usersData, setUsersData] = useState([]);
  const [teamsData, setTeamsData] = useState([]);

  
  // ----------------------------------------------------------------------------------------------------------
  // GET API INFO
  React.useEffect(() => {
    axios.get("https://cgjresszgg.execute-api.eu-west-1.amazonaws.com/users/").then(response => {
      setUsersData(response.data);
    })
    axios.get("https://cgjresszgg.execute-api.eu-west-1.amazonaws.com/teams/").then(response => {
      // console.log(response.data);
      setTeamsData([].concat(response.data).sort((a, b) => a.name > b.name ? 1 : -1));
    })
  }, [])


  // ----------------------------------------------------------------------------------------------------------
  // RENDER
  return (
    <div className="App">
      <div className="teamGrid">
        {teamsData.map((team)=> <div key={team.id}>{team.name}</div>)}
      </div>
    </div>
  );
}

export default App;
