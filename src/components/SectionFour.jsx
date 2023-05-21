import { useState } from "react";
import s411 from '../assets/s411.png'
import s412 from '../assets/s412.png'
import s413 from '../assets/s413.png'
import s421 from '../assets/s421.png'
import s422 from '../assets/s422.png'
import s423 from '../assets/s423.png'
import s424 from '../assets/s424.png'
import s425 from '../assets/s425.png'
import s431 from '../assets/s431.png'
import s432 from '../assets/s432.png'
import s433 from '../assets/s433.png'
import s434 from '../assets/s434.png'
import s435 from '../assets/s435.png'
import s441 from '../assets/s441.png'
import s442 from '../assets/s442.png'
import s443 from '../assets/s443.png'
import s444 from '../assets/s444.png'
import s445 from '../assets/s445.png'
import s451 from '../assets/s451.png'
import s452 from '../assets/s452.png'
import s453 from '../assets/s453.png'

function SectionFour() {
    const [picked, setPicked] = useState(1)
    return ( 
        <div className="s4">
            <div className="pre-title">
                <div className="line"></div>
                <div className="text">Портфолио</div>
                <div className="line"></div>
            </div>
            <h1><span>Наши рыботы:</span> убедитесь в качестве наших услуг</h1>
            <div className="tabs">
                <div className={picked===1?'tab active':'tab'} onClick={()=>{setPicked(1)}}>
                    Лендинги
                </div>
                <div className={picked===2?'tab active':'tab'} onClick={()=>{setPicked(2)}}>
                    Оформление соцсетей
                </div>
                <div className={picked===3?'tab active':'tab'} onClick={()=>{setPicked(3)}}>
                    Презентации
                </div>
                <div className={picked===4?'tab active':'tab'} onClick={()=>{setPicked(4)}}>
                    Печатная продукция
                </div>
                <div className={picked===5?'tab active':'tab'} onClick={()=>{setPicked(5)}}>
                    Мобильная разработка
                </div>
            </div>
            <div className="portfolio">
                {picked===1 &&
                <div className="s4-1">
                    <img src={s411} alt="" className="el"/>
                    <img src={s412} alt="" className="el"/>
                    <img src={s413} alt="" className="el"/>
                </div>
                }
                {picked===2 &&
                <div className="s4-2">
                    <div className="left">
                        <img src={s421} alt="" className="el"/>
                        <img src={s422} alt="" className="el"/>
                    </div>
                    <img src={s423} alt="" className="el"/>
                    <div className="right">
                        <img src={s424} alt="" className="el"/>
                        <img src={s425} alt="" className="el"/>
                    </div>
                </div>
                }
                {picked===3 &&
                <div className="s4-3">
                    <div className="left">
                        <img src={s431} alt="" className="el"/>
                        <img src={s432} alt="" className="el"/>
                    </div>
                    <img src={s433} alt="" className="el"/>
                    <div className="right">
                        <img src={s434} alt="" className="el"/>
                        <img src={s435} alt="" className="el"/>
                    </div>
                </div>
                }
                {picked===4 &&
                <div className="s4-4">
                    <div className="left">
                        <img src={s441} alt="" className="el"/>
                        <img src={s442} alt="" className="el"/>
                    </div>
                    <img src={s443} alt="" className="el"/>
                    <div className="right">
                        <img src={s444} alt="" className="el"/>
                        <img src={s445} alt="" className="el"/>
                    </div>
                </div>
                }
                {picked===5 &&
                <div className="s4-5">
                    <img src={s451} alt="" className="el"/>
                    <img src={s452} alt="" className="el"/>
                    <img src={s453} alt="" className="el"/>
                </div>
                }
            </div>
        </div>
     );
}

export default SectionFour;