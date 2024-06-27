import { Route, Routes } from "react-router";
import "./App.css";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import Home from "./components/Home";
import { useEffect, useState } from "react";

const App = () => {


  const [token, setToken] = useState<object | null>(null);

  if (token) {
    sessionStorage.setItem("token", JSON.stringify(token));
  }

  useEffect(() => {
    const storedData = sessionStorage.getItem("token");
    if (storedData) {
      const data = JSON.parse(storedData);
      setToken(data);
    }
  }, []);

  return (
    <Routes>
      {token ? (
        <Route path="/home" element={<Home token={token} />} />
      ) : (
       ""
      )}

      <Route
        element={
          <div className="vertical-center">
            <Register />
          </div>
        }
        path="/register"
      />
      <Route
        element={
          <div className="vertical-center">
            <Login setToken={setToken} />
          </div>
        }
        path="/"
      />
    </Routes>
  );
};

export default App;
