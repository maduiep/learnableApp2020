import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from "./pages/Home/Home";
// import Learnable from "./pages/Learnable/Learnable";
//import Developer from "./pages/Developer/Developer";
// import Designer from "./pages/Designer/Designer";
// import JournalPage from "./pages/JournalPage/JournalPage";
// import Apply from "./pages/Apply/Apply";
// import Apply from "./pages/Faq/Faq";



// pages import

const App = () => {
    return (
        <main id="app">
            <Router>
                <Switch>
                    
                    <Route path="/" component={Homepage} />
                </Switch>
            </Router>
        </main>
    );
};

export default App;
