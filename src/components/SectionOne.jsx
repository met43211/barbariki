function SectionOne() {
    return ( 
        <section className="s1">
            <div className='pre-title'>
                <div className="line"/>
                <div className="text">
                    Добро пожаловать в наше креативное агентство!
                </div>
                <div className="line"/>
            </div>
            <h1 className='title'>
                Сделайте свой бизнес <span>выдающимся!</span>
            </h1>
            <div className='text'>
                Наше креативное агентство предоставляет широкий спектр услуг, включая графический дизайн, веб-разработку, оформление соцсетей. Мы готовы воплотить ваши идеи в жизнь и помочь вам достичь успеха в любой сфере деятельности.
            </div>
            <div className='buttons'>
                <a href="#follow">
                    <button className="btn">
                        Оставить заявку
                    </button>
                </a>
                <a href="#portfolio">
                    <button className="btn btn-white">
                        Смотреть портфолио
                    </button>
                </a>
            </div>
        </section>
     );
}

export default SectionOne;