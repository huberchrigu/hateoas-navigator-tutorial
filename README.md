# HateoasNavigatorTutorial

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.7.

## Requirements
0. yarn version >= 1.7.0
0. Java JDK >= 1.8

## Tutorial
### Setup UI
0. `yarn add global @angular/cli`
0. `ng new hateoas-navigator-tutorial --routing=true`
0. `cd hateoas-navigator-tutorial`
0. `ng add @angular/material`
0. `ng add resource-components`

#### What does ng add resource-components do?
Instead of running resource-components' ng-add schematic, you could also apply the following manually:
0. `yarn add moment hateoas-navigator resource-components`
0. Add the "proxyConfig" line to [_angular.json_](./angular.json)
0. Copy [proxy.conf.json](./src/proxy.conf.json)
0. In [app.module.ts](./src/app/app.module.ts) add the three imports
```
HalNavigatorModule.forRoot(undefined),
DocumentComponentsModule,
RouterModule.forRoot(GenericRoutes.get())
```
0. Due to an angular issue, replace `GenericRoutes.get()` by the array it returns
0. Add the default navigation by replacing [app.component.html](./src/app/app.component.html) with
```
<lib-navigation></lib-navigation>
<div id="cmp-content" class="mat-elevation-z2">
  <router-outlet></router-outlet>
</div>
```

### Setup backend
0. Go to https://start.spring.io
0. Choose the dependencies "Rest Repositories", "JPA" and "H2" ("Devtools" and "Lombok" if you wish)
0. Generate Project, unzip the downloaded zip
0. *Optional*: Add the patched version of Spring Data Rest to the [pom.xml](./backend/pom.xml):
```
<dependencyManagement>
    <dependencies>
      <dependency>
        <groupId>org.springframework.data</groupId>
        <artifactId>spring-data-rest-webmvc</artifactId>
        <version>3.1.9.RELEASE-FORK</version><!-- Fixes JsonSchema issue -->
      </dependency>
    </dependencies>
</dependencyManagement>
```

### Add some entities to the backend
0. Create an entity, example: [Person](./backend/src/main/java/com/example/hateoas/hateoastutorial/Person.java). 
   _Note_: Currently HATEOAS Navigator requires a `@Version` in every root entity.
0. Create a repository, example: [PersonRepository](./backend/src/main/java/com/example/hateoas/hateoastutorial/PersonRepository.java).
0. Then start the backend: `./mvnw spring-boot:run`

### Integrate hateoas-navigator
0. Start the UI `ng serve`

Now you can navigate to the previously created resource, create, list, edit and delete items.

### Add excerpts
If you have an association from one resource to another, define an excerpt projection to see the associated resource's excerpt.
Example: [PersonExcerpt](./backend/src/main/java/com/example/hateoas/hateoastutorial/PersonExcerpt.java)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
