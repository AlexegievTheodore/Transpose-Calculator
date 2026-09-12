# Transpose Calculator

A small React + Vite app for calculating the pitch transposition between guitar tunings. It helps you quickly see how many semitones you need to move from one tuning to another, making it useful for song arrangements, songwriting, and guitar setup planning.

Live demo: https://transpose-calculator.alexegievteo.workers.dev

## Features

- Compare a source tuning and target tuning
- Supports standard and drop tunings
- Calculates the semitone difference between the two tunings
- Simple, lightweight interface built with React
- Deployed as a static front-end app

## How it works

The app uses MIDI-style pitch values for each tuning and computes:

- source lowest string pitch
- target lowest string pitch
- difference in semitones

The result is displayed as a number of semitone(s), for example:

- E Standard to D Standard = 2 semitones
- Drop D to E Standard = 2 semitones

## Tech stack

- React 19
- TypeScript
- Vite
- ESLint

## Local development

### Prerequisites

- Node.js 18+
- npm

### Install dependencies

```bash
npm install
```

### Start the app locally

```bash
npm run dev
```

Then open the local Vite URL shown in the terminal.

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Available scripts

```bash
npm run dev      # start the Vite development server
npm run build    # type-check and build the production bundle
npm run lint     # run ESLint checks
npm run preview  # preview the built app locally
```

## Project structure

```text
.
├── public/
├── src/
│   ├── components/
│   ├── assets/
│   ├── types/
│   ├── utils/
│   ├── main.tsx
│   ├── TranspositionCalculator.tsx
│   └── TranspositionCalculator.css
├── package.json
├── tsconfig.json
├── vite.config.ts
├── eslint.config.js
├── index.html
└── README.md
```

## Notes

This project is focused on a simple tuning transposition calculator and is deliberately lightweight. The tuning list is defined in the app’s TypeScript data model, making it easy to extend with additional tunings if needed.
