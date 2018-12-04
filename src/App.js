import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

const MenuLink = ({ lable, to, activeOnlyWhenExact }) => {
    return (
        <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => {
            var active = match ? 'active abc' : '';
            return (
                <li className={active}>
                    <Link to={to} className="my-link">
                        {lable}   
                    </Link>
                </li>
            )
        }}

        />
    );
}
class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    {/**Menu */}
                    <nav className="navbar navbar-inverse">
                        <ul className="nav navbar-nav">
                                <MenuLink lable="Home" to="/" activeOnlyWhenExact={true}/>
                                <MenuLink lable="Contact" to="/contact" activeOnlyWhenExact={false}/>
                                <MenuLink lable="About" to="/about" activeOnlyWhenExact={false}/>
                        </ul>
                    </nav>
                    {/*Content*/}
                    <Route path='/' exact component={Home} />
                    <Route path='/contact' component={Contact} />
                    <Route path='/about' component={About} />
                </div>
            </Router>
        );
    }
}

export default App;
