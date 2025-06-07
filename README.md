# We Want Waste - Skip Hire Application

Welcome to **We Want Waste**, a modern web application built with React and Tailwind CSS to help users select the perfect skip size for their waste management needs. This project provides an interactive interface to browse and select skip sizes, complete with a dynamic loading spinner, progress steps, and a conditional footer for selected skips.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Development](#development)
- [Project Structure](#project-structure)

## Overview

"We Want Waste" is designed to streamline the process of choosing a skip size based on location, waste type, and project requirements. The application features a responsive grid of skip cards, a progress tracker, and a visually appealing theme with purple, pink, and indigo gradients. The footer appears only after a skip is selected, displaying detailed information.

## Features

- **Interactive Skip Selection**: Browse and select from a variety of skip sizes (4 to 40 yards).
- **Dynamic Loading**: A custom loading spinner with a gradient border effect.
- **Progress Steps**: A step-by-step guide (Location, Waste Type, Skip Size, Permits, Schedule, Payment).
- **Conditional Footer**: Displays selected skip details only after selection.
- **Responsive Design**: Optimized for desktop and mobile devices.
- **Themed Favicon**: A dustbin icon matching the app's color scheme.

## Tech Stack

- **Frontend**: React, TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
<!-- - **Testing**: Jest, React Testing Library
- **CI/CD**: GitHub Actions -->
- **Deployment**: Netlify (configurable)

## Installation

### Prerequisites

- Node.js (v18 or later)
- npm (or yarn)
- Git

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/we-want-waste.git
   cd we-want-waste
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser at http://localhost:5173 (or the port specified in the terminal).

## Usage

- **Browse Skips**: The homepage displays a grid of skip cards with sizes, prices, and features (e.g., road placement, heavy waste allowance).
- **Select a Skip**: Click a card to select a skip; the footer will appear with detailed information.

## Development

### Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the production-ready bundle.

## Project Structure

The project is organized into the following structure to maintain modularity and scalability:

```
we-want-waste/
├── public/              # Static assets
│   ├── dustbin.ico      # Favicon (dustbin icon)
│   └── index.html       # HTML entry point
├── src/                 # Source code
│   ├── components/      # React components
│   │   ├── HeroSection.tsx       # Hero section component
│   │   ├── LoadingSpinner.tsx    # Loading spinner component
│   │   ├── ProgressSteps.tsx     # Progress steps component
│   │   ├── SelectedSkipDisplay.tsx  # Selected skip details
│   │   └── SkipCard.tsx          # Individual skip card component
│   ├── types/           # TypeScript type definitions
│   │   └── skip.ts      # Interface definitions (e.g., Skip, Step)
│   ├── App.tsx          # Main application component
│   ├── main.jsx         # Entry point for React
│   └── vite-env.d.ts    # TypeScript environment definitions
├── .eslintrc.json       # ESLint configuration (if present)
├── .gitignore           # Git ignore file
├── package.json         # Project metadata and dependencies
├── tsconfig.json        # TypeScript configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── README.md            # This file
└── LICENSE              # License file (if added)
```

### Folder Descriptions

- **public/**: Contains static files like the favicon and the main HTML file.
- **src/components/**: Houses reusable React components, with a `__tests__` subfolder for unit tests.
- **src/types/**: Defines TypeScript interfaces for the application's data structures.
- **src/**: Includes the main application logic (App.tsx, main.jsx) and environment types.
<!-- - **.github/workflows/**: Configures the CI/CD pipeline using GitHub Actions. -->
- **Root Files**: Configuration files (e.g., .eslintrc.json, tailwind.config.js) and project metadata.

### Customizing

- Update `skipData` in `App.tsx` to add or modify skip options.
- Adjust Tailwind CSS classes in components for styling.
- Replace the favicon in `public/` with a custom dustbin icon.
