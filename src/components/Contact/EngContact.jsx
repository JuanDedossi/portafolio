import { Button, Typography } from '@mui/material';
import style from './Contact.module.css';

export default function Contact(){
    return(
        <div className={style.div}>
            <Typography name='contact' variant="h4" component="h1" gutterBottom className={style.taka}>Contact</Typography>
            <div className={style.cont}>
        <form className={style.form} action="https://formsubmit.co/juandedossi@yahoo.com" method="POST">
            <label>Name</label>
            <input type="text" name="name" required />
            <label>Email</label>
            <input type="email" name="email" required />
            <label>Subject</label>
            <input type="text" name="subject" required />   
            <label>Message</label>
            <textarea className={style.text} name="message" required></textarea>
            <Button type='submit' variant="contained">Enviar</Button>
            {/* <button type="submit">Send</button> */}
        </form>
        <div className={style.redes}>
            <a href="mailto:juandedossi@yahoo.com" target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/color/48/000000/new-post.png" alt="Email"/>
                juandedossi@yahoo.com
            </a>
            <a href="https://www.linkedin.com/in/juan-guillermo-dedossi-fullstack/" target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="linkedin"/>
                Linkedin
            </a>
            <a href="https://github.com/JuanDedossi" target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/color/48/000000/github.png" alt="linkedin"/>
                Github
            </a>
        </div>
            </div>
        </div>
    )
}