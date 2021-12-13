import { IconButton, Paper, Typography } from "@mui/material";
import React from "react";
import ReactPlayer from "react-player";
import GitHubIcon from "@mui/icons-material/GitHub";
import WebIcon from "@mui/icons-material/Web";
import style from './Huellitas.module.css';

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
        Web App estilo red social donde se pueden publicar animales en adopción,
        perdidos o encontrados, con el objetivo de unificar los anuncios de
        mascotas en un mismo lugar.
        <br />
        El desarrollo consto de un equipo de 8 personas utilizando la
        metodologia SCRUM
        <br />
        Desarrollada con Typescript, React.js, Redux y material UI para el
        FrontEnd.
        <br />
        NodeJs. javascript, Mongooze, WebSockets, Passport, JWT y nodemail en el
        BackEnd.
        <br />
        Para base de datos usamos MongoDB.
      </Typography>
      <br />
      <div style={{display:'flex',alignItems:'center'}}>
      <IconButton
        onClick={() => openLink("https://github.com/JuanDedossi/huellitas-pg")}
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
