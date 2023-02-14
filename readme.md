# Mearn Stack 

## Version History

### Sect 2 Lesson 4 - Initial `init` & setup 
1. Create a directory called `proshop`
2. Create a directory called `proshop/frontend`
3. `cd` to `frontend`
4. Run npx create react app
```js
npx create-react-app .
```
5. Ensure the setup is complete by running the front end react application locally
```js
npm start
```
6. Clean up the `src` folder by eliminating some boilerplate files you don't need. Delete the following:
- In the `src/index.js` file, delete all the green comments
- In the `src` folder you can delete the following files. These are all boilerplate and we don't need them:
    + App.css
    + App.test.js
    + logo.svg
    + reportWebVitals.js
    + setupTest.js
- In the `public/index.html` file, delete all the green comments
7. When you delete these files check your console, React will call out dependencies you have in other parts of your code that rely on the files you just deleted. 
- App.css will be referenced on the `src/index.js` file. Delete this dependency. Continue to monitor you CLI and clean up any dependencies. 
8. Go into `src/App.js` and remove all the current code between the ```html<div></div>``` tags. 
9. Note that in React you don't have to use ```html<div></div>``` tags, you can use an _empty_ element to wrap content that will be returned in a React component called a `fragment`. Use a fragment in the `src/App.js` code where the ```html<div></div>``` tags used to be.
```js
import React from "react";

function App() {
  return (
    <>
      <h1>Welcome to Proshop.</h1>
    </>
  );
}

export default App;
```
10. Finally delete everything that is in the current `src/index.css` file. Now when you see you brower rendering you should see an unstyled H1 element that says "Welcome to Proshop".
11. Last change for this lesson. You can use `arrow functions` vs. the `function` keyword to creat a React Component. Recall you can also use Class Components. But the convention is to use Functional Components or Arrow Functions. Change the Function component to an arrow functioin on App.js. 
