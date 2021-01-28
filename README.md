This to-do list app is my attempt to learn Typescript and Redux as a complete beginner.

With this app, you can create, update, toggle(to mark as complete or incomplete), and delete to-do items.

This project has 3 versions, in chronological order:
1. [The first version](https://github.com/yuhanx0728/react-ts-todo-web-app/tree/ts-only) used the React Context API for state management.
2. [The second version](https://github.com/yuhanx0728/react-ts-todo-web-app/tree/sync-redux) switched from Context hooks to Redux, but only supports synchronous redux actions.
3. [The final version](https://github.com/yuhanx0728/react-ts-todo-web-app/tree/main)(main branch) used `redux-thunk` on top of Redux to support both synchronous and asynchronous actions. Adding and deleting to-do items have a delay of 0.5s to show that asynchronous actions work.

## Useful Documentations

I borrowed code from [this tutotial](https://www.freecodecamp.org/news/how-to-use-redux-in-your-react-typescript-app).

Here are some other resources that helped me understand deeper while I am working on this project:
1. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then
2. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve
3. https://react-redux.js.org/api/hooks
4. https://github.com/reduxjs/redux-thunk/tree/41aefcc28a80d2b21f8ee1e68639757bf6d7ba49
5. https://stackoverflow.com/questions/35411423/how-to-dispatch-a-redux-action-with-a-timeout/35415559#35415559

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
