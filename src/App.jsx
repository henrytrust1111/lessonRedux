import {HashRouter, Routes, Route} from "react-router-dom";
import Login from "./Components/Login"
import Home from "./Components/Home";
import Signin from "./Components/Signin";

const App = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/Signin" element={<Signin />} />
            </Routes>
        </HashRouter>
    );
};

export default App;
