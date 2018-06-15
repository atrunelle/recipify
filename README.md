# Recipify application

In order to compare FE frameworks and keep myself updated with latest technologies, I choose to make the same application using different techniques and frameworks: 
- [Vue](https://github.com/atrunelle/recipify/tree/master/vuejs)
- [Angular 2+](https://github.com/atrunelle/recipify/tree/master/angular)
- [React](https://github.com/atrunelle/recipify/tree/master/react)

They all use stores using Vuex, NgRx and Redux for the only purpose to show how I would structure a large application to allow it to scale, even though it might be overkill in the case of this simple app.

## Features
The application purpose is to be able to create recipes by searching for ingredients and comparing the nutritional content of each ingredient.

## Material design
In order to focus purely on the logic, and not have to design the app from scratch (I am not a designer), I choose to use material design using the official material design (or more popular) for each framework. 

## Testing
Each of those applications is fully unit tested or in the process to be. I didn't use TDD as for some, I was learning the framework at the time, and preferred to leave testing complexity the framework can bring apart.

## Architecture

All apps follow a stateful/stateless architecture, so it's scalable, testable and most components can be reused across the application.
Features are can be found in the `modules` folder, with the idea to be able to add folder per features (such as auth for example). 

Store modules related to each feature will be found here as well, so all related code is next to each other.

Test files can be found next to source code in a `specs` folder or in the folder itself, so they are close to files they relate to as well and can be quickly found/edited.