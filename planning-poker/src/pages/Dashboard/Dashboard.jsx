import { useState, useContext, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { LoggedInContext } from "../../App";

const CreateStories = ({ currentSession, setCurrentSession }) => {
  return (
    <section>
      <h4>Session:{currentSession.name}</h4>
      <form id="form-stories">
        <div className="input__group">
          <label htmlFor="storyName">Story Name</label>
          <input type="text" name="storyName" id="storyName" />
        </div>
        <div className="input__group">
          <label htmlFor="storyDescription"> Story Description</label>
          <input type="text" name="storyDescription" id="storyDescription" />
        </div>

        <button type="submit">Create Story</button>
      </form>
    </section>
  );
};

const Dashboard = () => {
  const { isLoggedIn, setIsLoggedIn, currentUser, setCurrentUser } =
    useContext(LoggedInContext);
  const [sessionArray, setSessionArray] = useState([]);
  return (
    <section>
      <h4>Welcome to Planning Poker</h4>
      <NavLink to="/pokersession/create">
        <button className="btn btn-green">Start New Session</button>
      </NavLink>

      <button
        className="btn btn-green"
        onClick={() => {
          fetchSessions(currentUser, setSessionArray);
        }}
      >
        View Poker Planning History
      </button>

      <div className="session-container">
        {<SessionTable sessionArray={sessionArray} />}
      </div>
    </section>
  );
};

export default Dashboard;

const fetchSessions = (currentUser, setSessionArray) => {
  const httpRequest = new XMLHttpRequest();

  httpRequest.onreadystatechange = () => {
    if (httpRequest.readyState == httpRequest.DONE) {
      // console.log((httpRequest.responseText));
      console.log(httpRequest.responseText);
      setSessionArray(JSON.parse(httpRequest.responseText));
    }
  };
  //return array after response has been received succesfully
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    // Everything is good, the response was received.
    console.log(httpRequest.responseText);
  } else {
    // Not ready yet.
  }

  httpRequest.open(
    "GET",
    `http://localhost/controller/getSessions.php?id=${currentUser.id}`
  );
  httpRequest.send();
};

const SessionTable = ({ sessionArray }) => {
  const navigate = useNavigate();

  console.log(sessionArray);
  if (sessionArray.length == 0) return;
  // let Sessions = [];

  sessionArray.map((session, index) => {
    console.log(session);
  });

  return (
    <div>
      <h4>Session History</h4>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Code</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {sessionArray.map((session, index) => {
            return (
              <tr>
                <td>{session.name}</td>
                <td>{session.code}</td>
                <td>
                  <button
                    onClick={() => {
                      navigate(`/pokersession/${session.code}`);
                    }}
                  >
                    Open
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
