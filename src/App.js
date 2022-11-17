import "./App.css";
import Chat from "./components/Chat/Chat";
import Sidebar from "./components/Sidebar/Sidebar.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import { useStateValue } from "./StateProvider";
import Nochat from "./components/Sidebar/Nochat.js/Nochat";

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="app">
      {!user ? (
        <>
          <Login />
        </>
      ) : (
        <div className="app__body">
          <Router>
            <Sidebar />
            <Routes>
              <Route exact path="/" element={<Nochat/>} />
              <Route exact path="/rooms/:roomId" element={<Chat />} />
            </Routes>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
