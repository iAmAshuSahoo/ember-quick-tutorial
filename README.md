# ember-quickstart

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://cli.emberjs.com/release/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd ember-quickstart`
* `npm install`

## Running / Development

* `npm run start`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `npm run test`
* `npm run test:ember -- --server`

### Linting

* `npm run lint`
* `npm run lint:fix`

### Building

* `npm exec ember build` (development)
* `npm run build` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://cli.emberjs.com/release/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)


## Learnings

### QuickStart

* npm install -g ember-cli - for ember cli
* `ember --version` - for ember version
* Create new project with `ember new <project_name>`
* ember new super-rentals --lang en
* The development server has a feature called live reload - automatically re-compiles everything, and refreshes any open browser pages.
* In a route's model() method, *you return whatever data you want to make available to the template*. If you need to fetch data asynchronously, the model() method supports any library that uses JavaScript Promises.
* To generate route `ember generate route scientists` creates routes, templates for scientists and add update router for /scientists.
* To generate component `ember generate component people-list`. The @ indicates that @title is an argument that will be passed into the component, which makes it easier to reuse the same component in other parts of the app we are building. Add -gc for adding people-list.js file.
* Component names - <PeopleList>, based on its name on the file system. Please note that the letters P and L are capitalized
* PeopleList Comp is presentational, takes argument and renders template.
* In addition to template component has a Javascript file for adding behaviour.
* `on` modifier to attach the `this.showPerson` action to the button in the template - PersonList component template.
* `@action` indicates we want to use method as an action in our template, in response to user interaction.
* When passing arguments t the action method, we use `fn helper`
* `ember build --environment=production` generates build. Packages up all assests that make app. JS, template, CSS, web font, image and more.
* If you deploy your application to an Apache web server, first create a new virtual host for the application. To make sure all routes are handled by index.html, add the following directive to the application's virtual host configuration: `FallbackResource index.html`

### Javascript for Ember

* **Fields** - Class fields allow you to assign properties to an instance of the class on construction.
```
class Permission {
  canEdit = false;
}
above is similar to
class Permission {
  constructor() {
    this.canEdit = false;
  }
}
```
* Class fields are somewhat like object properties, but they have some key differences. They are created and assigned to every instance of the class, meaning that instance gets a unique version of the field. 
```
class Permission {
  roles = [];
}

let tom = new Permission();
let yehuda = new Permission();

tom.roles === yehuda.roles;
// false, they're different arrays
```
* Fields are assigned before any code in the constructor method is run, which is why we can rely on them being assigned correctly by the time it runs. 
* Fields *do not exist on the class itself, nor do they exist on the class's prototype*, they only *exist on the instance of the class*.
* they can be added to the class directly using the `static keyword`, like other class elements.

* **Decorators** - Decorators are user defined modifiers that can be applied to a class or class element such as a field or method to change its behavior. 
* Decorators are normal JavaScript functions that get applied with a special syntax, which is why you import them like any other function, but you use the @ symbol when applying them.
* Some decorators can also receive arguments
```
@observable
class Permission {}

class Permission {
  canEdit = false;

  @alias('canEdit') editable;
}

let current = new Permission();
console.log(current.editable); // false
```
* Classic classes - are deprecated, but it is still useful to be able to recognize them when looking at older code or blog posts. Ember used its own custom class syntax before native JavaScript classes existed
* Cross-browser support - Behind the scenes, Ember uses Babel to compile modern JavaScript to something that can work on all browsers.
* Anatomy of ember app
URL -> maps to route -> Router.js -> checks the route in Route handler for @model -> Loads template -> Loads Components -> Access model data.

### about page
* <LinkTo> is an example of a component(built-in) in Ember. because they start with an uppercase letter.
* @route => is used to pass arguments

### Automated Testing
* Adding acceptance test `ember generate acceptance-test super-rentals` - This is a generator command. Generators create files for us based on Ember's convention and populate with appropriate broilerplate. ember generate <type> <name> - what type of data is generating and what is it's name.
* `ember t -s or ember test --server` - For running the tests.

* `{{yeild}}` - It is like children of react. Whatever is between the opening and closing of component gets rendered.
* `ember generate component-test jumbo` - For component tests
