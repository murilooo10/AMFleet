import React from 'react';
import './home.css';

import logoImg from '../../assets/AM Fleet logo azul.png';
import { Link} from 'react-router-dom';
import { FiPower } from 'react-icons/fi';
import {FaCar} from 'react-icons/fa';
import {FaCogs} from 'react-icons/fa';
import {FaIdCard} from 'react-icons/fa';
import {FaRegCalendarPlus} from 'react-icons/fa';
import {FaCarBattery} from 'react-icons/fa';
import {FaCameraRetro} from 'react-icons/fa';
import {FaChartLine} from 'react-icons/fa';

export default function Home(){
    return(
        <div className="home-container">
                <header>
                    <img src={logoImg} height={120} alt="AM Fleet"/>
                    <span>Bem vindo, Murilo</span>

                    <button className="button-singout" type="button">
                        <FiPower size={18}></FiPower>
                    </button>
                </header>
            <h1>Selecione um módulo</h1>

                <ul>
                    <Link className="button-Modulos" to="/veiculos">
                        <li>                
                            <FaCar size={150} /><br />
                            <strong>Veículos</strong>
                        </li>
                    </Link>
                    <Link className="button-Modulos" to="/motoristas">
                    <li>
                        <FaIdCard size={150} /><br />
                        <strong>Motoristas</strong>
                    </li>
                    </Link>
                    <Link className="button-Modulos" to="/oficinas">
                    <li>
                        <FaCogs size={150} /><br />
                        <strong>Oficinas</strong>
                    </li>
                    </Link>
                    <Link className="button-Modulos" to="/agendamento">
                    <li>
                        <FaRegCalendarPlus size={150} /><br />
                        <strong>Agendamento</strong>
                    </li>
                    </Link>
                    <Link className="button-Modulos" to="/estoque">
                    <li>
                        <FaCarBattery size={150} /><br />
                        <strong>Estoque de peças</strong>
                    </li>
                    </Link>
                    <Link className="button-Modulos" to="/reembolso">
                    <li>
                        <FaCameraRetro size={150} /><br />
                        <strong>Pedir Reembolso</strong>
                    </li>
                    </Link>
                    <Link className="button-Modulos" to="/analise">
                    <li>
                        <FaChartLine size={150} /><br />
                        <strong>Análise </strong>
                    </li>
                    </Link>
                </ul>
        </div>
    )
}