import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from "./pages/Home/Home";
import Learnable from "./pages/Learnable/Learnable";

// pages import

const App = () => {
    return (
        <main id="app">
            <Router>
                <Switch>
                    <Route path="/" component={Learnable} />
                    <Route path="/learnable" exact component={Homepage} />
                </Switch>
            </Router>
        </main>
    );
};

export default App;
