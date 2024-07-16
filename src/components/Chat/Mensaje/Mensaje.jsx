import React from "react";
import './Mensaje.css'


/* Globo de chat */


export const Mensaje = ({mensaje}) => {
    const {author, text, state, day, hour, id} = mensaje
    /* console.log(author) */
    return (
        <div className={validacionAutor(author)} key={id}>
            <div className="burbuja">
                <div className="author-name">
                    <span className="author fonts">{author}</span>
                </div>
                <div className="message-box">
                    <span className="messageText fonts">{text}</span>
                </div>
                <div className="date-hour-state">
                    <div className="date-hour">
                        <span className="hour fonts">{hour}</span>
                    </div>
                    <div className={author + " state-box"} >
                        <span>{validacionVisto(state)}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

const validacionVisto = (estado) => {
    if(estado === 'visto'){
        const state = <i className="bi bi-check2-all state"></i>
        return state
    }
    else if(estado === 'no recibido'){
        const state = <i className="bi bi-check2 state-negative"></i>
        return state
    }
}

const validacionAutor = (autor) => {
    if(autor == 'yo'){
        return 'yo'
    }
    else{
        return 'otro'
    }
}
/*
RAFC = Crea un componente y lo exporta, tambien ambos importan react from react
RAFCE = Crea un componente y lo exporta por defecto
*/