'use strict'

const Proyecto=use('App/Models/Proyecto');
class ProyectoController {
    async index({auth}) //Devuelve todos los proyectos
    {
        const user=await auth.getUser();
        return await user.proyectos().fetch(); // todo lo que tenga 
    }
    async create({auth,request}){
        const user=await auth.getUser(); //para tomar el usuario al que corresponde el token
       const {nombre}=request.all();
       const proyecto=new Proyecto();
       proyecto.fill({
           nombre
       });

       await user.proyectos().save(proyecto);
       return proyecto;
    }
}

module.exports = ProyectoController
