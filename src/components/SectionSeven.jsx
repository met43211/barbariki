function SectionSeven() {
    return ( 
        <section className="s7">
            <div className="inner">
                <div className="pre-title">
                    <div className="line"></div>
                        <div className="text">Оставить заявку</div>
                    <div className="line"></div>
                </div>
                <h1>Форма для <span>обратной связи</span></h1>
                <div className="text">
                Оставьте контактные данные и наш менеджер свяжется с Вами в кратчайшие сроки
                </div>
                <form action="submit">
                    <input type="text" name='name' placeholder="Имя"/>
                    <input type="email" name='email' placeholder="Email"/>
                    <textarea name="comment" id="comment" cols="30" rows="10" placeholder="Комментарий"></textarea>
                    <button className="btn" type='submit'>Отправть заявку</button>
                </form>
            </div>
        </section>
     );
}

export default SectionSeven;