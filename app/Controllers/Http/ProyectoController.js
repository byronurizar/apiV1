'use strict'

class ProyectoController {
    async index({auth}) //Devuelve todos los proyectos
    {
        const user=await auth.getUser();
        console.log(user);
        return {
            mensaje:"Holas estamos en index de proyecto"
        };
    }
}

module.exports = ProyectoController
