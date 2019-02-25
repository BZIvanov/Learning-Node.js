import React, { Fragment, Component, lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import './index.css';

const Home = lazy(() => import('./components/views/home'));
const About = lazy(() => import('./components/views/about'));
const Books = lazy(() => import('./components/views/books'));

const NavBar = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/about">
                            About
                        </Link>
                        <Link to="/">
                            Home
                        </Link>
                        <Link to="/foo">
                            Foo
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

const NotFound = () => {
    return (
        <div>
            <h1>These are not the droids your are looking for</h1>
        </div>
    );
};

class AppWrapper extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <NavBar />
                    <Suspense fallback={<span>Loading...</span>}>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/aboutus" component={About} />
                            <Route path="/books" component={Books} />
                            <Route component={NotFound} />
                        </Switch>
                    </Suspense>
                </Fragment>
            </Router>
        );
    }
};

ReactDOM.render(
    <AppWrapper />,
    document.getElementById('root')
);