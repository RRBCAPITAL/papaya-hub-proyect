import axios from "axios"

export const createAnuncio = async (updatedFormContent) => {

    const formContentData = {
        userId: updatedFormContent?.userId,
        tarifaxhr: Number(updatedFormContent?.tarifaxhr),
        tarifaxmr: Number(updatedFormContent?.tarifaxmr),
        name: updatedFormContent?.name,
        questionEnd: updatedFormContent?.questionEnd,
        description: updatedFormContent?.description,
        whatsapp: updatedFormContent?.whatsapp,
        region: updatedFormContent?.region,
        lugar: updatedFormContent?.lugar,
        nacionalidad: updatedFormContent?.nacionalidad,
        diasAtencion: updatedFormContent?.diasAtencion,
        horarioInicio: updatedFormContent?.horarioInicio,
        horarioFin: updatedFormContent?.horarioFin,
        edad: Number(updatedFormContent.edad),
        idioma: updatedFormContent?.idioma,
        altura: updatedFormContent?.altura,
        peso: updatedFormContent?.peso,
        imagenPrincipal: updatedFormContent?.imagenPrincipal,
        galeriaFotos: updatedFormContent?.galeriaFotos,
        galeriaVideos: updatedFormContent?.galeriaVideos,
        atencion: updatedFormContent?.atencion
    }

    console.log(formContentData);

    const res = await axios.post('api/anuncio', formContentData).catch(err => console.log("Hubo un error al crear: ", err))
    
    if(res){
        localStorage.setItem('updatedAnuncio', JSON.stringify(true))
    }
    
    return res
}
