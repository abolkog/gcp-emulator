# GCP Emulator

My helper project to run GCP emulators locally

### Setup and Configurations

- Node Version

```
nvm use
```

- Install

```
npm i
```

- Start

```
npm start
```

The start command, will run the emulators as well as executing the src/index.js file.

The index file has a sample function that will check if firestore is up and running (checking port status) and when firestore is up, it will populate the database with sample data

## Why not using the emulators:export emulators:import ?

Simply, I did not know about the export import😅.
