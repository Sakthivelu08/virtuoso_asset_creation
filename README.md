# Virtuoso Package Implementation
This repository contains a basic setup of a virtualized grid and table built using the `react-virtuoso` package in React.

## Description
This project shows how to use the `react-virtuoso` package to build virtualized tables and grids in a React app.

`react-virtuoso` helps display large amounts of data by only rendering the items that are visible on the screen. It also updates item sizes automatically if they change. This makes the app faster and smoother when working with a lot of data.

Some useful features of this package:
- startReached and endReached events to load more data when scrolling
- Fixed headers for both tables and grids
- Fast performance even with thousands of items
- Easy to customize the layout and design

This setup is helpful when you need to show big datasets without slowing down the page.

## Getting Started
  To get started with this project locally, follow these steps:
  
  ### Prerequisites
  Make sure you have the following installed:
  - Node.js (>=14.x)
  - npm or yarn

  ### Installation
  1. Clone the repo
     
     ```
     https://github.com/Sakthivelu08/virtuoso_asset_creation.git
     ```
  2. Install npm packages
      
     ```
     npm install
     ```
     
  3. Run the project
      
     ```
     npm start
     ```
     or
     
     ```
     npm run start
     ```
  The app will be available at `http://localhost:8080`.

## What is Implemented

In this project, VirtuosoTable and VirtuosoGrid are implemented as reusable components. You can import these components into your project and use them by passing the required prop values.

You can find both components in the `src/components` directory.
