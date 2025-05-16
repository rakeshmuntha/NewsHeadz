import React, { Component } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
    pagesize = 9;
    apikey = process.env.REACT_APP_APIKEY;

    state = {
        progress: 0
    }

    setProgress = (progress) => {
        this.setState({ progress: progress })
    }
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Navbar />
                    <LoadingBar
                        color="#f11946"
                        progress={this.state.progress}
                    />
                    <Routes>
                        <Route exact path='/' element={<News setProgress = {this.setProgress} apikey = {this.apikey}  key={"general"} pagesize={this.pagesize} category="general" country="us" />} />
                        <Route exact path='/business' element={<News setProgress = {this.setProgress} apikey = {this.apikey}  key={"business"} pagesize={this.pagesize} category="business" country="us" />} />
                        <Route exact path='/entertainment' element={<News setProgress = {this.setProgress} apikey = {this.apikey}  key={"entertainment"} pagesize={this.pagesize} category="entertainment" country="us" />} />
                        <Route exact path='/general' element={<News setProgress = {this.setProgress} apikey = {this.apikey}  key={"general"} pagesize={this.pagesize} category="general" country="us" />} />
                        <Route exact path='/health' element={<News setProgress = {this.setProgress} apikey = {this.apikey}  key={"health"} pagesize={this.pagesize} category="health" country="us" />} />
                        <Route exact path='/science' element={<News setProgress = {this.setProgress} apikey = {this.apikey}  key={"science"} pagesize={this.pagesize} category="science" country="us" />} />
                        <Route exact path='/sports' element={<News setProgress = {this.setProgress} apikey = {this.apikey}  key={"sports"} pagesize={this.pagesize} category="sports" country="us" />} />
                        <Route exact path='/technology' element={<News setProgress = {this.setProgress} apikey = {this.apikey}  key={"technology"} pagesize={this.pagesize} category="technology" country="us" />} />
                    </Routes >
                </div >
            </BrowserRouter>
        );
    }
}
