import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import * as Di  from 'react-icons/di'
import * as Si  from 'react-icons/si'
import { IconContext } from "react-icons";
import style from './Technologies.module.css';
import { Typography } from '@mui/material';


export default function ResponsiveGrid() {
    var Icon;
    const icons =['DiReact','DiJavascript1','DiCss3','DiHtml5','DiBootstrap','DiGit','DiGithubBadge','DiHeroku','DiMongodb','DiNodejs','DiNpm','DiPostgresql','DiVisualstudio','SiMaterialui','SiTypescript','SiVercel']
    return (
    <IconContext.Provider  value={{className:'icons',size:'50%', color:'#374366'}}>
    <Box className={style.icons} name='tecno' id='tecno' sx={{ flexGrow: 1 }}>
        <Typography variant="h4" component="h1" gutterBottom className={style.taka}>
            Tecnologías
        </Typography>
      <Grid container spacing={{ xs: 2, md: 3 }} rowSpacing={2} columns={{ xs: 4, sm: 8, md: 10 }}>
        {icons.map((icon, index) => { 
            if(icon.slice(0,2) === 'Si'){
                 Icon = Si[icon];
            }
            else{
                 Icon = Di[icon];
            }
            return (
            <Grid item xs={1} sm={2} md={2} key={index} className='grid'>
              <div className={style.Grid}>
              <Icon/>
              <Typography variant="h6" component="h2" className={style.text}>
                {icon.slice(2).includes('Javascript') ? 'JavaScript' : icon.slice(2).includes('Github') ? 'Github' : icon.slice(2).includes('Material') ? 'Material UI':icon.slice(2)}
                </Typography>
              </div>
          </Grid>
        )})}
      </Grid>
    </Box>
    </IconContext.Provider>
  );
}