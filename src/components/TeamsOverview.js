import React, { useState } from "react";

export default function TeamsOverview(props) {
	// ----------------------------------------------------------------------------------------------------------
	// VARIABLES
	const [teamsData, setTeamsData] = useState([]);

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
					<div className="teamButton" data-testid={"teamButton" + index} key={team.id}>
						{team.name}
					</div>
				))}
			</div>
		</div>
	);
}
