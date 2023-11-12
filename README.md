# React-shop-cloudfront

This is frontend starter project for nodejs-aws mentoring program. It uses the following technologies:

- [Vite](https://vitejs.dev/) as a project bundler
- [React](https://beta.reactjs.org/) as a frontend framework
- [React-router-dom](https://reactrouterdotcom.fly.dev/) as a routing library
- [MUI](https://mui.com/) as a UI framework
- [React-query](https://react-query-v3.tanstack.com/) as a data fetching library
- [Formik](https://formik.org/) as a form library
- [Yup](https://github.com/jquense/yup) as a validation schema
- [Vitest](https://vitest.dev/) as a test runner
- [MSW](https://mswjs.io/) as an API mocking library
- [Eslint](https://eslint.org/) as a code linting tool
- [Prettier](https://prettier.io/) as a code formatting tool
- [TypeScript](https://www.typescriptlang.org/) as a type checking tool

## Available Scripts

### `start`

Starts the project in dev mode with mocked API on local environment.

### `build`

Builds the project for production in `dist` folder.

### `preview`

Starts the project in production mode on local environment.

### `test`, `test:ui`, `test:coverage`

Runs tests in console, in browser or with coverage.

### `lint`, `prettier`

Runs linting and formatting for all files in `src` folder.

## Task 2 related documentation

### Manual deployment: 
[s3 bucket, link to html file](https://nodejs-aws-shop-react-of-katia.s3.eu-central-1.amazonaws.com/index.html)
[link to cloudfront distribution](https://d32lk59z1xiv4h.cloudfront.net/)

### Automated deployment
please use the commands in package.json:
```npm run build```  - to  build your app 
```npm run cdk:bootstrap``` - to bootstrap
```npm run cdk:deploy``` - to deploy the stack
```npm run cdk:destroy```- to remove the stack

[link to cloudfront distribution](https://d2gmu8nozl73rk.cloudfront.net)
[link to s3](https://online-shop-bucket-of-katia.s3.eu-central-1.amazonaws.com/)
