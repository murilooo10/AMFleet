import React from 'react';
import './styles.css';
import {FiLogIn} from 'react-icons/fi';
import {Link} from 'react-router-dom';
import '../../global.css';

import motoristaImg from '../../assets/motorista.png';
import logoImg from '../../assets/logo roxa.png';

export default function Logon(){
    return(
        <div className="logon-container">
            <div className="content">
            <section className="form">
                <img src={logoImg} height={120} alt="AM Fleet"/>

                <form>
                    <h1>Faça seu logon</h1>

                    <input type="text" placeholder="Usuário"/>
                    <input type="password" placeholder="Senha"/>

                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                    <FiLogIn size={16} color="4f8cff"/>
                        Não tenho cadastro
                    </Link>
                </form>
            </section>

            <img src={motoristaImg} height={450} alt="logo"/>
            </div>
        </div>
    );
}