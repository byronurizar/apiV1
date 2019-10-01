const AccesoDenegadoException=use('App/Exceptions/AccesoDenegadoException');
const RecursoNoEncontradoException=use('App/Exceptions/RecursoNoEncontradoException');
class AutorizacionService{
    verificarPermiso(recurso,user){

        if(!recurso){
            throw new RecursoNoEncontradoException();
        }
        if(recurso.user_id!=user.id){ //para no dejar eliminar si no es el dueño del proyecto
            throw new AccesoDenegadoException();
        }
    }
}

module.exports =new AutorizacionService();

