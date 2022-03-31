# Event Space Website
Events Space website built using the MERN stack.

# Software Requirements 

This is the software requirements document for the 'Event Space' website built using the MERN stack.

## System Architecture

- This application will be built using the MERN stack.
- Express will be used to create the backend
- React will be used to create the frontend
- MongoDB will be used for database integration

### App Styling
The app will by styled using a combination of Material-UI and custom CSS. This allows for standardised components to be built quickly, but we will still have the freedom of adding custom styles.

### App Deployment
The backend of the app will be deployed using Heroku, and the frontend will be deployed using Netlify. This allows us to be able to work in one module without touching the other, and avoids the whole site being rebuilt if one small change is deployed.

## Functional Requirements
The app being developed is an website for an events space. The website will act as a marketing page for the event space, allowing users to see upcoming events that they might be interested in.
The features include:
- The app must allow for normal end-user access and admin access
- Users are able to view upcoming events on the landing page of the website
- Admin users are able to sign in using the admin sign in credentials
- Admin users should then be able to see a table containing all the events and the relevant information
- Admin users can edit events
- Admin users can delete events
- Admin users can create new events

## Non-functional Requirements
The app also has various non-functional requirements in order to provide the best possible user experience:
- The user interface must be minimal and easy to use
- The system must reliably connect to the database so that the events can always be viewed
- The app must be built using the MERN stack, and be made up of multiple components for easy scaling
- The app needs to be able to complete CRUD operations successfully every time
- The data needs to be stored securely

# Usage

## Installation
- Download the project file to your local computer.
- Using your command line interface, navigate to the project folder.
- Navigate to the 'server' folder and enter 'npm install' to install the node modules.
- Then, navigate to the 'client' folder and enter 'npm install' again.
- In the server folder, enter 'nodemon' to start the server and connect to the database.
- In the client folder, enter 'npm start' to launch the project in your browser.

## Usage
When landing on the website, you will view it as a standard user. You can only view the events being put on.
In order to do any CRUD operations you will need to sign in as an admin user.
The admin user credentials are:
- email: admin@gmail.com
- password: Admin123

You can then add, delete, and edit events.

## Security
This app makes use of Helmet for security. See [here](https://helmetjs.github.io/) for more info.
Our API is protected by authorization, which means any user can't make changes to our database.
The MongoDB password is stored in a .env file that is ignored by github.

## Link to App
See the live app [here](https://annie-event-app.netlify.app/)