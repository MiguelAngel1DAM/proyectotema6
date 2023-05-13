import "./Header.css";
import RSS from "../../services/rssData.xml";

function Header() {
  return (
    <>
    <img className="Logo" src="\assets\img\icon-harman.png" alt="Logo" />
      <ul className="headerUl">
        <li><ion-icon name="logo-rss"></ion-icon><a href={RSS} target="_blank">RSS</a></li>
        <li><a href="/Home">Home</a></li>
        <li><a href="/contact">Contacto</a></li> 
        <li><a href="/Map">Mapa</a></li>
        <li><a href="/ClientData">Datos</a></li>
      </ul>            
    </>
  );
}

export default Header;