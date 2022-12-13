import { render, screen, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import TeamsOverview from "../TeamsOverview";
import "@testing-library/jest-dom";

afterEach(() => {
	cleanup();
});

test("Render Team Overview according to props", () => {
	render(
		<TeamsOverview
			teamsData={[
				{ id: 1, name: 1 },
				{ id: 2, name: 2 },
				{ id: 3, name: 3 },
				{ id: 4, name: 4 },
			]}
		/>
	);
	const teamButton = screen.getByTestId("teamButton0");
	const teamButton1 = screen.getByTestId("teamButton1");
	expect(teamButton).toBeInTheDocument();
	expect(teamButton).toHaveTextContent("1");
	expect(teamButton1).toBeInTheDocument();
	expect(teamButton1).toHaveTextContent("2");
});
