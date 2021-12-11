import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import Huellitas from "./huellitas_home.png";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import Huellitasinfo from "./Huellitas";
import style from "./Proyects.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import poke from "./pokeapp.png";
import Pokeapp from "./Pokeapp";
import Calc from "./Calc_purple.png";
import Calculator from "./Calculator";

export default function Proyects() {
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };
  const handleClose3 = () => {
    setOpen3(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  const handleToggle2 = () => {
    setOpen2(!open2);
  };
  const handleToggle3 = () => {
    setOpen3(!open3);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        minWidth: 300,
        width: "100%",
        margin: "10px",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography
        name="proyec"
        variant="h4"
        component="h1"
        gutterBottom
        className={style.taka}
      >
        Proyectos
      </Typography>
      <div className={style.caru}>
        <Carousel infiniteLoop autoPlay interval={3000}>
          <div>
            <img src={Huellitas} alt="huellitas" />
            <p onClick={handleToggle} className={`legend ${style.p}`}>
              <h3>
                Huellitas <br /> Click para mas info
              </h3>
            </p>
          </div>
          <div>
            <img src={poke} alt="pokeapp" />
            <p onClick={handleToggle2} className={`legend ${style.p}`}>
              <h3>
                Pokeapp <br /> Click para mas info
              </h3>
            </p>
          </div>
          <div>
            <img src={Calc} alt="Calculator" />
            <p onClick={handleToggle3} className={`legend ${style.p}`}>
              <h3>
                Calculator <br /> Click para mas info
              </h3>
            </p>
          </div>
        </Carousel>
      </div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <Huellitasinfo />
      </Backdrop>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open2}
        onClick={handleClose2}
      >
        <Pokeapp />
      </Backdrop>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open3}
        onClick={handleClose3}
      >
        <Calculator />
      </Backdrop>
    </Box>
  );
}
