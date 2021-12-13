import { IconButton, Paper, Typography } from "@mui/material";
import React from "react";
import ReactPlayer from "react-player";
import GitHubIcon from "@mui/icons-material/GitHub";
import WebIcon from "@mui/icons-material/Web";
import style from "./Huellitas.module.css";

export default function Huellitas({ open }) {
  const [play, setPlay] = React.useState(false);
  React.useEffect(() => {
    setPlay(false);
  }, [open]);
  const openLink = (link) => {
    window.open(link, "_blank");
  };
  return (
    <Paper
      elevation={5}
      style={{
        borderRadius: "100px",
        width: "90vw",
        height: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#374366",
      }}
      className={style.paper}
    >
      <ReactPlayer
        url="https://www.youtube.com/watch?v=VXivMZ0iOYU"
        width="70vw"
        height="60%"
        controls
        playing={play}
      />
      <Typography variant="h6" sx={{ color: "#E7EFFF" }} className={style.text}>
        Social network style Web App where you can post animals for adoption or
        lost or found, with the objective of unifying the advertisements of pets
        in one place.
        <br />
        The development consisted of a team of 8 people using the SCRUM
        methodology
        <br />
        development with Typescript, React.js, Redux y material UI for the
        FrontEnd.
        <br />
        NodeJs. javascript, Mongooze, WebSockets, Passport, JWT y nodemail for
        the BackEnd.
        <br />
        and as a MongoDB database.
      </Typography>
      <br />
      <div style={{ display: "flex", alignItems: "center" }}>
        <IconButton
          onClick={() =>
            openLink("https://github.com/JuanDedossi/huellitas-pg")
          }
          aria-label="Github"
        >
          <GitHubIcon sx={{ fill: "#E7EFFF" }} />
        </IconButton>
        <IconButton
          onClick={() => openLink("https://huellitas.vercel.app/home")}
          aria-label="Deploy"
        >
          <WebIcon sx={{ fill: "#E7EFFF" }} />
        </IconButton>
      </div>
    </Paper>
  );
}
