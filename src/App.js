import React, { Component } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default class App extends Component {
    pagesize = 9;
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Navbar />
                    <Routes>
                        <Route exact path='/' element={<News key={"general"} pagesize={this.pagesize} category="general" country="us" />} />
                        <Route exact path='/business' element={<News key={"business"} pagesize={this.pagesize} category="business" country="us" />} />
                        <Route exact path='/entertainment' element={<News key={"entertainment"} pagesize={this.pagesize} category="entertainment" country="us" />} />
                        <Route exact path='/general' element={<News key={"general"} pagesize={this.pagesize} category="general" country="us" />} />
                        <Route exact path='/health' element={<News key={"health"} pagesize={this.pagesize} category="health" country="us" />} />
                        <Route exact path='/science' element={<News key={"science"} pagesize={this.pagesize} category="science" country="us" />} />
                        <Route exact path='/sports' element={<News key={"sports"} pagesize={this.pagesize} category="sports" country="us" />} />
                        <Route exact path='/technology' element={<News key={"technology"} pagesize={this.pagesize} category="technology" country="us" />} />
                    </Routes >
                </div >
            </BrowserRouter>
        );
    }
}
