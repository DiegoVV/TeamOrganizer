import { render, screen, cleanup } from '@testing-library/react';
import renderer from "react-test-renderer";
import TeamsOverview from '../TeamsOverview';
import "@testing-library/jest-dom";

afterEach(() => {
  cleanup();
})

test("renders team button", () => {
  render(<TeamsOverview teamsData={[{id: 1, name: 1},{id: 2, name: 2},{id: 3, name: 3},{id: 4, name: 4}]}/>);
  const teamButton = screen.getByTestId("teamButton0");
  expect(teamButton).toBeInTheDocument();
});
