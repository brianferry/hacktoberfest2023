# Red Hat Product Trials

## Getting Started

```bash
npm install
npm run start
```

This will start the two development servers, the [development server](#development-server) and the [docs server](#docs-server).

## Docs Server

This is an eleventy server that renders the documentation on the fly at: http://localhost:8000/

## Development Server

This is a web-dev-server based at: http://localhost:8001/

## Elements

Location: `/elements`

Stateless display components that are used in our various Product Trial pages and applications.

## Patterns

Location: `docs/patterns`

A collection of example pages and element composition patterns.

## Apps

Location: `/apps`

A collection of applications that use the elements and patterns.

### Getting Started with Apps

```bash
cd apps/<app-name> // e.g. apps/rhpt-my-trials-app
npm install
npm run start
```

This will start the development server for the app at: http://localhost:8000/

# Tests

## Element tests

The default test script will run spec tests for the elements using web-test-runner.

```
npm run test
```

## Playwright automated e2e tests 

`test/e2e`  tests are automated tests that resolve your

```
npx playwright test ./tests/e2e/
```

## Playwright interactive tests 

`test/inspect`  tests start a chromium browser with a proxy of redhat.com

```
npx playwright test ./tests/inspect/ --headed
```
