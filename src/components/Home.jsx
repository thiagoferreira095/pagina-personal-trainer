import React from "react";
import '../scss/Home.scss';

function Home() {
    return (
        <section className="home-section d-flex align-items-center" id="home">
            <div className="container">
                <div className="row">
                    <div className="box-content col-12 col-sm-12 col-lg-6 d-flex flex-column justify-content-center">
                        <h2>Franciele F. - Personal Trainer</h2>
                        <p>Com mais de 5 anos de experiência, ajudo mulheres a conquistarem mais saúde e autoestima através do treino inteligente.</p>
                        <p>Transforme seu corpo e sua rotina com treinos personalizados, pensados especialmente para o seu objetivo. Aqui, você recebe acompanhamento profissional e resultados reais. Comece hoje a sua melhor versão com quem entende do seu ritmo e do seu potencial.</p>
                        <div className="d-flex mt-3">
                            <a href="#!" className="btn-cta btn-home-cta">Mude o seu corpo agora mesmo</a>
                            <a href="#!" className="btn-cta btn-home-doubt">Conheça os benefícios</a>
                        </div>
                    </div>

                    <div className="box-video col-12 col-sm-12 col-lg-6 my-5"></div>
                </div>
            </div>
        </section>
    );
}

export default Home;