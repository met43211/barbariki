import { useState } from "react";
import close from '../assets/close.png'
import open from '../assets/open.png'

function SectionSix() {
    const [q1, setQ1] = useState('close')
    const [q2, setQ2] = useState('close')
    const [q3, setQ3] = useState('close')
    const [q4, setQ4] = useState('close')
    const [q5, setQ5] = useState('close')
    return ( 
        <section className="s6">
            <div className="pre-title">
                <div className="line"></div>
                <div className="text">FAQs</div>
                <div className="line"></div>
            </div>
            <h1>
                Часто задаваемые <span>вопросы</span>
            </h1>
            <div className="questions">
                <div className="question">
                    <div className={"qestion-block " + q1} onClick={()=>{q1==='close'?setQ1('open'):setQ1('close')}}>
                        <p>Как расчитывается стоимость проекта?</p>
                        {q1 === 'close'?<img src={open}></img>:<img src={close}></img>}
                    </div>
                    {q1==='open'&&
                        <div className="answer">
                            Стоимость проекта всегда расчитывается индивидуально.<br />
                            Если речь идет о крупном долгосрочном проекте или о проекте, где объем работы невозможно оценить сразу, то применяется почасовая оплата.
                        </div>
                    }
                </div>
                <div className="question">
                    <div className={"qestion-block " + q2} onClick={()=>{q2==='close'?setQ2('open'):setQ2('close')}}>
                        <p>Как расчитывается стоимость проекта?</p>
                        {q2 === 'close'?<img src={open}></img>:<img src={close}></img>}
                    </div>
                    {q2==='open'&&
                        <div className="answer">
                            Стоимость проекта всегда расчитывается индивидуально.<br />
                            Если речь идет о крупном долгосрочном проекте или о проекте, где объем работы невозможно оценить сразу, то применяется почасовая оплата.
                        </div>
                    }
                </div>
                <div className="question">
                    <div className={"qestion-block " + q3} onClick={()=>{q3==='close'?setQ3('open'):setQ3('close')}}>
                        <p>Как расчитывается стоимость проекта?</p>
                        {q3 === 'close'?<img src={open}></img>:<img src={close}></img>}
                    </div>
                    {q3==='open'&&
                        <div className="answer">
                            Стоимость проекта всегда расчитывается индивидуально.<br />
                            Если речь идет о крупном долгосрочном проекте или о проекте, где объем работы невозможно оценить сразу, то применяется почасовая оплата.
                        </div>
                    }
                </div>
                <div className="question">
                    <div className={"qestion-block " + q4} onClick={()=>{q4==='close'?setQ4('open'):setQ4('close')}}>
                        <p>Как расчитывается стоимость проекта?</p>
                        {q4 === 'close'?<img src={open}></img>:<img src={close}></img>}
                    </div>
                    {q4==='open'&&
                        <div className="answer">
                            Стоимость проекта всегда расчитывается индивидуально.<br />
                            Если речь идет о крупном долгосрочном проекте или о проекте, где объем работы невозможно оценить сразу, то применяется почасовая оплата.
                        </div>
                    }
                </div>
                <div className="question">
                    <div className={"qestion-block " + q5} onClick={()=>{q5==='close'?setQ5('open'):setQ5('close')}}>
                        <p>Как расчитывается стоимость проекта?</p>
                        {q5 === 'close'?<img src={open}></img>:<img src={close}></img>}
                    </div>
                    {q5==='open'&&
                        <div className="answer">
                            Стоимость проекта всегда расчитывается индивидуально.<br />
                            Если речь идет о крупном долгосрочном проекте или о проекте, где объем работы невозможно оценить сразу, то применяется почасовая оплата.
                        </div>
                    }
                </div>
            </div>
        </section>
     );
}

export default SectionSix;