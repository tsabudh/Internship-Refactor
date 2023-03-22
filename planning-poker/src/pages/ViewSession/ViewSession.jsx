import { useState, useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { SessionContext } from "../../App";

import AddStory from "../../components/PokerSession/AddStory";

import { checkSessionExist, getAllStories } from "../../components/PokerSession/sessionControllers";
import Story from "../../components/PokerSession/Story/Story";



const ViewSession = () => {
  const [storiesArray, setStoriesArray] = useState();
  const { currentSession, setCurrentSession } = useContext(SessionContext);
  const navigate = useNavigate();
  const params = useParams();
  const sessionCode = params.sessionCode;
  // checkSessionExist()

  // console.log(setCurrentSession);

  useEffect(() => {
    checkSessionExist(sessionCode, navigate, setCurrentSession);
  }, []);

  console.log(currentSession);

  useEffect(() => {
    if (currentSession)
      getAllStories({ storiesArray, setStoriesArray, currentSession });
  }, [currentSession]);

  const startSession = () => {
    if (currentSession) {
      let newSession = { ...currentSession };
      newSession.ongoing = '1';
      setCurrentSession(newSession);
      navigate(`/pokersession/${currentSession.code}/play`);
    }
  };

  return (
    <section>
      <div>
        {
          <AddStory
            storiesArray={storiesArray}
            setStoriesArray={setStoriesArray}
          />
        }
      </div>

      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>Points</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {storiesArray &&
              storiesArray.map((story, index) => {
                return (
                  <tr>
                    <Story initialStory={story} key={index}/>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>

      <div className="">
        <button onClick={startSession}>Start Poker Session</button>
      </div>
    </section>
  );
};

export default ViewSession;
