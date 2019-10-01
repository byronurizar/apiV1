'use strict'

const Proyecto=use('App/Models/Proyecto');
const autorizacionServie=use('App/Services/AutorizacionService');
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

    async destroy({auth,response,params}){
        const user=await auth.getUser(); //
        const {id}=params;

        const proyecto=await Proyecto.find(id);

        autorizacionServie.verificarPermiso(proyecto,user);
        await proyecto.delete();
        return proyecto;
    }
}

module.exports = ProyectoController
