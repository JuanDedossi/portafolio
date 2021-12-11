import { IconButton, Paper, Typography } from "@mui/material";
import React from "react";
import ReactPlayer from "react-player";
import GitHubIcon from "@mui/icons-material/GitHub";

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
    >
      <ReactPlayer
        url="https://youtu.be/M972vdnah3Y"
        width="60%"
        height="60%"
        controls
        playing={play}
      />
      <Typography variant="h6" sx={{ color: "#E7EFFF" }}>
        Desarrollo de una SPA (single page aplication) con ReactJs, Redux y CSS
        para el front-end y la utilización de NodeJs en conjunto con sequalize y
        express para el back-end. Para la base de datos utilice Postgresql
        recurriendo a una API externa llamada PokéApi para obtener la
        información. En la app se puede ver la información de todos los
        pokemones así también utilizar métodos de filtrado, de búsqueda y la
        posibilidad de crear tu pokémon
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
