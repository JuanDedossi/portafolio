import { IconButton, Paper, Typography } from "@mui/material";
import React from "react";
import ReactPlayer from "react-player";
import GitHubIcon from "@mui/icons-material/GitHub";
import style from "./Pokeapp.module.css";

export default function Pokeapp({ open }) {
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
        url="https://youtu.be/M972vdnah3Y"
        width="70vw"
        height="60%"
        controls
        playing={play}
      />
      <Typography variant="h6" sx={{ color: "#E7EFFF" }} className={style.text}>
        Development of a SPA (single page application) with ReactJs, Redux and
        CSS for the front-end, the use of NodeJs in conjunction with sequalize
        and express for the backend and for the database use Postgresql.
        resorting to an external API called PokéApi to obtain the information.In
        the app you can see the information of all the pokemons as well use
        filtering, search and possibility to create your pokémon
      </Typography>
      <IconButton
        onClick={() =>
          openLink("https://github.com/JuanDedossi/PI-Pokemon-main")
        }
        aria-label="Github"
      >
        <GitHubIcon sx={{ fill: "#E7EFFF" }} />
      </IconButton>
    </Paper>
  );
}
