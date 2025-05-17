import React, { useState } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoadingBar from "react-top-loading-bar";

const App = () => {
    let pagesize = 9;
    const apikey = process.env.REACT_APP_APIKEY;

    const [progress, setprogress] = useState(0);
    const settheprogress = (progress) => {
        setprogress(progress)
    }


    return (
        <BrowserRouter>
            <div className="App">
                <Navbar />
                <LoadingBar
                    color="#f11946"
                    progress={progress}
                />
                <Routes>
                    <Route exact path='/' element={<News setProgress={settheprogress} apikey={apikey} key={"general"} pagesize={pagesize} category="general" country="us" />} />
                    <Route exact path='/business' element={<News setProgress={settheprogress} apikey={apikey} key={"business"} pagesize={pagesize} category="business" country="us" />} />
                    <Route exact path='/entertainment' element={<News setProgress={settheprogress} apikey={apikey} key={"entertainment"} pagesize={pagesize} category="entertainment" country="us" />} />
                    <Route exact path='/general' element={<News setProgress={settheprogress} apikey={apikey} key={"general"} pagesize={pagesize} category="general" country="us" />} />
                    <Route exact path='/health' element={<News setProgress={settheprogress} apikey={apikey} key={"health"} pagesize={pagesize} category="health" country="us" />} />
                    <Route exact path='/science' element={<News setProgress={settheprogress} apikey={apikey} key={"science"} pagesize={pagesize} category="science" country="us" />} />
                    <Route exact path='/sports' element={<News setProgress={settheprogress} apikey={apikey} key={"sports"} pagesize={pagesize} category="sports" country="us" />} />
                    <Route exact path='/technology' element={<News setProgress={settheprogress} apikey={apikey} key={"technology"} pagesize={pagesize} category="technology" country="us" />} />
                </Routes >
            </div >
        </BrowserRouter>
    );
}

export default App