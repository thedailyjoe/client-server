import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import theme from './Theme';
import Home from './Components/Home';
import Products from './Components/Products';
import Collaborate from './Components/Collaborate';
import About from './Components/About';
import Cart from './Components/Cart';

import MainAppBar from './Components/AppBar';

import { MuiThemeProvider } from "@material-ui/core/styles";

import CssBaseline from "@material-ui/core/CssBaseline";



const App = props => {
    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline>
                <Router>
                    <div className="App">
                        <MainAppBar />



                        <Route exact path="/" component={Home} />
                        <Route path="/products" component={Products} />
                        <Route path="/collaborate" component={Collaborate} />
                        <Route path="/about" component={About} />
                        <Route path="/cart" component={Cart} />
                    </div>
                </Router>
            </CssBaseline>
        </MuiThemeProvider>
    );
};

export default App;
