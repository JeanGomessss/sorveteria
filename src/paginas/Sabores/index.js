import React from "react";
import './style.css';
import Topo from '../../componentes/Topo';
import Rodape from '../../componentes/Rodape';

export default function Sabores(){
    return(
        <section>
            <Topo />
            <section className="banner-sabores">
                 <h1>NOSSOS SABORES</h1>
            </section>

            <section className="sabores-disponiveis limitar-secao">
                <h2>SABORES DE SORVETE</h2>
                <div className="cards">
                    <div className="card-box">
                        <img src="/assets/sabor-oreo.png"></img>
                        <div>
                            <h3>Sorvete de Oreo</h3>
                            <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
                        </div>
                    </div>

                    <div className="card-box">
                        <img src="/assets/sabor-pistache.png"></img>
                        <div>
                            <h3>Sorvete Pistache</h3>
                            <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>
                        </div>
                    </div>

                    <div className="card-box">
                        <img src="/assets/sabor-cookies-avela.png"></img>
                        <div>
                            <h3>Sorvete Cookies e Avelã</h3>
                            <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
                        </div>
                    </div>

                    <div className="card-box">
                        <img src="/assets/sorbet-kiwi.png"></img>
                        <div>
                            <h3>Sorvete de Kiwi</h3>
                            <p>Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.</p>
                        </div>
                    </div>

                    <div className="card-box">
                        <img src="/assets/sorbet-morango.png"></img>
                        <div>
                            <h3>Sorvete de Morango</h3>
                            <p>Sorvete de Morango Gourmet. Tradicional e saboroso.</p>
                        </div>
                    </div>

                    <div className="card-box">
                        <img src="/assets/sorbet-limao.png"></img>
                        <div>
                            <h3>Sorvete de Limão Siciliano</h3>
                            <p>O incrível sorvete gourmet de limão siciliano vai te encantar.</p>
                        </div>
                    </div>
                </div>
            </section>
            <Rodape />
        </section>
    );
}