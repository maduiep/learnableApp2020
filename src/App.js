import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
<<<<<<< HEAD
import Homepage from "./pages/Home/Home";
// import Learnable from "./pages/Learnable/Learnable";
//import Developer from "./pages/Developer/Developer";
// import Designer from "./pages/Designer/Designer";
// import JournalPage from "./pages/JournalPage/JournalPage";
// import Apply from "./pages/Apply/Apply";
// import Apply from "./pages/Faq/Faq";

=======
import HomePage from "./pages/Home/Home";
import LearnablePage from "./pages/Learnable/Learnable";
import DeveloperPage from "./pages/Developer/Developer";
import DesignerPage from "./pages/Designer/Designer";
import JournalPage from "./pages/JournalPage/JournalPage";
import ApplyPage from "./pages/Apply/Apply";
>>>>>>> 2b024a5f5c9605827951a36391cfd9fe079f1eb1


// pages import

const App = () => {
    return (
        <main id="app">
            <Router>
                <Switch>
<<<<<<< HEAD
                    
                    <Route path="/" component={Homepage} />
=======
                    <Route path="/" exact component={HomePage} />
                    <Route path="/learnable" component={LearnablePage} />
                    <Route path="/apply" component={ApplyPage} />
                    <Route path="/journal" component={JournalPage} />
                    <Route path="/designer" component={DesignerPage} />
                    <Route path="/developer" component={DeveloperPage} />
>>>>>>> 2b024a5f5c9605827951a36391cfd9fe079f1eb1
                </Switch>
            </Router>
        </main>
    );
};

export default App;
