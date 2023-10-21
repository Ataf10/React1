import React from 'react';
import "../styles/footer.scss";
import { AiFillYoutube,AiFillInstagram,AiFillGithub} from 'react-icons/ai';
const Footer = () => {
  return <footer>
    <div>
        <h1>Ataf Ali</h1>
        <p>@all rights reserved.</p>
    </div>

    <div>
        <h5>Follow Us</h5>
        <div>
            <a href="https://youtube.com" target={"blank"}><AiFillYoutube /> YouTube</a>
            <a href="https://instagram.com/i_ataf_ali" target={"blank"}><AiFillInstagram /> Instagram</a>
            <a href="https://github.com/Ataf10" target={"blank"}><AiFillGithub /> GitHub</a>
        </div>
    </div>
  </footer>
}

export default Footer
