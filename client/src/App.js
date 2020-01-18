import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";


const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <Router>
      <div>
        <SavedList list={savedList} />
        
        <Route path="/"  component={MovieList}/>
        <Route path="/movies/{id}" component={MovieList} />
      </div>
    </Router>
  );
};

export default App;
