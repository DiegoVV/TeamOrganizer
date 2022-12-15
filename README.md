# TeamOrganizer

Tool for organizing users and teams extracted from REST API.
To run, simple run npm install and after all dependencies have been installed run npm start.

API was given for retrieving a list of users, a list of teams and more information about each based on their id.
Best way to display these teams would be a grid with their names, which you can filter and click on any.
Clicking on a team name would take you to the list of users that make part of it, highlighting the team lead with a yellow border.
Further clicking on a user name would take you to their profile page for further information, displaying their name, username, avatar and location.

Creating tests really help find some problems, like a team name that is stored as a number needs to be converted to String for the filter to work.

## How To Run

Install Node: https://nodejs.org/en/download/ LTS version is fine.
Open console window on the project folder and run the following command: "npm install".
After its done run the following: "npm run".
You could also use this command to run tests: "npm test".

This should open a window on your browser with the project running.
Have fun

## Available Scripts

In the project directory, you can run:

### `npm install`

Installs dependencies based on file "package.json", required for further development and testing with npm start

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
