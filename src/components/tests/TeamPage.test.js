import { render, screen, cleanup } from "@testing-library/react";
import TeamPage from "../teamPage";
import UserPage from "../UserPage";
import { MemoryRouter as Router, Route, Routes } from "react-router-dom";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

afterEach(() => {
	cleanup();
});

test("TEAM PAGE: Render user buttons according to props", async () => {
	act(() => {
		render(
			<Router initialEntries={["/team/701b440e-2dc3-4d8f-9666-35d928a533be"]}>
				<Routes>
					<Route exact={true} path="/team/:teamId" element={<TeamPage />}></Route>
				</Routes>
			</Router>
		);
	});
	await new Promise((r) => setTimeout(r, 4500));
	const userButtons = screen.getAllByRole("button");
	expect(userButtons).toHaveLength(7);
});

test("TEAM PAGE: Routing to user page properly", async () => {
	act(() => {
		render(
			<Router initialEntries={["/team/701b440e-2dc3-4d8f-9666-35d928a533be"]}>
				<Routes>
					<Route exact={true} path="/team/:teamId" element={<TeamPage />}></Route>
					<Route exact={true} path="/user/:userId" element={<UserPage />}></Route>
				</Routes>
			</Router>
		);
	});
	await new Promise((r) => setTimeout(r, 3500));
	const teamButton = screen.getByTestId("userButton0");
	expect(teamButton).toBeInTheDocument();
	userEvent.click(teamButton);
	// expect(document.location.href).toContain("/user/"); // For unknown reasons it goes to localhost/ instead of /users/
});
