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
[Link to S3 bucket](https://nodejs-aws-shop-react-of-katia.s3.eu-central-1.amazonaws.com)

[Link to cloudfront distribution](https://d32lk59z1xiv4h.cloudfront.net/)

### Automated deployment

[Link to S3 bucket](https://online-shop-bucket-of-katia.s3.eu-central-1.amazonaws.com/)

[Link to cloudfront distribution](https://d2gmu8nozl73rk.cloudfront.net)

please use these commands from package.json to deploy from command line:

```npm run build```  - to  build your app (due to module issues you should first set ```"module":"esnext"``` in your tsconfig.json )

```npm run cdk:bootstrap``` - to bootstrap

```npm run cdk:deploy``` - to deploy the stack

```npm run cdk:destroy```- to remove the stack

