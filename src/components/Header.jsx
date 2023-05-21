import logo from '../assets/logo.png'
function Header() {
    return (
    <div className="header">
        <div className="logo">
            <img src={logo}></img>
        </div>
        <div className="nav">
            <a href='#about'>О нас</a>
            <a  href='#services'>Услуги</a>
            <a  href='#portfolio'>Портфолио</a>
            <a  href='#contacts'>Контакты</a>
        </div>
        <a href="#follow">
            <button className='btn'>
                Оставить заявку
            </button>
        </a>
    </div> );
}

export default Header;