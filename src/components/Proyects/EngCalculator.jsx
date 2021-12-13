import { IconButton, Paper, Typography } from "@mui/material";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import WebIcon from "@mui/icons-material/Web";
import Calc2 from "./Calc_blue.png";
import style from "./Calculator.module.css";

export default function Calculator({ open }) {
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
      <div
        style={{
          height: "80%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={Calc2} alt="Calculator" className={style.img} />
      </div>
      <Typography variant="h6" sx={{ color: "#E7EFFF" }}>
        Calculator made with react and js, with a twist to have three variants
        just by changing a button
      </Typography>
      <div style={{ display: "flex", alignItems: "center" }}>
        <IconButton
          onClick={() => openLink("https://github.com/JuanDedossi/Calculadora")}
          aria-label="Github"
        >
          <GitHubIcon sx={{ fill: "#E7EFFF" }} />
        </IconButton>
        <IconButton
          onClick={() => openLink("https://calculator-jd.vercel.app")}
          aria-label="Deploy"
        >
          <WebIcon sx={{ fill: "#E7EFFF" }} />
        </IconButton>
      </div>
    </Paper>
  );
}
