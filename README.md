# TeamOrganizer

Tool for organizing users and teams extracted from REST API.
To run, simple run npm install and after all dependencies have been installed run npm start.

API was given for retrieving a list of users, a list of teams and more information about each based on their id.
Best way to display these teams would be a grid with their names, which you can filter and click on any.
Clicking on a team name would take you to the list of users that make part of it, highlighting the team lead.
Further clicking on a user name would take you to their profile page for further information.

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