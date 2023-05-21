import logo from '../assets/logo.png'
import vk from '../assets/vk.png'
import tg from '../assets/tg.png'
import yt from '../assets/youtube.png'
import email from '../assets/email.png'
import phone from '../assets/phone.png'

function Footer() {
    return ( 
        <section className="footer">
            <div className="footer-top">
                <div className="top-left">
                    <img src={logo} alt="" />
                    <div className="social">
                        <img src={vk} alt="" />
                        <img src={tg} alt="" />
                        <img src={yt} alt="" />
                    </div>
                </div>
                <div className="top-right">
                    <h2>Контакты</h2>
                    <div className="email">
                        <img src={email} alt="" />
                        <p>barbariki@gmail.com</p>
                    </div>
                    <div className="phone">
                        <img src={phone} alt="" />
                        <p>+7 800 555 35 35</p>
                    </div>
                </div>
            </div>
            <div className="line">
            </div>
            <div className="footer-bottom">
                <div className="bottom-left">
                    Copyright ⓒ Canvas Lancer, 2023. All rights reserved.
                </div>
                <div className="bottom-right">
                    <a>Website Terms</a>
                    <a>Privacy Policy</a>
                    <a>Cookies Policy</a>
                </div>
            </div>
        </section>
     );
}

export default Footer;