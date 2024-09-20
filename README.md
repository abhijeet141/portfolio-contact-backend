# Portfolio Contact Backend

## Project Overview

This project provides a backend service for managing contact information within a portfolio website. The backend utilizes a database to store and retrieve contact data and implements middleware for input validation.

## Features

- **Contact Management:** Stores and retrieves contact information submitted through a portfolio website.
- **Database Integration:** Uses a database MongoDB to persist contact data.
- **Middleware Validation:** Enforces data validation rules for incoming contact information.

## Installation

1. **Install Node.js and npm:**
   - Download and install the latest version of Node.js from [https://nodejs.org/](https://nodejs.org/). 
   - npm (Node Package Manager) is included with Node.js.
2. **Navigate to Project Directory:**
   - Open a terminal or command prompt and navigate to the project's root directory.
3. **Install Dependencies:**
   - Run the following command to install the project's dependencies:
     ```bash
     npm install
     ```

## Usage

1. **Start the Server:**
   - Run the following command to start the backend server:
     ```bash
     npm start
     ```
2. **API Endpoints:**
   - The backend exposes the following API endpoints:
     - `POST /message`: Submits a new message.

## Environment Variables

- Create a `.env` file in the root directory and add the following variables:
  ```env
  PORT=3000
  MONGODB_URI='your_mongodb_connection_string'

## Contact Information

For any questions or issues, please contact the project maintainers at abhijeetsinha.smith@gmail.com. 
