import { Button, Paper, Typography } from "@mui/material";
import style from './sobre.module.css';
import CV from "./Juandedossi_CV.pdf";
import coding from "./coding.gif";


export default function Sobre() {
    return(
        <div name='sobre' style={{height:'100vh',width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
        <Paper variant="elevation" square={false} elevation={8} className={style.paper}>
            <img style={{height:'30vh',userSelect:'none'}} src={coding} alt='conding'/>
            <Typography sx={{userSelect:'none'}} variant='h6' className={style.typo}>
            Soy Juan Dedossi un amante de la tecnología y apasionado por la programación. 
            <br/>
            Soy una persona con gran facilidad para el aprendizaje y una afición por la lógica. 
            <br/>
            Me encanta desafiarme, aprender nuevas tecnologías, me gusta trabajar en equipo y aprender de los demás.
            <br/>
            Soy Full Stack Developer especializado en React para el front y NodeJS para el back.
            <br/>
            No me rindo con facilidad y siempre consigo lo que me propongo.
            </Typography>
            <Button sx={{margin:'10px'}} variant="contained" href={CV} download>Descarga CV</Button>
        </Paper>
        </div>
    )
}