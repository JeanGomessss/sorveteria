import React from "react";
import './style.css';

export default function Rodape() {
    return(
        <footer>
            <div className="rodape-infos">
                <img src="./assets/logo.png" alt="logomarca"></img>
                <div>
                    <h3>ENDEREÇO</h3>
                    <p>Av. Bernardino de Campos, 98</p>
                    <p>São Paulo, SP 12345-678</p>
                </div>

                <div>
                    <h3>CONTATO</h3>
                    <p>info@meusite.com</p>
                    <p>Tel: (11) 3456-7890</p>
                </div>

                <div>
                    <h3>HORÁRIOS</h3>
                    <p>ABERTO TODOS OS DIAS</p>
                    <p>10:00 - 22:00</p>
                </div>
            </div>

            <div className="rodape-direitos">
                <p>&copy; 2023 Gelateria - Desenvolvido por Jean Gomes</p>
            </div>
        </footer>

    );
}