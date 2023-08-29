import React from "react";
import './style.css';
import Topo from '../../componentes/Topo/'
import Rodape from '../../componentes/Rodape/'

export default function Sobre(){
    return(
        <section>
            <Topo />
            <main>
                <section className="banner">
                    <div>
                        <h1>SORVETE ARTESANAL</h1>
                    </div>
                </section>

                <section className="sabores">
                    <img src="./assets/banner-sabores.jpg" alt="banner-sabores"></img>
                    <div className="sabores-desc">
                        <h2>NOSSOS SABORES</h2>
                        <span>Novos e deliciosos!</span>

                        <p>Sorvete bom é aquele feito com os melhores ingrediente!
                            Aqui na gelateria todos os nossos produtos são naturais, à base
                            de frutas e sem nenhum conservante! Também temos opções sem
                            lactose e sem açucar. Venha conhecer e perceber que tem como Sorvete
                            ser delicioso e saudável ao mesmo tempo!
                        </p>
                    </div>
                </section>

                <section className="eventos">
                    <div className="eventos-desc">
                        <h2>NOSSOS EVENTOS</h2>
                        <span>Delícias com sorvete!</span>

                        <p>Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui
                            prontinhos para te atender e oferecer os melhores eventos com os melhores
                            sorvete da sua vida! Venha nos conhecer e passar um tempo aqui com a gente. 
                        </p>
                    </div>
                    <img src="./assets/eventos-image.jpg" alt="eventos-image"></img>
                </section>

                <section className="sobre">
                    <img src="./assets/sobre-image.jpg" alt="sobre-image"></img>
                    <div className="sobre-desc">
                        <h2>SOBRE NÓS</h2>
                        <span>Alegria em cada casquinha!</span>

                        <p>Venha tomar o melhor sorvete da região aqui com a gente! Nós
                            estamos há anos no mercado produzindo o que tem de melhor para o
                            nosso cliente e você não pode ficar fora dessa. Venha nos fazer
                            uma visita e aproveite o melhor atendimento e o melhor sorvete
                            da cidade.
                        </p>
                    </div>
                </section>
            </main>

            <Rodape />
        </section>
    );
}