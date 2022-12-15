import { render, screen, cleanup } from "@testing-library/react";
import TeamsOverview from "../TeamsOverview";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";

afterEach(() => {
	cleanup();
});

test("Render team buttons according to props", () => {
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
	const teamButton = screen.getByRole("div", { testid: "teamButton0" });
	const teamButton1 = screen.getByTestId("teamButton1");
	expect(teamButton).toBeInTheDocument();
	expect(teamButton).toHaveTextContent("1");
	expect(teamButton1).toBeInTheDocument();
	expect(teamButton1).toHaveTextContent("2");
});

test("Buttons link to team page properly", () => {
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
