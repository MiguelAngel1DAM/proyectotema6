import "./Header.css";

function Header() {
  return (
    <>
    <img className="Logo" src="\assets\img\icon-harman.png" alt="Logo" />
      <ul className="headerUl">
        <li><a href="/Home">Home</a></li>
        <li><a href="/contact">Contacto</a></li> 
        <li><a href="/Map">Mapa</a></li>
        <li><a href="/ClientData">Datos</a></li>
      </ul>            
    </>
  );
}

export default Header;