import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from "./pages/Home/Home";
import Learnable from "./pages/Learnable/Learnable";
import Developer from "./pages/Developer/Developer";
import Designer from "./pages/Designer/Designer";

// pages import

const App = () => {
    return (
        <main id="app">
            <Router>
                <Switch>
                    <Route path="/"Homepage={Homepage} />
                    <Route path="/"Learnable={Learnable} />
                    <Route path="/"Developer={Developer} />
                    <Route path="/"Designer={Designer} />
                </Switch>
            </Router>
        </main>
    );
};

export default App;
