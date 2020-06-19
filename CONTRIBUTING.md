# Contributing

Thanks for contributing, you rock!

When it comes to open source, there are many different kinds of contributions that can be made, all of which are valuable. Below are a few guidelines that should help you as you prepare your contribution.

- [Think You Found a Bug?](#Think-You-Found-a-Bug)
- [Proposing New or Changed API?](#Proposing-New-or-Changed-API?)
- [Issue Not Getting Attention?](#Issue-Not-Getting-Attention?)
- [Making a Pull Request?](#Making-a-Pull-Request?)
- [Setup](#Setup)
- [Development](#Development)

## Think You Found a Bug?

Please conform to the issue template and provide a clear path to reproduction with a code example. Best is a pull request with a failing test.

## Proposing New or Changed API?

Please provide thoughtful comments and some sample code. Proposals without substance will be closed.

It's generally a good idea to open an issue for the proposal first before working on the implementation and submitting a pull request. Please also take a look at [our current roadmap](#) and consider ongoing work that might conflict with your proposed changes.

## Issue Not Getting Attention?

If you need a bug fixed and nobody is fixing it, it is greatly appreciated if you provide a fix for it. Issues with no activity for 60 days will be automatically closed, with a warning 7 days before closing.

## Making a Pull Request?

Pull requests need only the :+1: of two or more collaborators to be merged; when the PR author is a collaborator, that counts as one.

### Tests

All commits that fix bugs or add features need a test.

### Docs + Examples

All commits that change or add to the API must be done in a pull request that also updates all relevant examples and docs.

## Setup

The following steps will get you setup to contribute changes to this repo:

1. Fork the repo (click the <kbd>Fork</kbd> button at the top right of [this page](#))
2. Clone your fork locally

```bash
# in a terminal, cd to parent directory where you want your clone to be, then
git clone https://github.com/<your_github_username>/huoa-react.git
cd huoa-react
```

3. Install dependencies and build. React Router uses `npm`, so you should too. If you install using `npm`, unnecessary `package-lock.json` files will be generated.

```bash
npm install
npm run build
```

## Development

### Packages

Huoa.org uses a monorepo to host code for the live ecommerce application.

### Building

Calling `npm run build` from the root directory will build all packages. If you want to build a specific package, you should `cd` into that directory.

```bash
# build all packages
npm run build
```

### Testing

Calling `npm test` from the root directory will run **every** package's tests. If you want to run tests for a specific package, you should `cd` into that directory.

```bash
# run all tests
npm run test
```

React Router uses Jest to run its tests, so you can provide the `--watch` flag to automatically re-run tests when files change.

### Website

The code for the documentation website lives in the `website` directory. To start a development server on `http://localhost:3000` that will watch for changes, do:

```bash
cd website
npm install
npm start
```
