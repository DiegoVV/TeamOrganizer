import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import RestAPI from "../services/RestAPI.js";
import defaultAvatar from "../img/defaultAvatar.png";

export default function UserPage(props) {
	// ----------------------------------------------------------------------------------------------------------
	// VARIABLES
	const [userData, setUserData] = useState({});
	const params = useParams();

	let navigate = useNavigate();

	const userPage = (userId) => {
		let path = "/user/" + userId;
		navigate(path);
	};

	// const handleSearch = (e) => {
	// 	e.preventDefault();
	// 	setTeamsData(
	// 		props.teamsData.filter((team) => {
	// 			return team.name.toLowerCase().includes(e.target.value.toLowerCase());
	// 		})
	// 	);
	// };

	// ----------------------------------------------------------------------------------------------------------
	// RUN ON LOAD
	React.useEffect(() => {
		fetchData();
	}, []);

	async function fetchData() {
		try {
			await RestAPI.getUser(params.userId).then((response) => {
				console.log(response.data);
				setUserData(response.data);
			});
		} catch (err) {
			console.log("Error fetching data");
		}
	}

	// ----------------------------------------------------------------------------------------------------------
	// RENDER
	return (
		<div className="App">
			<img
				src={userData.avatarUrl}
				className="userAvatar"
				// src={defaultAvatar}
				alt="userAvatar"
				onError={({ currentTarget }) => {
					currentTarget.src = defaultAvatar;
					currentTarget.onerror = null; // prevents looping
				}}
			/>
			<span className="teamTitle">{userData.firstName + " " + userData.lastName + " (" + userData.displayName + ")"}</span>
			<span>From {userData.location}</span>
		</div>
	);
}
