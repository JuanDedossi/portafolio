import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Foto from '../Hero/Foto_cara_mos.png'
import style from './Navbar.module.css'
import IconButton from '@mui/material/IconButton';
import Typography from "@mui/material/Typography";
import Stack from '@mui/material/Stack';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MenuIcon from '@mui/icons-material/Menu';
import EmailIcon from '@mui/icons-material/Email';
import { scroller } from 'react-scroll';

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });

  const scrollType = {
    duration: 500,
    delay: 50,
    smooth: true, // linear “easeInQuint” “easeOutCubic” 
    offset: -10,
 };

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const openLink = (link) => {
    window.open(link, '_blank')
  }

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className={style.div}
      >
      <div>
       <img
        style={{ height: "160px", borderRadius: "10000px",border: "1px solid black" }}
        src={Foto}
        alt="Foto Perfil"
      />
       <Typography className={style.taka} variant="h6" >
         Juan Guillermo Dedossi
        </Typography>
        </div>
      <Stack spacing={2} direction="column">
      <Button onClick={() => scroller.scrollTo('hero', scrollType)} variant="contained">Welcome</Button>
      <Button onClick={() => scroller.scrollTo('sobre', scrollType)} variant="contained">About me</Button>
      <Button onClick={() => scroller.scrollTo('tecno', scrollType)} variant="contained">Techgnologies</Button>
      <Button onClick={() => scroller.scrollTo('proyec', scrollType)} variant="contained">Projects</Button>
      <Button onClick={() => scroller.scrollTo('contact', scrollType)} variant="contained">Contact</Button>
    </Stack>
    <Stack spacing={2} direction="row">
    <IconButton onClick={() => openLink('https://github.com/JuanDedossi')} aria-label="Github">
      <GitHubIcon sx={{fill:'#E7EFFF'}} />
    </IconButton>
    <IconButton onClick={() => openLink('http://www.linkedin.com/in/juan-guillermo-dedossi-fullstack/')} aria-label="Linkedin">
      <LinkedInIcon sx={{fill:'#E7EFFF'}} />
    </IconButton>
    <IconButton href='mailto:juandedossi@yahoo.com' aria-label="Linkedin">
      <EmailIcon sx={{fill:'#E7EFFF'}} />
    </IconButton>
      </Stack>
    </Box>
  );

  return (
    <div>
        <React.Fragment key={'left'}>
          <Button className={style.button} onClick={toggleDrawer('left', true)}><MenuIcon/> Menu</Button>
          <Drawer
            anchor={'left'}
            open={state['left']}
            onClose={toggleDrawer('left', false)}
          >
            {list('left')}
          </Drawer>
        </React.Fragment>
    </div>
  );
}