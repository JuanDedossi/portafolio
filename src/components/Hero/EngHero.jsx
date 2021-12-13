import React from "react";
import Foto from "./Foto_cara_mos.png";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import style from "./Hero.module.css";
import Textra from "react-textra";

export function Hero() {
  const data = [
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
  ];
  return (
    <Box name="hero" className={style.Box}>
      <img
        style={{ height: "30vh", borderRadius: "10000px",border: "1px solid black" }}
        src={Foto}
        alt="Foto Perfil"
      />
      <div>
        <Typography variant='h3'>
          Welcome to my portfolio
          </Typography>
        <Typography className={style.taka} variant="h4" ml="20px">
          I'm Juan Guillermo Dedossi 👋🏻
        </Typography>
        <Typography variant="h5" ml="10px">
        <Textra effect="scale" data={data} stopDuration={8000}  className={style.textra}/>
        </Typography>
      </div>
    </Box>
  );
}
