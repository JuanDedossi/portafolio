import { Button, Paper, Typography } from "@mui/material";
import style from "./sobre.module.css";
import CV from "./Juandedossi_CV.pdf";
import coding from "./coding.gif";

export default function Sobre() {
  return (
    <div
      name="sobre"
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        variant="elevation"
        square={false}
        elevation={8}
        className={style.paper}
      >
        <img className={style.img} src={coding} alt="conding" />
        <Typography
          sx={{ userSelect: "none" }}
          variant="h6"
          className={style.typo}
        >
          I'm Juan Dedossi a lover of technology and passionate about
          programming.
          <br />
          I am a person with a great facility for learning and a fondness for
          logic.
          <br />
          I love challenging myself and learning new technologies. I like
          working in a team and learning from others.
          <br />
          I am a Full Stack Web Developer specialized in React for the front and
          NodeJS for the back.
          <br />I don't give up easily and I always get what I set out to do.
        </Typography>
        <Button sx={{ margin: "10px" }} variant="contained" href={CV} download>
          Download CV
        </Button>
      </Paper>
    </div>
  );
}
