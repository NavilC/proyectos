const Cryptr = require("cryptr");
const cryptr = new Cryptr('llave')
//const {ConfiguracionCrypto} = require('../configuracion/configuracion')

//const cryptr = new Cryptr(ConfiguracionCrypto.llaveSecreta);

class Mascota{

    #secreto
    #secretoEncriptado
    constructor(nombre = "No definido", raza = "no definido", sexo = "no definido", secreto){
        this.id = "id-"+ nombre + "-" + raza[0]
        this.nombre = nombre
        this.raza = raza
        this.sexo = sexo
        this.#secreto = secreto
        this.#prepararSecreto()
    }


    get nombreCompleto(){
        //Backticks
        return `${this.nombre} ${this.raza}`
    }

    #prepararSecreto(){
        //return cryptr.encrypt(this.#secreto)
        this.#secretoEncriptado = cryptr.encrypt(this.#secreto)
    }

    get obtenerSecreto(){
        return this.#secretoEncriptado
    }
    presentarse(){
        console.log("Hola mi nombre es ", this.nombre, " soy de raza ",this.raza, "mi sexo es: ",this.sexo);
    }
}

module.exports = {Mascota}