import React from "react";
import Compliance from "../images/svg/federal.svg";
import Financial from "../images/svg/aid.svg";
import Team from "../images/svg/team.svg";
import Chat from "../images/svg/chat.svg";

const Svgs = ({ name }) => {
  return (
    <>
      {name === "compliance" && <Compliance className="header-visual" />}
      {name === "financial" && <Financial className="header-visual" />}
      {name === "team" && <Team className="header-visual" />}
      {name === "chat" && <Chat className="header-visual" />}
    </>
  );
};

export default Svgs;
