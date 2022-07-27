# Snapface

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## NG FORM

You have 2 types of form : - template (defined in html) - reactive (defined in TS ) - Observable integration - More way to validate data - Dynamic forms (could evolve throughout the process)

Here we have also the 2-way binding concept which is represented by '[()]', it does mean that your variable is influenced by your TS & also by the HTML form user inputs.

You can create local reference with # which indicates to angular to create a local variable in the html in order to send it out through a method (ex : <form #emailForm="ngForm" (ngSubmit)="onSubmitForm(emailForm)">)
