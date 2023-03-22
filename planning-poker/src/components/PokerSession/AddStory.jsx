import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { SessionContext } from "../../App";

import { checkSessionExist,getAllStories } from "./sessionControllers";

const AddStory = ({ storiesArray, setStoriesArray }) => {
  const navigate = useNavigate();
  const params = useParams();
  const { currentSession, setCurrentSession } = useContext(SessionContext);
  // console.log(params.sessionCode);
  const sessionCode = params.sessionCode;

  // useEffect(() => {
  //   setCurrentSession(currentSession);
  // }, [currentSession]);

  // useEffect(() => {
  //   checkSessionExist(sessionCode, navigate);
  // }, []);
  console.log(currentSession);

  const addStory = (e) => {
    e.preventDefault();
    let storyForm = document.getElementById("form-story");
    let formData = new FormData(storyForm);
    formData.append("sessionId", currentSession.id);
    let httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = () => {
      if (httpRequest.readyState == httpRequest.DONE) {
        console.log(httpRequest.responseText);
        // setStoriesArray(httpRequest.responseText)
        if (httpRequest.responseText == "success") {
          getAllStories({ storiesArray, setStoriesArray, currentSession });
        } else {
          console.log("error adding story");
        }
      }
    };
    httpRequest.open("POST", "http://localhost/controller/createStory.php");
    httpRequest.send(formData);
  };

  return (
    <div>
      <form onSubmit={addStory} id="form-story">
        <div>
          <label htmlFor="">Title</label>
          <input type="text" name="title" />
          <label htmlFor="">Description</label>
          <input type="text" name="description" />
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
};

export default AddStory;
