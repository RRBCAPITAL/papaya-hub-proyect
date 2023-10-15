

export const validation = (data) => {

    const err = {}

    console.log(data.enfoque);

    if(!data?.enfoque) err.enfoque = 'Selecciona un enfoque.'
    
    if(!data?.stackTechs) err.stackTechs = 'Este campo no puede estar vacío.'
    if(!data?.phone) err.phone = 'Este campo no puede estar vacío.'
    if(!data?.description) err.description = 'Este campo no puede estar vacío.'

    return err
}