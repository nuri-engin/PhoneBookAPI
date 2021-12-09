# PhoneBookAPI
An API that will serve as the backend for a phone book app, providing a list of people and their contact details

## # How to install and run the project.
- First of all ensure to have the MongoDB exist and up to run on your computer.
- Clone the project, and get into the project folder on CLI.
- Run `npm|yarn install`, change the `env.example` file to `env` and provide information
- Run `npm|yarn dev` to run the project on your local
- Use exist (PostmanCollections)[/postman-collections] on here to generate quick requests to the App.

## # Reasoning behind your technical choices.
- Decided to use NodeJS, Express, MongoDB for the sake familirty.
- Decided to use 'hagopj13's (a Uber engineer) 'node-express-boilerplate' to kick-off the project quickly
  - It's one of most starred boilerproject with many features for NodeJS RESTful API.
  - Provides; Code-quality, security, validation, logging, error handling, API doc, Test cases by default.
  - I've decided to remove AUTH process! but providing a simple auth-check. Aim to let quick testing with Postman on endpoint instead of registration process.  

## # Describe any trade-offs you needed to make and your reasoning.
- I would use Postgres instead on MongoDB for better DB relations.

## # Point out anything you might do differently if you had more time.
- Better testing, Left-out `TODOs` on source-code
- CI/CD prooces with Heroku, Travis CI, etc.
- Monitoring/Insight/Telemetry features
    - Sample here @ https://github.com/nuri-engin/technotes/blob/main/server/README.md


## # Your contact details and any public profiles on developer networks.
