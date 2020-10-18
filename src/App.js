import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from "./pages/Home";
import Learnable from "./pages/Learnable/Learnable";

// pages import

const App = () => {
    return (
        <main id="app">
            <Router>
                <Switch>
                    <Route path="/" component={Homepage} />
                    <Route path="/learnable" component={Learnable} />
                </Switch>
            </Router>
        </main>
    );
};

export default App;
