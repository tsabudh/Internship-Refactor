export const checkSessionExist = (sessionCode, navigate, setCurrentSession) => {
  return new Promise((resolve, reject) => {
    const httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = () => {
      if (httpRequest.readyState == httpRequest.DONE) {
        //handle response
        console.log(httpRequest.responseText);
        setCurrentSession(() => JSON.parse(httpRequest.responseText));
        resolve(JSON.parse(httpRequest.responseText));
      }
    };
    httpRequest.open(
      "GET",
      `http://localhost/controller/getSessions.php?sessionCode=${sessionCode}`
    );
    httpRequest.send();
  });
};


export const getAllStories = ({
  storiesArray,
  setStoriesArray,
  currentSession,
}) => {
  console.log("getAllStories");
  const httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = () => {
    if (httpRequest.readyState == httpRequest.DONE) {
      // console.log(storiesArray);
      console.log(JSON.parse(httpRequest.responseText));
      setStoriesArray(JSON.parse(httpRequest.responseText));
    }
  };

  httpRequest.open(
    "GET",
    `http://localhost/controller/getStories.php?sessionId=${currentSession.id}`
  );
  httpRequest.send();
};