import { render, screen, cleanup } from "@testing-library/react";
import UserPage from "../UserPage";
import { MemoryRouter as Router, Route, Routes } from "react-router-dom";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";

afterEach(() => {
	cleanup();
});

test("TEAM PAGE: Render user buttons according to props", async () => {
	act(() => {
		render(
			<Router initialEntries={["/user/3df8954f-a910-4f3d-b8c2-bcb25db26b64"]}>
				<Routes>
					<Route exact={true} path="/user/:userId" element={<UserPage />}></Route>
				</Routes>
			</Router>
		);
	});
	const userName = screen.getByTestId("userName");
	const location = screen.getByTestId("location");
	const avatar = screen.getByTestId("avatar");
	expect(userName).toBeInTheDocument();
	expect(location).toBeInTheDocument();
	expect(avatar).toBeInTheDocument();
});
