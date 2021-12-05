import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Sidebar, Footer } from './components';
import {
	Home,
	SingleProduct,
	Cart,
	Checkout,
	Error,
	About,
	Products,
	PrivateRoute,
	AuthWrapper,
} from './pages';

function App() {
	return (
		<AuthWrapper>
			<Router>
				<Navbar />
				<Sidebar />
				<Switch>
					<Route exact path="/e-commerce-store">
						<Home />
					</Route>
					<Route exact path="/e-commerce-store/about">
						<About />
					</Route>
					<Route exact path="/e-commerce-store/cart">
						<Cart />
					</Route>
					<Route exact path="/e-commerce-store/products">
						<Products />
					</Route>
					<Route
						exact
						path="/products/:id"
						children={<SingleProduct />}
					></Route>
					<PrivateRoute exact path="/e-commerce-store/checkout">
						<Checkout />
					</PrivateRoute>
					<Route path="*">
						<Error />
					</Route>
				</Switch>
				<Footer />
			</Router>
		</AuthWrapper>
	);
}

export default App;
