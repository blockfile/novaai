import "./App.css";
import { useRoutes } from "react-router-dom";
import Main from "../src/pages/main/main";

function App() {
    let element = useRoutes([
        {
            path: "/",
            element: <Main />,
        },
    ]);
    return <div className="App"> {element}</div>;
}

export default App;
