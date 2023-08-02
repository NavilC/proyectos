const {ConfiguracionBaseDatos} = require('./configuracion')

function autenticar(usuario, password) {
    if(usuario === ConfiguracionBaseDatos.usuario && password === ConfiguracionBaseDatos.password){
        console.log("Autenticado")
    }else{
        console.log("Error en la Autenticacion")
    }
    
}

module.exports = {autenticar}