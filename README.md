
# People Explorer — Random User

A responsive React application that generates random user profiles using the Random User API.

Discover people from around the world with a single click, without refreshing the page.

## Features

- Fetch random user profiles from an external API
- Display a user profile when the application loads
- Generate a new profile with the "Discover Another Person" button
- Display profile pictures, names, ages, and contact information
- Show the user's city and country
- Display a loading indicator during API requests
- Disable the button while fetching data
- Responsive design for desktop and mobile devices

## Technologies Used

- React
- JavaScript (ES6)
- JSX
- CSS3
- Vite
- Fetch API

## How It Works

The application uses a React class component to manage its state.

When the component mounts, `componentDidMount()` calls the `getUser()` method.

The `getUser()` method uses `fetch()` and `async/await` to request a random user profile from the Random User API.

The API returns a JSON object containing a `results` array. The application accesses the first user using `data.results[0]`.

The user's information is stored in the component's state using `setState()`.

Clicking the "Discover Another Person" button fetches a new profile without reloading the page.

## API

This project uses the Random User API:

https://randomuser.me/api/

The application displays the following information:

- Profile picture
- First and last name
- Age
- Email address
- City
- Country
- Phone number

## Project Structure

    random-user/
    ├── public/
    ├── src/
    │   ├── App.jsx
    │   ├── App.css
    │   ├── index.css
    │   └── main.jsx
    ├── package.json
    └── README.md

## Getting Started

Clone the repository:

    git clone https://github.com/LeahLogic/random-user.git

Navigate to the project directory:

    cd random-user

Install dependencies:

    npm install

Start the development server:

    npm run dev

Open the local URL provided by Vite.

## Author

[LeahLogic](https://github.com/LeahLogic)
