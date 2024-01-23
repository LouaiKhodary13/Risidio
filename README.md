# Risidio

## Live Demo

Check out the live demo of the Risidio App: [Live Demo](https://risidio-test.netlify.app/)

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)

## Description

This project is an NFT (Non-Fungible Token) marketplace app that allows users to explore and purchase unique digital art collections. The app includes features such as wallet integration, collection details, and a responsive design for an optimal user experience.

## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/LouaiKhodary13/Risidio.git
   ```

   cd Risidio
   npm install
   npm start

## Usage

Explore various NFT collections.
Connect your wallet to make purchases.
View detailed information about each collection.
Navigate between different pages using the provided links.

## Technologies Used

React
React Router
CSS (styles)
Context API (for state management)
Other dependencies as listed in the package.json file.
Project Structure
src/components: Contains reusable React components.
src/context: Contains context providers for state management.
src/assets: Includes images used in the app.
src/pages: Contains the main pages of the app (Home, Collections).
src/App.js: Entry point for the React application.
public: Public assets and the index.html file.

## Components

Navbar
The Navbar component represents the navigation bar of the application. It includes functionality for connecting the wallet and rendering the user account.

TimeSlider
The TimeSlider component displays a timeline of items with different styles.

CollectionsComponent
The CollectionsComponent component showcases NFT collections. It uses data from items and allows users to buy items.

CartItem
The CartItem component represents the user's shopping cart, displaying selected NFTs and wallet information. It can be toggled open and closed.
