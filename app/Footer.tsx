
const Footer = () => {
    
    const currentYear = new Date().getFullYear();

    return (
        <footer id="footer">
            <ul className="footer-copyright">
                <li>&copy; {currentYear} <a href="https://www.jaesmadeit.com/" target="_blank" rel="noopener noreferrer">JAES Made It</a></li>
                <li>Made with <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">NextJS</a> + <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer"> TMDB</a> + <a href="https://github.com/jhonnierandrey/tmdb-nxt" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a href="http://jhonnierandrey.info/" target="_blank" rel="noopener noreferrer">See more</a></li>
                <li><a href="https://www.buymeacoffee.com/jhonnierandrey" target="_blank" rel="noopener noreferrer">BuyMeACoffee <i className="bi bi-arrow-up-right-circle-fill"></i></a></li>
            </ul>
        </footer>
    );
}
 
export default Footer;