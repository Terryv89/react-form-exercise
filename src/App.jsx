import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Registration from "./pages/Registration";
import Account from "./pages/Account";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(email);
  console.log(password);

  const newUser = {
    name: name,
    email: email,
    password: password,
  };

  console.log(newUser);
  console.log(name);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Registration
              setName={setName}
              setEmail={setEmail}
              setPassword={setPassword}
            />
          }
        />
        <Route
          path="/account"
          element={
            <Account
              setName={setName}
              setEmail={setEmail}
              setPassword={setPassword}
              name={name}
              email={email}
              password={password}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
