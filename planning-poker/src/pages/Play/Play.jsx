import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { LoggedInContext, SessionContext } from "../../App";

const Play = () => {
  const { currentSession } = useContext(SessionContext);
  const { currentUser } = useContext(LoggedInContext);
  const navigate = useNavigate();
  const params = useParams();
  const sessionCode = params.sessionCode;

  console.log(currentSession);
  if (!currentSession) navigate(`/pokersession/${sessionCode}`);
  return (
    <main className="poker-session-play">
      <section className="section section-stories">Stories </section>
      <section className="section section-members">Members </section>
      <section className="section section-vote">Votes </section>
    </main>
  );
};

export default Play;
