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

-------
 
### Sect 2 Lesson 5 - Navbar

1. Create a directory to capture components
```s
mkdir proshop/src/components
```
2. Create a file in `proshop/src/componts` called _Header.js_. 
3. In the _Header.js_ file use the E6 plugin to generate a funciton component called `Header`
```js
rafce [tab]
```
should generate the following code 
```js
import React from 'react'

const Header = () => {
  return (
    <div>Header</div>
  )
}

export default Header   
```
4. Change the ```html<div></div>``` tags out for ```html<header></header>``` tags.
5. Now repeat the process to create a _Footer.js_ file, again changing the ```html<div></div>``` tags to ```html<footer></footer>``` tags. 
6. Now nav to the _App.js_ file and import both the _Header_ and _Footer_ components. 
```js
# App.js file 
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header/>
      <main>
         <h1>Welcome to Proshop.</h1>
      </main>
      <Footer/>
    </>
  );
}

export default App;
```
7. Now we will import `React Bootstrap` which is a 3rd party library that will help with styling our components and overall formatting in predefined CSS. Go to the `public/index.html` page and input the ```html<link></link>``` & ```html<script></script>``` tags with the appropriate CDN references. We will import this library with `bootwatch` will import wholesale themes to our project. To do this go to `bootswatch` and download the .min.css file of the theme you want and add it to the `proshop/frontend/src` file. [Bootswatch Link](https://bootswatch.com/)
8. Now to import the .min.css file to our project go to `proshop/frontend/src/index.js` file and import the css file. (React Bootstrap)[https://react-bootstrap.github.io/]
```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './bootstrap.min.css'
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```
9. Once this is done, you now need to import the modules for react-bootstrap to your package.json file. To do this run the following command: 
```
npm i react-boostratp --save
```
10. Now you can use the various components that are in `react-bootstrap` in our projects. The first we will import is the `Container` component in the `App.js` file. 
```js
import React from "react";
import { Container } from 'react-bootstrap'
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header/>
      <main> 
        <Container>
          <h1>Welcome to Proshop.</h1>
        </Container>
      </main>
      <Footer/>
    </>
  );
}

export default App;
```
11. We can use these components in the _Header_ & _Footer_ components. For example, add the following to the _Footer_ component, to create another container. 
```js
import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
        <Container>
            <Row>
                <Col className="text-center py-3">
                    Copyright &copy; Proshop
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer
```
12. Now to push the Footer to the bottom of the page, we can create a custom style and include this inour `index.css` file. Add the following to push the footer down. 
```css
main {
  min-height: 80vh;
}
```
13. Now we will modify our header to become a `navbar` component. So if you go to `React-Bootstrap` home page, and look for Navbar example. Incorporate this into the _Header.js_ file. You will have to import several of the components to incorporate into the Header component without compilation errors. We are eliminating the code from the template that pertains to the NavDropdown. 
```js
import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'

const Header = () => {
  return (
    <header>
        <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
            <Container>
                <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="justify-content-end" style={{ width: "100%" }}>
                    <Nav.Link href="/cart">Cart</Nav.Link>
                    <Nav.Link href="/signin">Sign In</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>   
    </header>
  )
}

export default Header   
```
14. Finally lets install `font-awesome` so we can add icons to our navbar. Font Awesome can be installed utilizing a CDN connection and a URL placed in our `index.html` file. [FontAwesome CDNJS](https://cdnjs.com/libraries/font-awesome). 
```html
<!-- proshop/public/index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Find the best products and prices on the web"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />

    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />

    <title>Welcome to Proshop</title>
  </head>
  <body>
    <noscript>  </noscript>
    <div id="root"></div>

  </body>
</html>
```
15. Now you can go to our Header.js file and for our Cart and Signin Links we can instead add font-awesome icons. 
```js
import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'

const Header = () => {
  return (
    <header>
        <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
            <Container>
                <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="justify-content-end" style={{ width: "100%" }}>
                    <Nav.Link href="/cart"><i className="fas fa-shopping-cart"></i>Cart</Nav.Link>
                    <Nav.Link href="/signin"><i className="fas fa-user"></i>Sign In</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>   
    </header>
  )
}

export default Header   
```
16. Provide some spacing between the header and main elements on the `App.js` file, but adding a ```html<main className="py-3"></main>```.

--------

## Section 2 Lesson 6 - Product List

1. In the `proshop/frontend/public` folder create, import the `images` folder
2. In the `proshop/frontend/src` folder, move the `products.js` file 
3. Create a directory called `screens` under the `proshop/frontend/src` root. 
4. In Screens create a file called `Homescreen.js`
5. On `Homescreen.js` file input the following code: 
```js
import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from './components/Product.js'
import products from '../products.js'

const HomeScreen = () => {
  return (
    <>
        <h1>Latest Products</h1>
        <Row>
            {products.map((product)=> {
                return <>
                <Col sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} />
                </Col>
                </>

            })}
        </Row>
    </>
  )
}

export default HomeScreen
```
6. Now we can modify this code to create a componet for the `Product` vs. just having an H3. To do this lets create a component called `Product.js` and enter the following code. 
```js
import React from 'react'
import { Card } from 'react-bootstrap'

const Product = ({product}) => {
  return (
    <Card className="my-3 p-3 rounded">
        <a href={`product/${product._id}`}>
            <Card.Img src={ product.image } variant='top'/>
        </a>

    </Card>
  )
}

export default Product
```
7. We can enhance the Product Card by adding additional information such as the title, ratings, & price. 
```js
import React from 'react'
import { Card } from 'react-bootstrap'

const Product = ({product}) => {
  return (
    <Card className="my-3 p-3 rounded">
        <a href={`product/${product._id}`}>
            <Card.Img src={ product.image } variant='top'/>
        </a>

        <Card.Body>
          <a href={`product/${product._id}`}>
            <Card.Title as='div'><strong>{product.name}</strong></Card.Title>
          </a>
        </Card.Body>

        <Card.Text as='div'>
          <div className="my-3">
            {product.rating} from {product.numReviews} reviews
          </div>
        </Card.Text>

        <Card.Text as='h3'>
          ${product.price}
        </Card.Text>
    </Card>
  )
}

export default Product
```

-------
 
### Sect 2 Lesson 7 - Rating Component

1. Create a component file called `Rating.js`
2. Import the `Rating` component into our `Product` component. 
3. Ensure that the `Rating` component excepts 2 props, 1. ratings, & 2. numReviews
4. Ensure that there is conditional logic to display the correct star graphics and " of # of reviews" suffix. 
```js
import React from 'react'

const Rating = ({value, text}) => {
  return (
    <div className="rating">
        <span>
            <i className={value >= 1 ? 'fas fa-star' : value >= 0.5 ? 'fas fa-star-half-alt' : 'far fa-star'}></i>
        </span>
        <span>
            <i className={value >= 2 ? 'fas fa-star' : value >= 1.5 ? 'fas fa-star-half-alt' : 'far fa-star'}></i>
        </span>
        <span>
            <i className={value >= 3 ? 'fas fa-star' : value >= 2.5 ? 'fas fa-star-half-alt' : 'far fa-star'}></i>
        </span>
        <span>
            <i className={value >= 4 ? 'fas fa-star' : value >= 3.5 ? 'fas fa-star-half-alt' : 'far fa-star'}></i>
        </span>
        <span>
            <i className={value >= 5 ? 'fas fa-star' : value >= 4.5 ? 'fas fa-star-half-alt' : 'far fa-star'}></i>
        </span>
        <span>
            {text ? text : ''}
        </span>
    </div>
  )
}

export default Rating
```
5. We can add an additional prop to allow the user to specify the color of the stars being displayed. To do this add an additional prop to the Rating component, and pass in a color. To do this you can 1. pass a prop, or 2. set a default value for your props. 
```js
import React from 'react'
import { propTypes } from 'prop-types'

const Rating = ({value, text, color}) => {
  return (
    <div className="rating">
        <span>
            <i style={{color}} className={value >= 1 ? 'fas fa-star' : value >= 0.5 ? 'fas fa-star-half-alt' : 'far fa-star'}></i>
        </span>
        <span>
            <i style={{color}} className={value >= 2 ? 'fas fa-star' : value >= 1.5 ? 'fas fa-star-half-alt' : 'far fa-star'}></i>
        </span>
        <span>
            <i style={{color}} className={value >= 3 ? 'fas fa-star' : value >= 2.5 ? 'fas fa-star-half-alt' : 'far fa-star'}></i>
        </span>
        <span>
            <i style={{color}} className={value >= 4 ? 'fas fa-star' : value >= 3.5 ? 'fas fa-star-half-alt' : 'far fa-star'}></i>
        </span>
        <span>
            <i style={{color}} className={value >= 5 ? 'fas fa-star' : value >= 4.5 ? 'fas fa-star-half-alt' : 'far fa-star'}></i>
        </span>
        <span>
            {text ? text : ''}
        </span>
    </div>
  )
}

Rating.defaultProps = {
    color: '#f8e825'   //yellow
  }
  
export default Rating
```

6. Finally, we could have `typed` the prop types that we passed into Product by using `PropTypes`. 
```js
import React from 'react'
import { propTypes } from 'prop-types'

const Rating = ({value, text, color}) => {
  return (
    <div className="rating">
        <span>
            <i style={{color}} className={value >= 1 ? 'fas fa-star' : value >= 0.5 ? 'fas fa-star-half-alt' : 'far fa-star'}></i>
        </span>
        <span>
            <i style={{color}} className={value >= 2 ? 'fas fa-star' : value >= 1.5 ? 'fas fa-star-half-alt' : 'far fa-star'}></i>
        </span>
        <span>
            <i style={{color}} className={value >= 3 ? 'fas fa-star' : value >= 2.5 ? 'fas fa-star-half-alt' : 'far fa-star'}></i>
        </span>
        <span>
            <i style={{color}} className={value >= 4 ? 'fas fa-star' : value >= 3.5 ? 'fas fa-star-half-alt' : 'far fa-star'}></i>
        </span>
        <span>
            <i style={{color}} className={value >= 5 ? 'fas fa-star' : value >= 4.5 ? 'fas fa-star-half-alt' : 'far fa-star'}></i>
        </span>
        <span>
            {text ? text : ''}
        </span>
    </div>
  )
}

Rating.defaultProps = {
    color: '#f8e825',   //yellow
}

Rating.propTypes = {
    value: propTypes.number.isRequired, 
    text: propTypes.string.isRequired, 
    color: propTypes.string
}

export default Rating
```

--------

