import { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard/Dashboard";
import PokerSession from "./components/PokerSession/PokerSession";
import ViewSession from "./pages/ViewSession/ViewSession";

export const LoggedInContext = createContext();
export const SessionContext = createContext();

import "./App.scss";
import Login from "./pages/Login/Login";
import ProtectedRoutes from "./components/ProtectedRoutes/ProtectedRoutes";

import CreateSession from "./components/PokerSession/CreateSession";
import AddStory from "./components/PokerSession/AddStory";
import Play from "./pages/Play/Play";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState();
  const [currentUser, setCurrentUser] = useState();
  const [currentSession, setCurrentSession] = useState();

  return (
    <BrowserRouter>
      <LoggedInContext.Provider
        value={{ isLoggedIn, setIsLoggedIn, currentUser, setCurrentUser }}
      >
        <SessionContext.Provider value={{ currentSession, setCurrentSession }}>
          <Routes>
            <Route element={<ProtectedRoutes />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="pokersession">
                <Route index={true} element={<PokerSession />} />
                <Route path=":sessionCode" element={<ViewSession />} />
                <Route path=":sessionCode/play" element={<Play />} />
                <Route path="create" element={<CreateSession />} />
              </Route>
            </Route>
            <Route path="/login" element={<Login />} />
            {/* <Route path="*" element={<PageNotFound />} /> */}
          </Routes>
        </SessionContext.Provider>
      </LoggedInContext.Provider>
    </BrowserRouter>
  );
}

export default App;
