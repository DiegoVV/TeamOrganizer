import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TeamsOverview(props) {
	// ----------------------------------------------------------------------------------------------------------
	// VARIABLES
	const [teamsData, setTeamsData] = useState([]);

	let navigate = useNavigate();

	const teamPage = (teamId) => {
		let path = "/team/" + teamId;
		navigate(path);
	};

	const handleSearch = (e) => {
		e.preventDefault();
		setTeamsData(
			props.teamsData.filter((team) => {
				return team.name.toLowerCase().includes(e.target.value.toLowerCase());
			})
		);
	};

	// ----------------------------------------------------------------------------------------------------------
	// RUN ON LOAD
	React.useEffect(() => {
		setTeamsData(props.teamsData);
	}, [props]);

	// ----------------------------------------------------------------------------------------------------------
	// RENDER
	return (
		<div>
			<div className="searchBar">
				<i className="fa fa-search"></i>
				<input onChange={handleSearch} type="text" id="searchInput" placeholder="Search Team Name" />
			</div>
			<div className="teamGrid">
				{teamsData.map((team, index) => (
					<div className="teamButton" data-testid={"teamButton" + index} key={team.id} onClick={() => teamPage(team.id)}>
						{team.name}
					</div>
				))}
			</div>
		</div>
	);
}
