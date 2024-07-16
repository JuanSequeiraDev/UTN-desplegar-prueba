import React, { useEffect, useState } from 'react';
import './ContactList.css'
import { Link, useParams } from 'react-router-dom'
import { MdGroup } from "react-icons/md";
import { LiaHistorySolid } from "react-icons/lia";
import { RiChatNewLine } from "react-icons/ri";
import { HiDotsVertical } from "react-icons/hi";
import { obtainContacts } from '../../fetching/obtainContacts';


const ContactList = () => {
    const [fetchMOOK, setfetchMOOK] = useState([])

    useEffect(
        ()=> {
            obtainContacts().then(
                (MOOK) =>{
                    /* console.log('productos' , MOOK) */
                    setfetchMOOK(MOOK)
                }
            )
        },
        []
    )
    console.log(fetchMOOK)


    return (
        <div className='contact-list'>
            <div className='contact-header'>
                <div className='img-box'>
                    <img className='profile-pic' src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="profile picture" />
                </div>
                <div className='user-box'>
                    <div className='icon'><MdGroup className='icons'/></div>
                    <div className='icon'><LiaHistorySolid className='icons'/></div>
                    <div className='icon'><RiChatNewLine className='icons'/></div>
                    <div className='icon'><HiDotsVertical className='icons'/></div>
                </div>
            </div>
                <div className='contactos'>
                {fetchMOOK.map(usuario =>{
                    return(
                        <Link className='link' to={'/chat/' + usuario.userId}>
                            <div className='contacto' key={usuario.userId}>
                                <img className='contacto-img' src={usuario.img} alt="contact profile picture" />
                                <div className='text-box'>
                                    <div className='contacto-data'>
                                        <h3 className='contacto-user'>{usuario.nombre}</h3>
                                        <span className='last-mensaje'>{usuario.thumbnail}</span>
                                    </div>
                                    <div className='connection-box'>
                                        <span className='last-connection'>{usuario.ultima_conexion}</span>
                                    </div>
                                </div>
                                
                            </div>
                        </Link>
                    )
                })}
            </div>
            <div className='add-contact'>
                <div className='contacto'>
                    <span>+</span>
                    <span>Añadir contacto</span>
                </div>
            </div>
        </div>
    )
}

export default ContactList