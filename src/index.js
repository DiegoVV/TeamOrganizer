import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import "font-awesome/css/font-awesome.min.css";
import reportWebVitals from "./reportWebVitals.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import App from "./App.js";
import TeamPage from "./components/TeamPage.js";
import UserPage from "./components/UserPage.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	// <React.StrictMode>
	<Router>
		<Routes>
			<Route exact={true} path="/" element={<App />}></Route>
			<Route exact={true} path="/team/:teamId" element={<TeamPage />}></Route>
			<Route exact={true} path="/user/:userId" element={<UserPage />}></Route>
		</Routes>
	</Router>
	// </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
