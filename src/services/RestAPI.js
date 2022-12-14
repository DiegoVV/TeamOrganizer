import axios from "axios";

let REST_API_URL = "https://cgjresszgg.execute-api.eu-west-1.amazonaws.com/";

class RestAPI {
	getUsers() {
		return axios.get(REST_API_URL + "users");
	}
	getUser(id) {
		return axios.get(REST_API_URL + "users/" + id);
	}
	getTeams() {
		return axios.get(REST_API_URL + "teams");
	}
	getTeam(id) {
		return axios.get(REST_API_URL + "teams/" + id);
	}
}

export default new RestAPI();
