import React from "react";
import Main from "./Components/Main";
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";
import { useAppContext } from "./context";

function App() {
    const { isSideBarShowing } = useAppContext();

    return (
        <div>
            {isSideBarShowing && <SideBar />} 
            <Header />
            <Main />
        </div>
    );
}

export default App;
