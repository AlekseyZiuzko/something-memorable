import React from "react";
import Header from "./components/Header";
import SearchContainer from "./components/SearchContainer";
import MainContent from "./components/MainContent";

const App = () => (
    <div className="Home">
        <Header />
        <SearchContainer />
        <MainContent />
    </div>
);

export default App;
