import React from 'react';
import './register.css';
import '../../global.css';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from "react-icons/fi";

import logoImg from '../../assets/logo roxa.png';

export default function Register(){
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} height={120} alt="AM Fleet"/>

                    <h1>Cadastro</h1>
                    <p>Cadastre-se para acompanhar a frota da empresa</p>
                    <Link className="back-link" to="/">
                    <FiArrowLeft size={16} color="4f8cff"/>
                        Fazer login
                    </Link>
                </section>

                <form>
                    <input type ="text" placeholder="Nome Completo" />
                    <input type ="text" placeholder="Email" />
                    <input type ="text" placeholder="CPF" />
                    <input type ="password" placeholder="Senha" />
                    <input type ="password" placeholder="Confirmar senha" />

                    <button className="button" type="submit">Cadastrar</button>

                </form>
            </div>
        </div>
    );
}