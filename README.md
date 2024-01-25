
# Formula 1 Drivers Frontend Application

📚 [**Overview**](#overview) • 📃 [**Prerequisites**](#prerequisites) • 🚀 [**Installation**](#installation) • ▶️ [**Running the Application**](#running-the-application) • 🌍 [**External API Integration**](#external-api-integration)

## Table of Contents
1. [Overview](#overview)
2. [Prerequisites](#prerequisites)
3. [Installation](#installation)
4. [Running the Application](#running-the-application)
5. [Available Scripts](#available-scripts)
6. [External API Integration](#external-api-integration)

## Overview

This frontend application is designed to interact seamlessly with the Node.js and Express backend, specifically focusing on the display and manipulation of Formula 1 drivers' information. It's built using React and leverages the power of modern TypeScript to provide a dynamic and interactive user experience.

## Prerequisites

- Node.js (v12.x or later)
- npm (v6.x or later)

### Installation

1. **Clone the repository**
   ```sh
   git clone https://github.com/AnnaPominchuk/formula-1.git
   ```
2. **Navigate to the project directory**
   ```sh
   cd formula-1
   ```
3. **Install dependencies**
   ```sh
   npm install
   ```
4. **Build the project**
   ```sh
   npm run build
   ```

#### Running the Application

1. Open [http://localhost:3000](http://localhost:3000) to view the application in the browser.

#### Available Scripts

In the project directory, you can run:

##### `npm start`

Runs the app in the development mode.Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.You will also see any lint errors in the console.

##### `npm run build`

Builds the app for production to the `build` folder.It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

##### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### External API Integration

This application integrates the [Flagpedia API](https://flagpedia.net/download/api) for fetching national flags of Formula 1 drivers' countries. The API provides a simple and efficient way to retrieve high-quality flag images, which are displayed alongside the drivers' information in the application.

This integration enhances the visual appeal of the application and provides an engaging user experience by visually representing the drivers' nationalities.