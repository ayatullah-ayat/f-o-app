import { Fragment } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

import './App.css';


function App() {
  return (
    <Fragment>
      <Header />
      <Meals />
    </Fragment>
  );
}

export default App;
            
