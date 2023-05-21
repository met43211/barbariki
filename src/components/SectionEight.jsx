import cyber from '../assets/cyber.png'
function SectionEight() {
    return ( 
        <section className="s8">
            <div className="main">
                <div className="pre-title">
                    <div className="line"></div>
                    <div className="text">Партнеры</div>
                </div>
                <h1>Наши <span>партнеры и спонсоры</span></h1>
            </div>
            <div className="side">
                <img src={cyber}></img>
            </div>
        </section>
     );
}

export default SectionEight;