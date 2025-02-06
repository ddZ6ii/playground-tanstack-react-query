# Tanstack React Query

This React-TypeScript starter project powered by Vite implements **modern API fetching** using:

- `axios`: promise-based HTTP client for fetching data from a mock API
- `json-server`: mocks a RESTful API using a JSON file as the data source
- `@tanstack/react-query`: asynchronous global **_"server state"_** management (_i.e._ data owned on the server side) with "_stale-while-revalidate_" caching strategy
- `zustand`: global **_"client state"_** management (_i.e._ data owned on the client side) based on an immutable state model and Flux pattern
- `react-error-boundary`: centralizes React error handling. Catch runtime errors raised from anywhere in the component tree, preventing the application to crash and improve the user experience by displaying a fallback UI instead

This project also uses the utility-first framework `tailwindcss` for styling the application.

## Getting started

1. Clone the project.
   ```bash
     git clone {GITHUB_REPO_URL}
   ```
2. Install the dependencies:
   ```bash
     yarn install
   ```
3. Start a local JSON server (fake API and DB):
   ```bash
     yarn run server
   ```
4. Run the application locally on a development server:
   ```bash
     yarn run dev
   ```
