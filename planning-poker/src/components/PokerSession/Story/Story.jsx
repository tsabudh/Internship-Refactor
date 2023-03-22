import { useState } from "react";

import "./Story.scss";

const updateStory = (id, title, description) => {
  console.log("updatestory");
  console.log(id, title, description);

  let formData = new FormData();
  formData.append("id", id);
  formData.append("title", title);
  formData.append("description", description);

  const httpRequest = new XMLHttpRequest();

  httpRequest.onreadystatechange = () => {
    if (httpRequest.readyState == httpRequest.DONE) {
      console.log(httpRequest.responseText);
      if (httpRequest.responseText == "success")
        document.getElementById(`${id}-notify-success`).innerHTML = "updated";
      else document.getElementById(`${id}-notify-success`).innerHTML = "failed";
    }
  };
  httpRequest.open("POST", `http://localhost/controller/updateStory.php`);
  httpRequest.send(formData);
};

const Story = ({ initialStory }) => {
  const [story, setStory] = useState(initialStory);

  const handleChange = (e) => {
    let newStory = { ...story };

    document.getElementById(`${newStory.id}-notify-success`).innerHTML =
      "changed";

    e.target.classList.add("input-changed");
    if (e.target.id == "storyTitle") newStory.title = e.target.value;
    else if (e.target.id == "storyDescription")
      newStory.description = e.target.value;

    setStory(newStory);
  };

  return (
    <>
      <td>{story.id}</td>
      <td>
        <input
          type="text"
          id="storyTitle"
          value={story.title}
          onChange={handleChange}
        />
      </td>
      <td>
        <input
          type="text"
          id="storyDescription"
          value={story.description}
          onChange={handleChange}
        />
      </td>
      <td>{story.points}</td>
      <td>
        <button
          onClick={() => updateStory(story.id, story.title, story.description)}
        >
          Update
        </button>
      </td>
      <td id={`${story.id}-notify-success`}></td>
    </>
  );
};

export default Story;
