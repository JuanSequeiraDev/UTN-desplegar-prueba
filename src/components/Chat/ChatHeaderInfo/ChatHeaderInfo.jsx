import React, { useEffect, useState } from 'react'
import './ChatHeaderInfo.css'
import { Link, useParams } from 'react-router-dom'
import { obtainContacts } from '../../../fetching/obtainContacts'



export const ChatHeaderInfo = () => {
    const {chatId} =useParams()
    const [contacto, setContacto] = useState({})


    useEffect(
        ()=> {
            obtainContacts().then(
                (contactos) =>{
                    const MOOK_MENSAJES = contactos.find(contacto => contacto.userId == chatId)
                    setContacto(MOOK_MENSAJES)
                }
            )
        },
        []
    )

    const {img, nombre} = contacto

    return (
        <section className='top-section-nav'>
            <nav className='chat-nav'>
                <div className='user-info'>
                    <Link to={'/'}><div className='arrow'><i className="bi bi-arrow-left"></i></div></Link>
                    <div className='profile-pic'><img src= {img} alt="Imagen del contacto" className='profile-img'/></div>
                    <div className='username-box'>{nombre}</div>
                </div>
                <div className='call-and-config'>
                    <div className='videocall nav-end'><i className="bi bi-camera-video"></i></div>
                    <div className='phonecall nav-end'><i className="bi bi-telephone"></i></div>
                    <div className='options nav-end'><i className="bi bi-three-dots-vertical"></i></div>
                </div>
            </nav>
        </section>
    )
}
