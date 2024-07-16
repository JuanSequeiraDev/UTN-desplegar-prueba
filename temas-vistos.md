-Como crear un componente?
-Como exportar e importar componentes?
-Como invocar o instanciar componentes?
-Que son las dependencias y como se instalan? (no aprendimos a instalar nuevas)
-Diferenciar a una funcion de un componente? (Los componentes retornan JSX)

Respuestas:
1)-como crear un componente?
const Nombre = () => {
    return(
        <h2 className='subtitulo'>pepe</h2>         <!-- Los componentes siempre retornan HTML -->
    )
}

2)-Como exportar e importar componentes?


import React from 'react'
/components/button.jsx

const Boton = () => {
    return(
        <button>Mi boton</button>
    )
}



-------------------------------------------------------------
/screen/HomeScreen.jsx
codigo:


import React from 'react'
import {Boton} from './components/buttons.jsx'

const HomeScreen = () => {
    return(
        <main>
            < Button/>
        </main>
    )
}

-------------------------------------------------------------

-como invocar o instanciar componentes

/pages/Contact.jsx

import React from 'react'
import {ContactForm} from './components/ContactForm.jsx'


const ContactPage = () => {
    return(
        <h1>Formulario de contacto</h1>
        <!-- Aqui debes instanciar el formulario de contacto -->
        <ContactForm/> <!-- Asi se instancia el componente -->
    )
}