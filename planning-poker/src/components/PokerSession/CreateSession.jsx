import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { LoggedInContext, SessionContext } from "../../App";

const postCreateSession = ({ e, currentUser,currentSession, setCurrentSession, navigate }) => {
  e.preventDefault();

  const sessionForm = document.getElementById("form-session");

  const formData = new FormData(sessionForm);
  formData.append("currentUser", currentUser.id);

  const httpRequest = new XMLHttpRequest();

  httpRequest.onreadystatechange = () => {
    if (httpRequest.readyState == httpRequest.DONE) {
      //do something after request is sent
      if (httpRequest.responseText) {
        setCurrentSession(JSON.parse(httpRequest.responseText));
        navigate(`/pokersession/${JSON.parse(httpRequest.responseText).code}`);
        // console.log(currentSession);
      }
    } else {
    }
  };

  httpRequest.open("POST", "http://localhost/controller/createSession.php");

  // httpRequest.setRequestHeader("content-type", "application/json");
  httpRequest.send(formData);
};

const CreateSession = ({}) => {
  const { currentUser } = useContext(LoggedInContext);
  const { setCurrentSession, currentSession } = useContext(SessionContext);
  const navigate = useNavigate();
  // useEffect(() => {
  //   currentUser = currentUser;
  // }, [currentUser]);
  const handleSubmit = (e) => {
    postCreateSession({ e, currentUser, currentSession, setCurrentSession, navigate });
  };

  return (
    <section>
      <div>
        <h4>Create a session for planning poker.</h4>
        <div className="session-form-container">
          <form
            onSubmit={handleSubmit}
            className="session-form"
            id="form-session"
          >
            <div className="form__group">
              <label htmlFor="sessionName" className="form__label">
                Session Name
              </label>
              <input
                className="form__input"
                type="text"
                id="sessionName"
                placeholder="Name your session"
                name="sessionName"
              />
            </div>
            <button type="submit" className="btn btn--white">
              Create Session
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CreateSession;
