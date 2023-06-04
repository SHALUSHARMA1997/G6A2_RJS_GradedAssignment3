import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/home/home";
import MovieList from "./components/movieList/movieList";
import Movie from "./pages/movieDetail/movie";



function App() {
    return(
        <div className="App">
            <Router>
            <Header/>
                <Routes>
                    <Route index element = {<Home />}></Route>
                    <Route path="movie/:id" element={<Movie/>}></Route>
                    <Route path="movies/:type" element={<MovieList/>}></Route>
                    <Route path="/*" element={<h1>Error page</h1>}></Route>
                </Routes>
            </Router>
        </div>
        
    );
}

export default App;