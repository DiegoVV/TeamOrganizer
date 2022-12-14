import { render, screen, cleanup } from "@testing-library/react";
import TeamsOverview from "../TeamsOverview";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

afterEach(() => {
	cleanup();
});

test("TEAM OVERVIEW: Render team buttons according to props", () => {
	render(
		<Router>
			<TeamsOverview
				teamsData={[
					{ id: 1, name: 1 },
					{ id: 2, name: 2 },
					{ id: 3, name: 3 },
					{ id: 4, name: 4 },
				]}
			/>
		</Router>
	);
	const teamButton = screen.getByTestId("teamButton0");
	const teamButton1 = screen.getByTestId("teamButton1");
	expect(teamButton).toBeInTheDocument();
	expect(teamButton).toHaveTextContent("1");
	expect(teamButton1).toBeInTheDocument();
	expect(teamButton1).toHaveTextContent("2");
});

test("TEAM OVERVIEW: Team search", () => {
	render(
		<Router>
			<TeamsOverview
				teamsData={[
					{ id: 1, name: 1 },
					{ id: 2, name: 2 },
					{ id: 3, name: 3 },
					{ id: 4, name: 4 },
				]}
			/>
		</Router>
	);
	const teamButton1 = screen.getByTestId("teamButton0");
	const teamButton2 = screen.getByTestId("teamButton1");
	expect(teamButton1).toBeInTheDocument();
	expect(teamButton1).toHaveTextContent("1");
	expect(teamButton2).toBeInTheDocument();
	expect(teamButton2).toHaveTextContent("2");
	const search = screen.getByPlaceholderText(/Search Team Name/i);
	expect(search).toBeInTheDocument();
	userEvent.type(screen.getByPlaceholderText(/Search Team Name/i), "1");
	expect(teamButton1).toBeInTheDocument();
	expect(teamButton1).toHaveTextContent("1");
	expect(teamButton2).not.toBeInTheDocument();
});

test("TEAM OVERVIEW: Routing to team page properly", () => {
	render(
		<Router>
			<TeamsOverview
				teamsData={[
					{ id: 1, name: 1 },
					{ id: 2, name: 2 },
					{ id: 3, name: 3 },
					{ id: 4, name: 4 },
				]}
			/>
		</Router>
	);
	const teamButton = screen.getByTestId("teamButton0");
	expect(teamButton).toBeInTheDocument();
	expect(teamButton).toHaveTextContent("1");
	userEvent.click(teamButton);
	expect(document.location.href).toContain("/team/1");
});
