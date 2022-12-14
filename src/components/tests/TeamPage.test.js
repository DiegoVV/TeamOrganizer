import { render, screen, cleanup } from "@testing-library/react";
import TeamPage from "../teamPage";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";

afterEach(() => {
	cleanup();
});

test("Render Team Page according to props", () => {
	render(
		<Router>
			<TeamPage />
		</Router>
	);
	const teamButton = screen.getByTestId("teamButton0");
	const teamButton1 = screen.getByTestId("teamButton1");
	expect(teamButton).toBeInTheDocument();
	expect(teamButton).toHaveTextContent("1");
	expect(teamButton1).toBeInTheDocument();
	expect(teamButton1).toHaveTextContent("2");
	expect(true).toBe(true);
});
