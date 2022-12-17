import { Route, Routes } from "react-router-dom";
import LayoutWebsite from "./layouts/LayoutWebsite";

function App() {
    return <div className="App">
        <Routes>
            <Route path="" element={<LayoutWebsite />}></Route>
        </Routes>
    </div>;
}

export default App;
