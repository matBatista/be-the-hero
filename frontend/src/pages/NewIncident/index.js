import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

import api from '../services/api';
import './styles.css';

export default function NewIncident(){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const ongId = localStorage.getItem('ongId');

    const history = useHistory();

    async function handleNewIncident(e){
        e.preventDefault();

        const data = {
            title,
            description,
            value,
        };

        try {
            await api.post('incidents',data, {
                headers: {
                    Authorization: ongId,
                }
            });

            history.push('/profile');

        } catch (error) {
            alert('Erro ao Cadastrar Caso')
        }


    }
    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be the Hero"></img>

                    <h1> Cadastrar Novo Caso </h1>
                    <p> Descreva o caso detalhadamente.</p>
                    
                    <Link className='back-link' to="/profile">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Voltar para Home
                    </Link>
                </section>

                <form onSubmit={handleNewIncident}>
                    <input 
                        placeholder="Titulo do Caso" value={title} onChange={e => setTitle(e.target.value)} />
                    <textarea 
                        placeholder="Descrição" value={description} onChange={e => setDescription(e.target.value)} />
                    <input 
                        placeholder="Valor em Reais" value={value} onChange={e => setValue(e.target.value)} />
                    

                    <button className ="button" type = "submit">Cadastrar</button>>
                </form>



            </div>
        </div>

    );
}