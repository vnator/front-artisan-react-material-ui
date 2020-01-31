# CONTRIBUTING

## 1. Questions
Check our [FUTURE BOARD FOR THIS PROJECT]() for view the roadmap project and subscribe our [FUTURE CHANNEL FOR THIS PROJECT]() for talk our Squad/Team.

## 2. Issue Labeling/Types
| Label | Description |
| ------|-------------|
| docs | Indicate documentation development necessary |
| feature | Indicate feature development |
| CI | Indicate Continuous integration development |
| refactor | Indicate code refactor |
| remove | Indicate feature removal |
| fix | Indicates an unexpected problem or unintended behavior |
| invalid | Indicates that an issue or pull request is no longer relevant |
| question | Indicates that an issue or pull request needs more information |

## 3. Report a Hotfix
To Report a hotfix, see our [FUTURE BOARD FOR THIS PROJECT]() and search in board if this bug already register, else you can create this issue, add the fix label and await for Squad/Team response your request,

## 4. Proposal a Feature
see our [FUTURE BOARD FOR THIS PROJECT]() and search in board if this task already register, else you can open a issue, add a question label, and describe the current scenario, its problems, and how your resource solves this problem.

## 5. Status Check List
What we check in your code for acept in remote repository.

- Javascript Code Format
- CSS Code Format
- Unit Tests
- Building

## 6. Step by Step
How work in this project

### 6.1 Catch the task on the Project
see the [TRELO FUTURE BOARD](), and take your task in TODO list, when start move your card to DOING list.


### 6.2 Clone/Fork the Project
clone your project in [GITLAB REPOSITORY URL]().

### 6.3 Branch Organization
We using the [GitFlow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) workflow in our projects, see how work with him, and check our branch name organization.

> branch name: [type]/[PROJECT]-[number of task]-[description_of_task_with_snake_case]
- exemples:
    - feature/AT-1-theme_generator
    - hotfix/AT-2-resolve_api_fix
- what is snake_case?
    - [se_here](https://en.wikipedia.org/wiki/Snake_case)
- Use [gitflow cli](https://github.com/nvie/gitflow) to help.
    - the command
        - `gitflow feature start AT-1-theme_generator`
    - is equal to
        - `git checkout develop && git checkout -b feature/AT-1-theme_generator`

### 6.4 Commit the message pattern
We write the git messages linke [this commit message](https://karma-runner.github.io/4.0/dev/git-commit-msg.html), if you need a help, use `npm run commit` or `yarn run commit` and run the [commitzen cli](https://github.com/commitizen/cz-cli) to write your message.

### 6.5 Delivering the task
After finish the task, write your tests and check the code format, publish your task and open a merge request to `develop` branch. In remote repository the CI/CD process will run the status check list for enable to merge request.

## 7 Folder Structure
Description of Folder Structure and file organization

 - -> `src/` - main directory of source code application.
    - -> `component/` - commom components of react.
      - -> `components/AnyComponent` - Default Component Structure.
    - -> `config/` - configuration of dependencies.
      - -> `client.js` - configuration of [ApolloClient](https://www.apollographql.com/docs/react/api/apollo-client/).
      - -> `flattenMessages.js` - config messages for React Intl.
      - -> `rootReducer.js` - configuration of main reducer in React Redux.
      - -> `store.js` - configuration of main store for Redux Provider.
      - -> `serviceWorker.js` - default config for serviceWorker of Create React App.
    - -> `const/` - constants with global scope.
      - -> `routes.js` - paths and params for routes
      - -> `patterns.js` - regex patterns
      - -> `errors.js` - errors codes
    - -> `fonts/` - font assets for typograph.
    - -> `img/` - images assests.
    - -> `modules/` - unique components for app structure.
      - -> `modules/AnyComponent` - Default Component Structure.
    - -> `pages/` - pages of application.
      - -> `pages/AnyComponent` - Default Component Structure.
    - -> `queries/` - GraphQL Queries for Data Fetching.
    - -> `theme/` - Material Ui Theme Object see the about [customization theme](https://material-ui.com/customization/theming/).
      - -> theme/font-face.css - Font face definitions.
    - -> `utils/` - Javascript Functions for any persistent case.
    - -> `index.css` - main file for import global definitions, in pure css.
    - -> `index.js` - main source file to init the application.
    - -> `messages.js` - main file for request the messages for Internacionalization.

### 7.1 Default Component Structure

- -> `AnyComponent/` - by default all component must be a folder.
  - -> `Component.jsx` - React Components must be of `.jsx` extension.
  - -> `Component.module.css` - stylesheet of component, use `.module.css` sulfix for css modules.
  - -> `__tests__` - folder for all tests of AnyComponent
    - -> `anyComponent.test.js` - anyComponent tests
    - -> `reducer.test.js` - anyComponent reducer tests
    - -> `actions.test.js` - anyComponent actions tests
    - -> `thunk.test.js` - anyComponents thunks tests
  - -> `redux/` - state management definitions.
    - -> `reducer.js` - file with [reducer](https://redux.js.org/basics/reducers) of component.
    - -> `actions.js` - file with [actions](https://redux.js.org/basics/actions) of component.
    - -> `types.js` - file with action [types](https://redux.js.org/basics/types) of component.
    - -> `thunks.js` - file with [thunks](https://github.com/reduxjs/redux-thunk#whats-a-thunk) of component.

## 8 Tests
We use [jest](https://facebook.github.io/jest/) how test suite. Check in [README](./README.md) the main libraries and frameworks of dev dependencies.

**`__tests__` directory**: every test needs be create inside a `__tests__` directory. Only tests can stay here.

**`feature.test.js` file**: any feature have a unique file for tests her, the name of the file needs a sulfix `.test.js`.

**methods or functions**: The methods or functions of feature must be inside a [describe](https://facebook.github.io/jest/docs/en/api.html#describename-fn)function. 

**assert or expect**: each assert have a unique [test](https://facebook.github.io/jest/docs/en/api.html#testname-fn-timeout) with the name describing the result expected.

```javascript
// sum.test.js
import sum from '../sum';

describe('sum', () => {
  const wrapper = sum(32, 12);
  
  test('snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('result', () => {
    expect(wrapper).toEqual(44);
  });
});
```
## 11 Style

All our style use material ui definitions see [material-ui styles](https://material-ui.com/styles/basics/) and use the [theme](https://material-ui.com/styles/advanced/) to take our variables.
