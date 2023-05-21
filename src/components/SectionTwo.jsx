import s2 from '../assets/s2.png'
function SectionTwo() {
    return ( 
        <section className='s2'>
            <div className="main">
                <div className="pre-title">
                    <div className="line"></div>
                    <div className="text">О нас</div>
                </div>
                <h1>
                    Почему <span>нас выбирают</span>
                </h1>
                <div className="text">
                    <p>
                        Мы - креативное агентство, которое не просто создает красивые дизайны и эффективные рекламные кампании. <span>Мы создаем истории, которые заставляют людей чувствовать, думать и действовать.</span> Мы не просто продаем товары и услуги, <span>мы создаем эмоциональные связи между брендами и их клиентами.</span> Мы не просто работаем с клиентами, мы становимся их партнерами и помогаем им достигать своих целей.
                    </p>
                    <p>
                        Мы - команда профессионалов, которые любят свою работу и готовы воплотить в жизнь любые идеи. Именно поэтому нас выбирают.
                    </p>
                </div>
            </div>
            <div className="img">
                <img src={s2}/>
            </div>
        </section>
     );
}

export default SectionTwo;