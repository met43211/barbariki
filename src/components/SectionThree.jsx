import s31 from '../assets/s31.png'
import s32 from '../assets/s32.png'
import s33 from '../assets/s33.png'
import s34 from '../assets/s34.png'

function SectionThree() {
    return ( 
        <section className='s3'>
        <div className="main">
            <div className="pre-title">
                <div className="line"></div>
                <div className="text">Наши услуги</div>
            </div>
            <h1>
            Мы предлагаем:
            </h1>
            <div className="text">
                <p>
                Мы предлагаем широкий спектр услуг, которые помогут вам достичь успеха в вашем бизнесе. Наша команда экспертов готова помочь вам в создании уникального бренда, разработке контента и многом другом.  Мы учитываем все ваши пожелания и требования, чтобы результат превзошел ваши ожидания.
                </p>
                <button href='#follow' className='btn'>Оставить заявку</button>
            </div>
        </div>
        <div className="side">
            <div className="info-card">
                <div className="img">
                    <img src={s31}/>
                </div>
                <h2>UI/UX</h2>
                <p>Наша команда профессионалов в области UI/UX разработки готова помочь вам создать продукт, который будет привлекать внимание и удерживать пользователей. </p>
            </div>
            <div className="info-card">
                <div className="img">
                    <img src={s32}/>
                </div>
                <h2>Дизайн</h2>
                <p>Наша команда создаст для вас уникальный и запоминающийся бренд, логотип, упаковку, рекламный материал и любой другой элемент дизайна. </p>
            </div>
            <div className="info-card">
                <div className="img">
                    <img src={s33}/>
                </div>
                <h2>Оформление соцсетей</h2>
                <p>Мы предлагаем услуги по созданию уникального дизайна для ваших страниц в социальных сетях, который будет соответствовать вашему стилю и целям.</p>
            </div>
            <div className="info-card">
                <div className="img">
                    <img src={s34}/>
                </div>
                <h2>Мобильная разработка</h2>
                <p>Мы предлагаем полный цикл веб-разработки: от создания дизайна и верстки до программирования и тестирования.</p>
            </div>
        </div>
    </section>
     );
}

export default SectionThree;