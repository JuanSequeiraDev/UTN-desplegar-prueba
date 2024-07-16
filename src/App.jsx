import react from 'react'
import { ChatScreen } from './Screens/ChatScreen'
import { Route, Routes } from 'react-router-dom'
import ContactList from './components/Contacts/ContactList'




/* Importamos a la pantalla de chat */
const App = () => {
    console.log()
    return (
        <>
            
            <Routes>
                <Route path='/' element={<ContactList/>}/>
                <Route path='/chat/:chatId' element={<ChatScreen />}/>
            </Routes>
        </>
    )
}



export default App




//NOTAS

/* DATA_MOOK es el criterio subjetivo de quien hace el código de como estructura los datos, como llama sus variables */

/* DATA_MOOK = [
    {
        author: 'yo' | 'cualquier nombre',
        text: 'texto de mensaje',
        estado: 'visto' | 'entregado' | 'no entregado',
        day: 'hoy' | 'ayer' | 'fecha',
        hour: '13:15'
        id: 'valor_id'
    }
] */
