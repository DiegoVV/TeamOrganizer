import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import RestAPI from "../services/RestAPI.js";

export default function TeamPage(props) {
	// ----------------------------------------------------------------------------------------------------------
	// VARIABLES
	const [teamData, setTeamData] = useState({ name: "", teamMemberIds: [] });
	const [usersData, setUsersData] = useState([]);
	const params = useParams();

	let navigate = useNavigate();

	const userPage = (userId) => {
		let path = "/user/" + userId;
		navigate(path);
	};

	// ----------------------------------------------------------------------------------------------------------
	// RUN ON LOAD
	React.useEffect(() => {
		fetchData();
	}, []);

	async function fetchData() {
		try {
			// console.log("Getting Team");
			let team = [];
			await RestAPI.getTeam(params.teamId).then((response) => {
				team = response.data;
				setTeamData(response.data);
				RestAPI.getUser(response.data.teamLeadId).then((response) => {
					setUsersData((l) => [...l, response.data]);
				});
			});
			// console.log("Getting Users");
			team.teamMemberIds.forEach((element) => {
				// console.log(element)
				RestAPI.getUser(element).then((response) => {
					setUsersData((l) => [...l, response.data]);
				});
			});
		} catch (err) {
			console.log("Error fetching data");
		}
	}

	// ----------------------------------------------------------------------------------------------------------
	// RENDER
	return (
		<div className="App">
			<span className="teamTitle">{teamData.name + " (" + (teamData.teamMemberIds.length + 1) + " Members)"}</span>
			<div className="teamGrid">
				{usersData
					.sort((a, b) => (a.firstName + a.lastName > b.firstName + b.lastName ? 1 : -1))
					.map((user, index) => (
						<div
							className="teamButton"
							data-testid={"userButton" + index}
							key={user.id}
							style={user.id === teamData.teamLeadId ? { border: "2px solid yellow" } : {}}
							onClick={() => userPage(user.id)}
						>
							{user.firstName + " " + user.lastName}
						</div>
					))}
			</div>
		</div>
	);
}
