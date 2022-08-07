import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./views/HomePage";
const App = () => {
    return (
        <Router>
            <Routes>
                    <Route exact path='/' element={'home'}/>
                    <Route path='/new' element={<Header/>}/>
                    <Route path='/home' element={<HomePage/>}/>
             </Routes>
        </Router>
    );
};

export default App;