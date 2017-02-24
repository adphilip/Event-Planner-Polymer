# Event Planner - Polymer / Firebase
This repository contains all my own programming project files, notes, and associated files for the [Udacity -Senior Web Developer Nanodegree - By Google - Project 1](https://www.udacity.com/course/object-oriented-javascript--ud015) course with [Udacity](https://www.udacity.com/). 

## Project Criteria
This application was created as an Event Planner, with a special focus on HTML form semantics, usability & validation, as well as application responsive display on all devices. The application must allow someone to name their event, search for a host location (using a location API like Foursquare), set the capacity of the event, the start and end times, and input a description of the event.

### Additional Features
- Home-screen installable.
- Google places address autocomplete.
- Firebase JSON data get / post. 
- Firebase Authentication user login / account creation.
- app.js uses Model-View-Controller OOP methodology, and JS prototyping.
- Offline functionality.

## Demo

![desktop image](https://onlinedevelopers.ca/udacity/event-planner/components/img/read-me/proj1-collage.jpg)

[To view the application live click here] (https://onlinedevelopers.ca/udacity/event-planner/)

To download, please follow the instructions below.

## Installation

To install and run this locally on your computer, please use these commands:

Install Global Dependencies:
```
$ npm install -g bower
$ npm install -g firebase-tools 
```

Clone the repository from: 
```
$ git clone https://github.com/escobard/udacity-srwebdev-project1-event-signup.git
```

$ git clone https://github.com/adphilip/Event-Planner-Polymer
```

Install NPM dependencies:
```
$ npm install
```

Install Bower components:
```
$ bower install
```

## Usage

```
$ gulp serve
```

To publish, minimize, and compile components for production use:

```
$ gulp build
```

## Most Recent Update - v1.20
- service worker functionality fixed.
- all polymer files and dependencies are now stored in a single file, index.html.
- fixed firefox and other browser usage, only works with production version not dev version due to how polymer components render with shadowDOM
- application working offline for development and production versions
- fixed mobile layout height issues and progress bar on mobile.

## To Do's
- Get rid of obsolete commentary in code.
- Add google login functionality.
- Refactor all code into Polymer for cleaner scalability. 
- Change event date display format.

## Known Bugs
- Google place autocomplete does not recognize polymer paper-inputs as HTMLInputElements.
- When editing an event, event input text is autofilled with most recent entry.
- app-storage bugged for production due to vulcanization compile.

## Libraries, Frameworks

[Polymer](https://codelabs.developers.google.com/codelabs/polymer-firebase-pwa/index.html?index=..%2F..%2Findex#0)

[Firebase](https://codelabs.developers.google.com/codelabs/polymer-firebase-pwa/index.html?index=..%2F..%2Findex#0)

[FLATICON - for the favicon] (http://www.flaticon.com/)

## Tutorials

[Google Labs Note App Tutorial](https://codelabs.developers.google.com/codelabs/polymer-firebase-pwa/index.html?index=..%2F..%2Findex#0)

[Building High Conversion Web Tools - By Google] (https://www.udacity.com/course/building-high-conversion-web-forms--ud890) 

[Web Tooling & Automation - By Google] (https://www.udacity.com/course/web-tooling-automation--ud892)

Various stack overflow posts, and other internet tutorials referenced in my commits. 

## Contribution

Feel free to contribute to this repository. All files in this repository are protected under the MIT license, but feel free to contribute, fork, star, or share this application as you see fit.

For commercial or educational use, please paste a link to this repository to give proper credit.

## License
As of February 16th, 2016, these files are open for all to use and contribute to. This repository is protected under the [MIT License](http://choosealicense.com/licenses/mit/).