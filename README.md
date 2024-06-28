# Registration and Authentication App

This is a basic registration and authentication application built using Next.js 14, TailwindCSS, and Express.js. The app uses JWT-based authentication 

## Features

- User registration
- User login
- JWT-based authentication

## Technologies Used

- Next.js 14
- TailwindCSS
- Express.js
- JWT
- MongoDb

## Setup Instructions

### Prerequisites

Ensure you have the following installed on your local machine:

- Node.js (v14 or later)
- npm or yarn

### Installation

*Clone the repository*

   git clone https://github.com/rahuldas200/assignment.git
   cd assignment

### Install client dependencies
cd client
npm install


# Install server dependencies
cd ../server
npm install

### Server (.env):

PORT=4000
JWT_SECRET=your_jwt_secret
DB_CONNECTION_STRING=your_database_connection_string


### Start client 

npm run dev

### start server

npm run dev
