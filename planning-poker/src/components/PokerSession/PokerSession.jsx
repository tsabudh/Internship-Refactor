import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { LoggedInContext, SessionContext } from "../../App";
import AddStory from "./AddStory";

const PokerSession = () => {
  const { currentUser } = useContext(LoggedInContext);
  const { currentSession, setCurrentSession } = useContext(SessionContext);
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!currentSession) {
  //     navigate("/pokersession/create");
  //   }
  // }, []);
  return "pokersession";
};

export default PokerSession;
