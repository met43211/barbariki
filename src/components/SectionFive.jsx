import s51 from '../assets/s51.png'
import s52 from '../assets/s52.png'
import s53 from '../assets/s53.png'
import stars from '../assets/stars.png'

function SectionFive() {
    return ( 
        <div className="s5">
            <div className="pre-title">
                <div className="line"></div>
                <div className="text">Отзывы клиентов</div>
            </div>
            <h1>Что говорят клиенты о нашей работе?</h1>
            <div className="s5-main">
                <div className="s5-card">
                    <div className="img">
                        <img src={s51}/>
                    </div>
                    <h2>Ирина Малараева</h2>
                    <img src={stars} alt="" />
                    <p>Оперативно взялись за работу, все структурировали, быстро нашли решение. Очень положительный опыт, обязательно  будем обращаться к Вам!</p>
                </div>
                <div className="s5-card">
                    <div className="img">
                        <img src={s52}/>
                    </div>
                    <h2>Максим Чмеренко</h2>
                    <img src={stars} alt="" />
                    <p>Работа выполнена отлично и очень быстро (что крайне редко встречается в наши дни) все пожелания были учтены. Работой остался доволен!</p>
                </div>
                <div className="s5-card">
                    <div className="img">
                        <img src={s53}/>
                    </div>
                    <h2>Максим Говорушкин</h2>
                    <img src={stars} alt="" />
                    <p>Отрисовывали макет для страницы на сайт. Работа выполнена качественно и оперативно. Виктория учла все наши пожелания, работой остались довольны!</p>
                </div>
            </div>
        </div>
     );
}

export default SectionFive;