# Mearn Stack 

## Contents
### Front-End
- [ ] [Section 2 Lesson 4 - Initial Setup](https://github.com/rodriggj/mearn-stack#sect-2-lesson-4---initial-init--setup)
- [ ] [Section 2 Lesson 5 - Navbar](https://github.com/rodriggj/mearn-stack#sect-2-lesson-5---navbar)
- [ ] [Section 2 Lesson 6 - Product List](https://github.com/rodriggj/mearn-stack#section-2-lesson-6---product-list)
- [ ] [Section 2 Lesson 7 - Rating Component](https://github.com/rodriggj/mearn-stack#sect-2-lesson-7---rating-component)
- [ ] [Section 2 Lesson 8 - Implementing React Router](https://github.com/rodriggj/mearn-stack#section-2-lesson-8---implementing-react-router)
- [ ] [Section 2 Lesson 9 - Implementing Product Details Screen](https://github.com/rodriggj/mearn-stack#section-2-lesson-9---implementing-product-details-screen)
### Back-End
- [ ] [Section 3 Lesson 12 - Implmenting Backend Routes](https://github.com/rodriggj/mearn-stack#section-3-lesson-13---fetching-products-to-frontend-from-backend)

--------

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

[Back To Top](https://github.com/rodriggj/mearn-stack#contents)
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

[Back To Top](https://github.com/rodriggj/mearn-stack#contents)
--------

### Section 2 Lesson 6 - Product List

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

[Back To Top](https://github.com/rodriggj/mearn-stack#contents)
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

[Back To Top](https://github.com/rodriggj/mearn-stack#contents)
--------

### Section 2 Lesson 8 - Implementing React Router

1. Install `react-router-dom`
```
npm i react-router-dom react-router-bootstrap --save
```
2. Go to `App.js` to implement the router. First import the router, then wrap the application in the Router.
```js
import React from "react";
import { BrowserRouter as Router } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homescreen from "./screens/Homescreen";

const App = () => {
  return (
    <Router>
      <Header/>
      <main className="py-3"> 
        <Container>
          <h1>Welcome to Proshop.</h1>
          <Homescreen/>
        </Container>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
```
3. Now instead of embedding Homescreen component we can now use Route. 
```js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homescreen from "./screens/Homescreen";

const App = () => {
  return (
    <Router>
      <Header/>
      <main className="py-3"> 
        <Container>
          <h1>Welcome to Proshop.</h1>
          <Routes>
            <Route path="/" element={<Homescreen/>}/>
          </Routes>
        </Container>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
```
> NOTE: Note the difference in syntax between react-router-dom v5 & v6. V6 now requires that you wrap the ```js<Route/>``` component in a ```js<Routes>``` parent component. It also requires that insteand of using the ```js<Route component={<Component/>}>``` that you now use ```js<Route element={<Component/>}>```. See [video](https://www.youtube.com/watch?v=k2Zk5cbiZhg&t=1s) for v5 to v6 differences. 
4. To add a new route, lets create a new screen called `Product Screen`. So add this to your screens directory. And then import this new screen to your App.js file with an import statement.
5. The other routing change we want to make here aside from <Routes> is to introduced the ```js<Link/>``` tag, which will replace the anchor tags. We currently have 2 anchor tags in our Homescreen for Cart and Signin. We can replace these with <Link>. The benefit of doing this is the React Router will continue to treat the site as a Single Page Application vs. with Anchor tag the server will make a new request/response cycle and re-render content from the server slowing down our application. We can also do this with all our Product links on Homescreen which are also using Anchor tags. Update the Products, Signin, and Cart as follows: 
```js
// Product.js file
import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

const Product = ({product}) => {
  return (
    <Card className="my-3 p-3 rounded">
        <Link to={`product/${product._id}`}>
            <Card.Img src={ product.image } variant='top'/>
        </Link>

        <Card.Body>
          <Link to={`product/${product._id}`}>
            <Card.Title as='div'><strong>{product.name}</strong></Card.Title>
          </Link>
        </Card.Body>

        <Card.Text as='div'>
          <div className="my-3">
            {/* <Rating value={product.rating} text={` of ${product.numReviews} reviews`} color={'red'}/> */}
            <Rating value={product.rating} text={` of ${product.numReviews} reviews`}/>
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

```js
// Header.js file
import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Container, Nav } from 'react-bootstrap'

const Header = () => {
  return (
    <header>
        <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>React-Bootstrap</Navbar.Brand>
              </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="justify-content-end" style={{ width: "100%" }}>
                  <LinkContainer to="/cart">
                    <Nav.Link ><i className="fas fa-shopping-cart"></i>Cart</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/signin">
                    <Nav.Link><i className="fas fa-user"></i>Sign In</Nav.Link>
                  </LinkContainer>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>   
    </header>
  )
}

export default Header   
```

[Back To Top](https://github.com/rodriggj/mearn-stack#contents)
----------

### Section 2 Lesson 9 - Implementing Product Details Screen

1. Open our Productscreen.js file
2. Import the following: 
```js
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../components/Rating'
import products from '../products'
```
3. Now we will use a higher order function called `find()`. We can also can access to params via the use of a component in react-router-dom. In v5 you could use match, but in v6 you have to use the useParams function. 
```js
import React from 'react'
import { useParams } from 'react-router-dom'
// import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
// import Rating from '../components/Rating'
import products from '../products'

const Productscreen = () => {
    const params = useParams()
    const product = products.find((p) => p._id === params.id)

  return (
    <div>{product.name}</div>
  )
}

export default Productscreen
```
4. Now that we see that the product name is rendering for us we can begin our styling of the content we are returning. For example we can add a go back button and other visual elements we want to display. See the Productscreen.js file and the use of Cols, Rows, Cards, ListGroups, and ListGroup.Items.

[Back To Top](https://github.com/rodriggj/mearn-stack#contents)
---------

### Section 3 Lesson 12 - Implementing Backend Routes

1. Create a folder called `proshop/backend`
2. In the root folder `proshop`, run the `npm init` command to create a package.json file at the root level. 
3. Run the command  `npm i express --save` at the root level to install the express module to the package.json file. 
4. Create a dir called `proshop/backend/data` and copy the `products.js` file from `proshop/frontend/src` folder this folder. Don't move the file, copy the file or you will break the front end. 
5. Now create a file called `proshop/backend/server.js`. In the `server.js` file input the following code. This code will provide 3 routes that will render the desired output we require. The first is just a test to validate a response is coming from the server. The second is a list of products coming from our products.js file, and the third route is a single product specified by the URL params. 
```js
const express = require('express') 
const app = express()
const products = require('./data/products')

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send('Hello from the backend API...')
})

app.get('/api/products', (req, res) => {
    res.json(products)
})

app.get('/api/products/:id', (req, res) => {
    const product = products.find((p) => p._id === req.params.id)
    res.json(product)
})

app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`)
})
```
> NOTE: That in the `products.js` file we are using plain JS to export the products array. Later we will use E6 Modules vs. the module.export syntax to retrieve output from the products.js file. Ultimately we will wire up MongoDB and extract our product content from the DB vs. a single file. 

6. In the package.json file update the `scripts` section to have a `start` script that will run the server.js file via the node binary. 

--------

### Section 3 Lesson 13 - Fetching Products to Frontend from Backend

1. Begin by navigating back to the root directory `proshop` and installing a dependency `axios`. This package will manage the request/response cycle for the fetch requests. 
```
npm i axios --save
```
2. In 2 different terminal sessions start the frontend (running on port 3000) and the backend (running on port 5000). 
3. Currently our products are being rendered/supplied by our front-end, specifically the import statement on our Homescreen component ```jsimport products from '../products.js'```. We **don't want to do this** instead we want to fetch our product list from the backend API. So for now lets comment out or delete the import statement.  
4. If we eliminate the product.js import, then how will we see our products. In React we have a construct called `state`. And `state` can be implemented at a Global or Component level. Ultimately we will need Products to be global level state and we will manage State with a tool called `Redux`. But for right now we will make Products a Component level concern and manage our Product state with React Hooks. Specifically we will use the `useState` hook. In our Homescreen component add the following code. 
```js
import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
// import products from '../products.js'
import Product from '../components/Product.js'

const HomeScreen = () => {
  const [products, setProducts] = useState([])

  return (
    <>
        <h1>Latest Products</h1>
        <Row>
            {products.map((product)=> {
                return <>
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product key={product._id} product={product}/>
                </Col>
                </>

            })}
        </Row>
    </>
  )
}
  
export default HomeScreen
```
5. We are going to use the `useState` hook and the `axios` package to make fetch calls to our backend to retrieve products from our API. Before doing this we will set up a proxy within the `proshop/frontend/package.json` script to avoid having to setup CORS or managing other fetch issues. To do this add the following to the package.json file
```json
{
  "name": "frontend",
  "version": "0.1.0",
  "proxy": "http://127.0.0.1:5000",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
  // ...
```
5. Now that we are using the `useState` hook and have passed an empty array as a default value, there are no products displayed. To display products as we fetch them from our backend we need to use one more React hook, which is `useEffect`. This hook will take the fetched products, and display them back to the frontend. What ever we place inside `useEffect` function will run as soon as the page loads. 
```js
import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import axios from 'axios'
// import products from '../products.js'
import Product from '../components/Product.js'

const HomeScreen = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const {data} = await axios.get('/api/products')
      setProducts(data)
    }
    fetchProducts()
  }, [])
  // ...
  ```
6. Now we can do the same for our Products screen. Nav to Productscreen and replace our `products.js` reference with the useState, and useEffect methods. 
```js
import React, { useState, useEffect }from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../components/Rating'
// import products from '../products'

const Productscreen = () => {
    const params = useParams()
    // const product = products.find((p) => p._id === params.id)

    const [product, setProduct ] = useState({})

    useEffect(() => {
        const fetchProduct = async () => {
          const { data } = await axios.get(`/api/products/${params.id}`)
          setProduct(data)
        }
        fetchProduct()
      }, [])
// ...
```
7. Finally we can delete the `proshop/frontend/product.js` file because nothing is being populated as result of this file. It is all coming from the backend api call now. 

[Back To Top](https://github.com/rodriggj/mearn-stack#contents)
---------

### Section 3 Lesson 14 - Installing Nodemon & Concurrently

1. Stop both the frontend and backend terminal sessions (if running). 
2. Navigate to the root folder of your project `proshop`. 
3. Install nodemon & concurrenlty as Dev dependencies
```
npm i -D nodemon concurrently --save
```
4. Go to `proshop/package.json` to create a script that will start frontend and backend with nodemon. 
```json
{
  "name": "proshop",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "node ./backend/server.js", 
    "server": "nodemon /backend/server",
    "client": "npm start --prefix frontend"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "axios": "^1.3.3",
    "express": "^4.18.2"
  }
}
```
5. Now if you run `npm run client` or `npm run server` you can get either of the 2 envirnoments to run, but they need to be started togehter. To do this we can add `concurrently`. To add `concurrenlty` go back into the root `package.json` file and add the following `dev` script. 
```json
{
  "name": "proshop",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "node ./backend/server.js",
    "server": "nodemon ./backend/server.js",
    "client": "npm start --prefix frontend",
    "dev": "concurrently \"npm run server\" \"npm run client\""
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "axios": "^1.3.3",
    "express": "^4.18.2"
  },
  "devDependencies": {
    "concurrently": "^7.6.0",
    "nodemon": "^2.0.20"
  }
}
```