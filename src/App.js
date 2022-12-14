import React, { useState } from "react";
import axios from "axios";
import TeamsOverview from "./components/TeamsOverview.js";

export default function App() {
	// ----------------------------------------------------------------------------------------------------------
	// VARIABLES

	const [usersData, setUsersData] = useState([]);
	const [teamsData, setTeamsData] = useState([]);
	const [loading, setLoading] = useState(99);

	// ----------------------------------------------------------------------------------------------------------
	// GET API INFO
	React.useEffect(() => {
		setLoading(2);
		axios.get("https://cgjresszgg.execute-api.eu-west-1.amazonaws.com/users/").then((response) => {
			// console.log(response.data);
			setUsersData(response.data);
			setLoading((l) => l - 1);
		});
		axios.get("https://cgjresszgg.execute-api.eu-west-1.amazonaws.com/teams/").then((response) => {
			// console.log(response.data);
			setTeamsData([].concat(response.data).sort((a, b) => (a.name > b.name ? 1 : -1)));
			setLoading((l) => l - 1);
		});
	}, []);

	// ----------------------------------------------------------------------------------------------------------
	// RENDER
	return <div className="App">{loading > 0 ? <div className="loadingSpinner"></div> : <TeamsOverview teamsData={teamsData} />}</div>;
}
