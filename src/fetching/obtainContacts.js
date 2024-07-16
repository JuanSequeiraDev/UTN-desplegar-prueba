export const obtainContacts = async () =>{
    const response = await fetch(
        '/MOOK_CHATS.json',
        {
            method: "GET"
        }
    )/*  .then(res => res.json())
    .then(data => data) */
    
    return response.json()
    /* console.log('data productos', data) *//* Practica para crear un objeto con el objeto de respuesta que se busca como valor, es utilizado cuando se repiten logeos de el mismo valor en distintos componentes/funciones */
}