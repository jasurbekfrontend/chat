import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Password from "./components/Password";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Password />} />
        <Route path="/macbook" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
