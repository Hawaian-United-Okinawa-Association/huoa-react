# [HUOA](https://huoa.org/nuuzi/)

[![<Hawaian-United-Okinawa-Association>](https://circleci.com/gh/Hawaian-United-Okinawa-Association/huoa-react.svg?style=svg)](https://app.circleci.com/pipelines/github/Hawaian-United-Okinawa-Association/huoa-react)

Website redesign for Hawaian United Okinawa Association

Visit the WordPress back-end [here](https://github.com/masalcedo88/huoa-wp).

## Index:
- [Scope](#Scope)
- [User Stories](#user-stories)
- [Wireframes](#wireframes)
- [Data Models](#data-models)
- [Milestones](#milestones)

## Scope

The objective is to redesign the current website for HUOA to give the association a fresh, modern look that will also run on some of today's latest technologies.

##### For testing coverage reporting
- use `npm test -- --coverage --watchAll=false`

#### Installation when not using Docker
- use `npm install` to install dependencies
- use `npm ci` to use `package-lock.json`'s versioning

#### Using Docker
- Have Docker installed: https://docs.docker.com/get-docker/
- Once Docker is installed you will need to build the image:
  - Run: `docker build --tags huoa-app .`
- Now you can use `npm run dev` to run the instance

#### Production (WIP)
- `npm run build` compiles and optimizes react
- `npm run server` to run in `Production`

## Styling

This project contains `StyleLint` which checks for property order and BEM format styling. See below for allowable formats:

Allowed class naming:
```
// Block.js
.block {
  // Styling...
  &__element {
    // Styling...
    &--modifier {
      // Styling...
    }
  }
}
```
```
.block .card {
  // Styling...
}
```

Unallowed class naming (these will throw errors):
```
// Must follow Component name
.block-demo {
  // Styling...
}
```
```
// Must be camel-case
.Block {
  // Styling...
}
```
```
// Must follow block -> element -> modifier -> attribute format
.block {
  &--modifier {
    &__element{
      // Styling...
    }
  }
}
```

## User Stories

Pending...

## Wireframes

Pending...

## Data Models

### Events

- Pending...

### Reservations

- Pending...

### Clubs

- Pending...

## MVP

#### Features
- Pending...

## Milestones

Pending...

#### Sprint n - TBD
- Pending...

#### Sprint n+1 - TBD
- Pending...
