# Energizer Web Boilerplate

Web boilerplate bootstrapped with CRA and Tailwind (ongoing development)

### Prerequisites

- Node 15.3.0
- Yarn 1.22.5

### Development Setup

1. `git clone https://github.com/dwrellin/energizer.git`
2. `cd energizer`
3. `yarn`

### Run locally

- `yarn dev`

### Run eslint

- `yarn eslint`
- `yarn eslint --fix` (with autofix)

### Run stylelint

- `yarn stylelint`
- `yarn stylelint --fix` (with autofix)

### Things to do before deploying to Github Pages

1. Open the `package.json` file
2. Change the url in the `homepage` field with the following: 
```json
{
  homepage: https://<your-username>.github.io/<your-app-name>
}
```
3. Run `yarn` in the terminal
4. Once done, you're ready to deploy your static site

### Deploy to Github Pages

1. Commit your changes
2. Run `yarn deploy`
3. Push to `master` or `main` branch
