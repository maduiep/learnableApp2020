import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// pages import
import HomePage from "./pages/Home/Home";
import LearnablePage from "./pages/Learnable/Learnable";
import DeveloperPage from "./pages/Developer/Developer";
import DesignerPage from "./pages/Designer/Designer";
import JournalPage from "./pages/JournalPage/JournalPage";
import ApplyPage from "./pages/Apply/Apply";
import FAQ from "./pages/Faq/Faq";

const App = () => {
    return (
        <main id="app">
            <Router>
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/learnable" component={LearnablePage} />
                    <Route path="/apply" component={ApplyPage} />
                    <Route path="/FAQ" component={FAQ} />
                    <Route path="/journal" component={JournalPage} />
                    <Route path="/designer" component={DesignerPage} />
                    <Route path="/developer" component={DeveloperPage} />
                </Switch>
            </Router>
        </main>
    );
};

export default App;
