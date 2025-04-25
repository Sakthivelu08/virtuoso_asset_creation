import React from "react";
import { Route, Routes } from "react-router-dom";
import MainContainer from "./containers/main";

function App() {
    return (
        <Routes>
            <Route
                path="/"
                element={<MainContainer />}
            />
        </Routes>
    );
}

export default App;