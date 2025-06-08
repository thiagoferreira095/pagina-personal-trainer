import React from 'react';
import '../scss/Beneficio.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { faStopwatch } from '@fortawesome/free-solid-svg-icons';
import { faHeadset } from '@fortawesome/free-solid-svg-icons';


function Beneficio() {
    return (
        <section className="beneficio-section d-flex align-items-center">
            <div className="container">
                <div className="beneficio-content">
                    <h3 className="pt-5">Temos <span style={{color: 'var(--color-secondary)'}}>benefícios</span> incríveis para <span style={{color: 'var(--color-secondary)'}}>você!</span></h3>                
                    <div className="d-flex justify-content-center mt-5">
                        <div className="card col-12 col-sm-12 col-lg-3">
                            <div className="card-header d-flex align-items-center">
                                <FontAwesomeIcon style={{color: 'var(--color-secondary)'}} icon={faDumbbell} size="2x" />
                                <h4>Treino e dieta 100% personalizados</h4>
                            </div>

                            <div className="card-body">
                                <p>Seu treino e sua alimentação são desenvolvidos exclusimaente de acordo com o seu nível, objetivo e rotina.</p>
                                <span>Mas o que isso quer dizer?</span>
                                <p>Isso significa que você não perde tempo com métodos genéricos ou dietas copiadas da internet — cada passo é pensado.</p>
                            </div>
                        </div>
                        <div className="card col-12 col-sm-12 col-lg-3 card-mid">
                            <div className="card-header d-flex align-items-center">
                                <FontAwesomeIcon style={{color: 'var(--color-secondary)'}} icon={faStopwatch} size="2x" className="text-blue-600" />
                                <h4>Acompanhamento contínuo</h4>
                            </div>

                            <div className="card-body">
                                <p>Faremos ajustes periódicos no seu treino e na sua dieta de forma estratégica para garantir sua evolução constante.</p>
                                <span>Mas o que isso quer dizer?</span>
                                <p>Isso evita estagnação e mantém seu corpo sempre respondendo aos estímulos, acelerando seus resultados de forma inteligente.</p>
                            </div>
                        </div>
                        <div className="card col-12 col-sm-12 col-lg-3">
                            <div className="card-header d-flex align-items-center">
                                <FontAwesomeIcon style={{color: 'var(--color-secondary)'}} icon={faHeadset} size="2x" className="text-blue-500" />
                                <h4>Suporte online</h4>
                            </div>

                            <div className="card-body">
                                <p>Você terá suporte direto online via WhatsApp para esclarecer qualquer questão e garantir um acompanhamento mais eficaz.</p>
                                <span>Mas o que isso quer dizer?</span>
                                <p>Rápido, prático e pessoal — tudo para te manter no foco.</p>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center mt-5">
                        <a className="btn-cta btn-beneficio-cta col-12 col-sm-4 col-lg-4 text-center" href="#!">Marque a sua consulta agora</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Beneficio;